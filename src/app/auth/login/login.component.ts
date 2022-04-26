import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?:User;
  loading = false;

  userForm = new FormGroup({});

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb :FormBuilder,
    private snackBar: MatSnackBar
    ) { }


  ngOnInit(): void {

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  logear(){
    this.authService.login(this.userForm.value)
                    .subscribe({
                      next: (resp) => {
                        this.user = resp[0];
                        localStorage.setItem('user', JSON.stringify(this.user?.username));
                        this.fakeloading();
                      },
                      error: (err) => { this.error("El usuario o contraseña son incorrectos");
                      }
                    })
  }

  error(msjerror : string){
    this.snackBar.open(msjerror, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeloading(){
    this.loading = true;
    setTimeout(() => {
        this.router.navigate(['dashboard']);
    }, 1500);
  }

}
