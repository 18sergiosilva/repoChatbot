import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { Platform } from 'ionic-angular';
// import { HttpProvider } from '..';
// import { SELPHI_RESOURCES_PATH } from './selphi.provider.constants';
import { LICENSE_SELPHID_ANDROID, LICENSE_SELPHID_IOS, SELPHID_RESOURCES_PATH } from './selphi.provider.constants';
import * as SelphidEnums from './selphi.provider.enums';

// declare let facephi: any;

@Injectable()
export class SelphiProvider {

    constructor(//private http: HttpProvider,
                public platform: Platform) { }

    // launchSelphiAuthentication = (): Promise<any> => {
    //     return new Promise<string>((resolve, reject) => {
    //         this.platform.ready().then(() => {
    //             // const widgetConfig = new facephi.widget.config.WidgetConfig();
    //             const widgetConfig: any = {};
    //             widgetConfig.livenessMode = 'PASSIVE';
    //             widgetConfig.enableGenerateTemplateRaw = true;
    //             widgetConfig.locale = 1;
        
    //             console.log('Launching selphi widget...');
    //             return (<any>window).StartWidget('Authenticate', SELPHI_RESOURCES_PATH, widgetConfig)
    //             .then((result: string) => resolve(result), (err: string) => reject(err));
    //         });
    //     });
    // }

    startCapture(): Promise<string> {
        return this.launchSelphidAuthentication(SelphidEnums.SelphIDOperationMode.CaptureWizard,
                                                SelphidEnums.SelphIDScanMode.SearchMode,
                                                'GTM',
                                                SelphidEnums.SelphIDDocumentType.IDCard);
    }
    
    launchSelphidAuthentication = (operationMode: SelphidEnums.SelphIDOperationMode,
                                   scanMode: SelphidEnums.SelphIDScanMode,
                                   countryISO: string,
                                   documentType: SelphidEnums.SelphIDDocumentType
    ): Promise<string> => {
        return new Promise((resolve, reject) => {
            this.platform.ready().then(() => {
            let pluginLicense: string;
            if (this.platform.is('ios')) {
                pluginLicense = JSON.stringify(LICENSE_SELPHID_IOS);
            } else {
                pluginLicense = JSON.stringify(LICENSE_SELPHID_ANDROID);
            }
            console.log('Preparing selphID configuration...');
            const widgetConfig: any = {}; //= new (<any>window).facephi.selphid.config.WidgetSelphIDConfig();
            widgetConfig.scanMode = scanMode;
            widgetConfig.specificData = `${ countryISO }|<ALL>`;
            widgetConfig.documentType = documentType;
            widgetConfig.showTutorial = false;
            widgetConfig.showResultAfterCapture = true;
            widgetConfig.timeout = SelphidEnums.SelphIDTimeoutType.Medium;

            console.log('Launching selphID widget...');
            return (<any>window).facephi.selphid.universal.StartCapture(
                        operationMode,
                        SELPHID_RESOURCES_PATH,
                        pluginLicense,
                        null,
                        widgetConfig)
                .then((result: string) => resolve(result), (err: string) => reject(err));
            });
        });
    }

    // generateTemplateRaw = (imageB64): Promise<any> => {
    //     return new Promise<any>((resolve, reject) => {
    //         this.platform.ready().then(() => {
    //             console.log('Launching generateTemplateRaw...');
    //             return facephi.widget.universal.GenerateTemplateRaw(imageB64)
    //             .then((result: any) => resolve(result)
    //             ,(err: string) => reject(err));
    //         });
    //     });
    // }

    // consultaPruebaVida = (pImage: string, pTokenImage: string): Promise<any> => {
    //     return new Promise<any>((resolve, reject) => {
    //         const sender = { 
    //             pImage,
    //             pTokenImage
    //         };
    //         this.http.post(sender, '812').then(res => {
    //             console.log('consultaPruebaVida', res)
    //             resolve(res.eDetallePruebaVida);
    //           }, err => {
    //             reject(err);
    //           })
    //     });
    // }

    // consultaPlantillaBiometrica = (pDpi: string, pImagenB64: string, pImageCropped: string, pTemplateRaw: string): Promise<any> => {
    //     return new Promise<any>((resolve, reject) => {
    //         const sender = {
    //             pDpi,
    //             pImagenB64,
    //             pImageCropped,
    //             pTemplateRaw
    //         };
    //         this.http.post(sender, '811').then(res => {
    //             console.log('consultaPlantillaBiometrica', res)
    //             resolve(res);
    //           }, err => {
    //             reject(err);
    //           })
    //     });
    // }

}