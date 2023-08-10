import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Constancia',
      url: '/menu/asistencias',
      icono: 'book'
    },
    {
      titulo: 'Perfil',
      url: '/menu/perfil',
      icono: 'person'
    }
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i: any) {
    this.indiceSeleccionado = i;
  }

  async salir() {
    // const alert = await this.alertController.create({
    //   header: 'Salir',
    //   message: '¿Deberitas te quieres salir?',
    //   buttons: [
    //     {
    //       text: 'No mejor no',
    //       handler: () => {

    //       }
    //     }, {
    //       text: 'Si',
    //       handler: () => {
    //         localStorage.removeItem('ID_Usuario');
    //         this.navCtrl.navigateRoot('login');
    //       }
    //     }
    //   ]
    // });

    // await alert.present();

    Swal.fire({
      title: 'Salir',
      text: "¿Quieres cerrar sesion?",
      icon: 'warning',
      heightAuto: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No mejor no'
    }).then((result: any) => {
      if (result.isConfirmed) {
        localStorage.removeItem('ID_Usuario'); // remove sesion on logout
        this.navCtrl.navigateRoot('login');
      }
    })
  }


}
