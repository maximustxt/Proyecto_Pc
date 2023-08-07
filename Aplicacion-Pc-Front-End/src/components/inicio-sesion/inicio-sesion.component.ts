import { Component } from '@angular/core';

//- Alerts:
import { NgxToastService } from 'ngx-toast-notifier';
//- Formularios Reactivos:
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Usuario, UsuarioGoogle } from 'src/Interfaces/Usuarios/Usuarios';
//- Google:
declare let google: any;

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {
  constructor(
    private ServiciosLogin: ServiciosComputadorasService,
    private FormBuilders: FormBuilder,
    private ngxToastService: NgxToastService
  ) {}

  DatoUsuario!: Usuario;
  FormLogin!: FormGroup;
  Usuario!: UsuarioGoogle;

  //- Cuando el componente se monta :
  ngOnInit() {
    this.ObtenerLocalStorage();
    this.CrearForm();
  }

  //- Funciones Local Storage:
  ObtenerLocalStorage() {
    const datoLocalSotrage = localStorage.getItem('Usuario');
    if (datoLocalSotrage) {
      this.DatoUsuario = JSON.parse(datoLocalSotrage);
    }
  }

  //*------------------------------LOGIN REDES SOCIALES-----------------------------*//

  //---------------------------------------------Alerts:

  AlertError(): void {
    this.ngxToastService.onDanger('Hubo un error', 'Intentalo de nuevo');
  }

  addSuccess(): void {
    this.ngxToastService.onSuccess(
      'Registrado con exito',
      'Puedes iniciar sesion'
    );
  }

  addWarning(): void {
    this.ngxToastService.onDanger('Usuario No encontrado', 'Crea otro usuario');
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

  //-ModalForm:
  CrearForm() {
    this.FormLogin = this.FormBuilders.group({
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

  SubirDatosLogin() {
    const { email, password } = this.FormLogin.value;
    if (!email.length || !password.length) {
      this.addWarningCampos();
    } else if (this.FormLogin.invalid) {
      this.addWarningErrores();
    } else {
      this.ServiciosLogin.GetUsuarios(email).subscribe(
        (date) => {
          if (date) {
            const { _id, email, name } = date;
            //-----------------------------------------------------Guardar LocalStorage:
            localStorage.setItem(
              'Usuario',
              JSON.stringify({
                _id,
                email,
                name,
                Imagen:
                  'https://pps.whatsapp.net/v/t61.24694-24/362229935_932005204557318_2122262491707651391_n.jpg?ccb=11-4&oh=01_AdQAbuzCkVDjhYS2ktBz6i146xD93d7A1nrHj-BrO6eSGw&oe=64D63B72',
              })
            );
            document.location.href = '/Home';
          } else {
            this.addWarning();
          }
        },
        (error) => {
          if (error) {
            this.addWarning();
          }
        }
      );
    }
  }

  //----------------------------------AUTENTICACION CON GOOGLE:

  ngAfterViewInit() {
    //-------------------------------------------AUTH GOOGLE:
    google.accounts.id.initialize({
      client_id:
        '22063861651-oap9kg7nj3k44iauaa2ik7agnbs8vkca.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this), // "Error de tipo no detectado: this.FuncionLoginGooogelPostUser no es una función", generalmente ocurre cuando la this palabra clave pierde contexto dentro de una función de devolución de llamada. En este caso, el problema podría estar relacionado con el alcance del this interior de la handleCredentialResponsefunción. Para solucionar esto, puede vincular explícitamente la handleCredentialResponsefunción al thiscontexto correcto. Puede hacer esto en el ngAfterViewInitmétodo usando el .bind()método.
    });
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large' } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    const token = response.credential;
    localStorage.setItem('TokeCredential', token);

    // Decodificar el JWT manualmente:
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payloadBase64 = tokenParts[1];
      const payloadDecoded = atob(payloadBase64);
      const payload = JSON.parse(payloadDecoded);

      //*- ESTOS DATOS DE ACA ABAJO LOS DEBO DE GUARDAR EN LA BASE DE DATOS:
      // Acceder a los datos del token decodificado

      this.Usuario = {
        password: payload.sub,
        name: payload.name,
        email: payload.email,
        Imagen: payload.picture,
      };

      //?- PUEDE SER UN PROBLEMA DE SCOPE:
      this.FuncionLoginGooogelPostUser(this.Usuario);
    } else {
      this.AlertError();
    }
  }

  //- Funcion de postear a la base de datos con el login de google:
  FuncionLoginGooogelPostUser(Usuario: UsuarioGoogle) {
    // Llamada al servicio PostUsuarios utilizando funciones de flecha
    this.ServiciosLogin.PostUsuarios(Usuario).subscribe(
      (date) => {
        this.ServiciosLogin.GetUsuarios(Usuario.email).subscribe((date) => {
          const { _id, email, name } = date;
          //- Envio de mail:
          this.ServiciosLogin.EnvioEmailRegistro(email).subscribe(
            (date) => date
          );
          //----------------------------------------//
          localStorage.removeItem('Usuario');
          // Guardar datos en el LocalStorage
          localStorage.setItem(
            'Usuario',
            JSON.stringify({ _id, email, name, Imagen: Usuario.Imagen })
          );
          this.addSuccess();
          document.location.href = '/Home';
        });
      },
      (error) => {
        this.addWarning();
      }
    );
  }
}
