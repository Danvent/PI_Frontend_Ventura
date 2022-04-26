import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import * as _moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../../interfaces/cliente.interface';


@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css']
})
export class DialogClienteComponent implements OnInit {

  panelOpenState = false;

  types: string[] = ['propietario','visitante','ocupante'];
  selected = '1';
  clientForm = new FormGroup({});

   moment = _moment;


  constructor(
    private clienteService:ClienteService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public ediData : number,
    private dialogRef : MatDialogRef<DialogClienteComponent>
    ) { }

  ngOnInit(): void {

      this.clientForm = this.fb.group({
        idcustomer: [''],
        descripcion: [''],
        documento: [''],
        ruc: [''],
        retainer: [1],
        tipo: [''],
        nombre: [''],
        nombre2: [''],
        apellidoP: [''],
        apellidoM: [''],
        celular: [''],
        correo:[''],
        fechaNac: [''],
        departamento:[''],
        provincia:[''],
        distrito:[''],
        createdAt: [Date.now()],
        updatedAt:[''],
        pets: this.fb.array([]),
        vehicles: this.fb.array([])
      });

    this.clientForm.controls['tipo'].setValue("otroscampos");

      if(this.ediData != null){
        this.llenarCliente(this.ediData);
      }
  }


  petsForm(){
    return this.fb.group({
      ip_pk: [null],
      idPet: [null],
      descripcion: [null],
      nombre: [null],
      raza : [null],
      sexo: [null],
      color: [null],
      createdAt: [null],
      updatedAt: [null]
    })
  }

  registrar(){
    // let pato = (this.clientForm.get('fechaNac')?.value).format("YYYY-MM-DD");
    // console.log(pato);
    // console.log(this.clientForm.get('fechaNac')?.value._i);
    // console.log(this.clientForm.value);
    // this.clientForm.controls['fechaNac'].setValue(pato);
    this.clienteService.registrarCliente(this.clientForm.value)
              .subscribe(
                {
                  next : (resp) => {
                    alert(resp.mensaje);
                  },
                  error: (err) => console.log(err)
                }
              )
  }

  actualizar(){
    this.clienteService.actualizarCliente(this.clientForm.value)
                       .subscribe({
                         next: (resp) => {alert(resp.mensaje)}
                       })
  }

  get fecha(): FormControlName{
    return this.clientForm.get('fechaNac')?.value
  }


  get pets(): FormArray{
    return this.clientForm.get('pets') as FormArray;
  }

  addNewPets(){
    this.pets.push(this.petsForm())
  }

  removePet(i:number){
    this.pets.removeAt(i);
  }

  llenarCliente(idcustomer : number){
    this.clienteService.obtenerCliente(idcustomer)
                       .subscribe({
                         next: (resp:any) => {
                          const controlPets = resp['pets']
                          if(controlPets.length == 2){
                            this.addNewPets();
                            this.addNewPets();
                          }
                          if (controlPets.length == 1){
                            this.addNewPets();
                          }
                           Object.keys(this.clientForm.controls).forEach(key => {
                             this.clientForm.controls[key].setValue(resp[key]);
                           })
                         }
                       })
  }

}
