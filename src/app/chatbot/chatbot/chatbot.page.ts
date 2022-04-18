import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, LoadingController, MenuController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  public mensajin;
  public hoy = new Date();
  currentUser = '7049146';
  messages = [];
  
  // messages = [{
  //   msg:'¡Hola Amigo! Soy el ChatBot de Banrural 😀 ¿Cómo te puedo ayudar?',
  //   date:this.hoy,
  //   type:'bot-text',
  //   size:9 
  // },
  // {
  //   msg:'Necesito consultar el saldo de mi cuenta',
  //   date:this.hoy,
  //   type:'user-text',
  //   size:6  
  // },
  // {
  //   msg:'La información de tu cuenta de ahorro 4045999009 (GTQ) es:',
  //   date:this.hoy,
  //   type:'bot-text-table',
  //   table:[['Disponible','Q 8623.84'],['Reserva','Q 0.00'],['Total','Q 8623.84']],
  //   size:12 
  // },
  // {
  //   msg:'¿Hay algo más en lo que te pueda ayudar?',
  //   date:this.hoy,
  //   type:'bot-text',
  //   size:9 
  // },
  // {
  //   msg:'No, solamente. Muchas gracias :)',
  //   date:this.hoy,
  //   type:'user-text',
  //   size:9  
  // },];

  constructor(public menuCtrl: MenuController,
              public loadCtrl: LoadingController,
              public alertCtrl: AlertController,
              public socket: Socket,
              public device: DeviceService
  ) {
  }

  ngOnInit() {
    const deviceId = this.device.getInfoDispositivo();
    console.log('deviceId', deviceId);
    this.socket.connect();
    
    this.socket.emit('auth', deviceId.pUi);

    this.socket.fromEvent(`mensaje-${deviceId.pUi}`).subscribe( (data: any) => {
      console.log('data', data);
      this.mostrarMensajeTexto(data.message);
    });
  }

  mostrarMensajeTexto(e){
    console.log(e);
    this.messages.push({
      msg:e,
      date:this.hoy,
      type:'bot-text',
      size:9  
    });
    setTimeout(() => {
      this.updateScroll();
    }, 100);
    console.log('Este mensaje se irá a un chatbot');
  }

  enviarMensajeTexto(e){
    this.socket.emit('desconectar');
    console.log(e);
    this.messages.push({
      msg:e,
      date:this.hoy,
      type:'user-text',
      size:9  
    });
    setTimeout(() => {
      this.updateScroll();
    }, 100);
  }

  updateScroll() {
    if (this.content.scrollToBottom) {
      this.content.scrollToBottom(100);
    }
  }

}
