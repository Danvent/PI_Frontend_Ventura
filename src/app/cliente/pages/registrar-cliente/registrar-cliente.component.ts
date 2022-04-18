import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: [ './registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit{
  types: string[] = ['propietario','visitante','ocupante'];

  client = new FormGroup({});

  constructor(
    private clienteService:ClienteService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
      this.client = this.fb.group({
        descripcion: [''],
        documento: [''],
        ruc: [''],
        // retainer: [''],
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
        pets: this.fb.array([])
      });
  }


  petsForm(){
    return this.fb.group({
      descripcion: [null],
      nombre: [null]
    })
  }

  registrar(){
    console.log(this.client.value);
    this.clienteService.registrarCliente(this.client.value)
              .subscribe(
                {
                  next : (resp) => {
                    alert(resp.mensaje);
                  },
                  error: (err) => console.log(err)
                }
              )
  }



  get pets(): FormArray{
    return this.client.get('pets') as FormArray;
  }

  addNewPets(){
    this.pets.push(this.petsForm())
  }

  removePet(i:number){
    this.pets.removeAt(i);
  }
}
