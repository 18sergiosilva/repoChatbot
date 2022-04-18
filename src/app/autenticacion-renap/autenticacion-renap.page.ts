import { Component, OnInit } from '@angular/core';
import { SelphiProvider } from '../services/selphi-provider/selphi.provider';
// import { SelphiPluginFinishStatus } from '../services/selphi-provider/selphi.provider.enums';

@Component({
  selector: 'app-autenticacion-renap',
  templateUrl: './autenticacion-renap.page.html',
  styleUrls: ['./autenticacion-renap.page.scss'],
})
export class AutenticacionRenapPage implements OnInit {
  public imgSrcSelf = '';

  constructor(
    public selphiFaceService: SelphiProvider
  ) {

  }

  ngOnInit() {
  }

  onLaunchSelphiProcess() {
    this.selphiFaceService.startCapture().then(result => {
      console.log('result', result);
    }).catch(err => {
      console.log('error', err);
    });
  }

  // onLaunchSelphiProcess() {
  //   this.selphiFaceService.launchSelphiAuthentication().then(result =>{
  //     console.log('onLaunchSelphiProcess', result);
  //     if (result !== null && result) {
  //       switch (result.finishStatus) {
  //         case SelphiPluginFinishStatus.Ok: // OK
  //           this.imgSrcSelf = 'data:image/jpeg;base64,' + result.bestImageCropped;
  //           // this.llamarProcesoValidaSelphi(result);
  //           return;
  //         case SelphiPluginFinishStatus.CancelByUser: // CancelByUser
  //           return;
  //         case SelphiPluginFinishStatus.Timeout: // Timeout
  //           alert('Tiempo de espera ha finalizado.');
  //           return;
  //       }
  //     } else {
  //       console.log('No se recibieron datos');
  //     }
  //   }, (err: string) => {
  //     console.log('onErrorSelphiProcess', err);
  //     alert('Amigo Banrural, ha ocurrido un inconveniente, por favor intenta nuevamente.');
  //   });
  // }

  // private llamarProcesoValidaSelphi(result) {
  //   // this.loaderSimple();
  //   this.procesoValidaSelphi(result).then(() => {
  //     // this.dismissLoader();
  //     // this.ocrSelfie = true;
  //   }).catch(err=> {
  //     // this.dismissLoader();
  //     this.providerError(err);
  //   });
  // }

  // async procesoValidaSelphi(data): Promise<void> {
  //   const { bestImage, templateRaw, bestImageCropped } = data;
  //   const pruebaVida = await this.selphiFaceService.consultaPruebaVida(bestImage, templateRaw);
  //   console.log('result pruebaVida', pruebaVida);
  //   if(pruebaVida[0].Diagnostic === 'Live' ) {
  //     await this.selphiFaceService.consultaPlantillaBiometrica('2162460830610',bestImage,bestImageCropped,templateRaw);
  //   } else {
  //     this.mostrar('', 'Usted no pasó la validación de prueba de vida.');
  //   }
  // }

}
