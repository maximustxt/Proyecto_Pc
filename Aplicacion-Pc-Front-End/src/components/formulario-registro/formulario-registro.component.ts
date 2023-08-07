import { Component, Renderer2 } from '@angular/core';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Formulario Reactivos:
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//- Alerts:
import { NgxToastService } from 'ngx-toast-notifier';
//- Router:
import { Router } from '@angular/router';
//- Interfaces:
import { UsuarioGoogle } from 'src/Interfaces/Usuarios/Usuarios';
import Google from 'src/Interfaces/Google/Interface-Google';

//- Google:
declare let google: Google;

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss'],
})
export class FormularioRegistroComponent {
  constructor(
    private ServiciosRegistro: ServiciosComputadorasService,
    private formBuilder: FormBuilder,
    private ngxToastService: NgxToastService
  ) {}

  FormRegistro!: FormGroup;
  Usuario!: UsuarioGoogle;

  //---------------------------------------------ALERTS:

  addSuccess(): void {
    this.ngxToastService.onSuccess(
      'Registrado con exito',
      'Puedes iniciar sesion'
    );
  }

  addWarning(): void {
    this.ngxToastService.onDanger('Usuario Ya registrado', 'Crea otro usuario');
  }

  AlertError(): void {
    this.ngxToastService.onDanger('Hubo un error', 'Intentalo de nuevo');
  }

  addWarningCampos(): void {
    this.ngxToastService.onDanger(
      'Debes completar los campos',
      'Vuelve a intentarlo'
    );
  }
  addWarningErrores(): void {
    this.ngxToastService.onDanger(
      'Tienes errores en los campos',
      'Vuelve a intentarlo'
    );
  }

  createForm(): void {
    this.FormRegistro = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  SubirDatosRegistro() {
    // metodo submit
    const { name, email, password } = this.FormRegistro.value;
    if (!name.length || !email.length || !password.length) {
      this.addWarningCampos();
    } else if (this.FormRegistro.invalid) {
      this.addWarningErrores();
    } else {
      //- Envio de mail:
      this.ServiciosRegistro.EnvioEmailRegistro(
        this.FormRegistro.value.email
      ).subscribe((date) => date);
      //----------------------------------------//
      this.ServiciosRegistro.PostUsuarios(this.FormRegistro.value).subscribe(
        () => {
          this.addSuccess();
          document.location.href = '/InicioDeSesion';
        },
        (error) => {
          if (error) {
            this.addWarning();
          }
        }
      ); // estos datos los guardamos en el local storage
    }
  }

  ngOnInit() {
    this.createForm();
  }
}
