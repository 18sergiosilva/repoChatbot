import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpProvider } from '../http/http';
import * as SelphidEnums from './selphi.provider.enums';
import { LICENSE_SELPHID_ANDROID, LICENSE_SELPHID_IOS, SELPHID_RESOURCES_PATH } from './selphi.provider.constants';

// declare let facephi: any;

@Injectable({
    providedIn: 'root'
})
export class SelphiProvider {

    constructor(private http: HttpProvider,
                public platform: Platform
    ) {
    }

    startCapture(): Promise<string> {
        return this.launchSelphidAuthentication(SelphidEnums.SelphIDOperationMode.CaptureWizard,
                                                SelphidEnums.SelphIDScanMode.SearchMode,
                                                'GT',
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
            const widgetConfig = new (<any>window).facephi.selphid.config.WidgetSelphIDConfig();
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

    // launchSelphiAuthentication = (): Promise<any> => {
    //     return new Promise<string>((resolve, reject) => {
    //         this.platform.ready().then(() => {
    //             // const widgetConfig: any = {};
    //             // widgetConfig.livenessMode = 'PASSIVE';
    //             // const widgetConfig = new window.facephi.widget.config.WidgetConfig();
    //             // widgetConfig.setLivenessMode(facephi.widget.livenessmode.WidgetLivenessMode.PassiveMode);
    //             // widgetConfig.setEnableGenerateTemplateRaw(true);
    //             // widgetConfig.setLocale('es');
        
    //             console.log('Launching selphi widget con nuevo código');
    //             return (<any>window).facephi.widget.universal.StartWidget('Authenticate', SELPHI_RESOURCES_PATH, {})
    //             // return (<any>window).Facephi.StartWidget('Authenticate', SELPHI_RESOURCES_PATH, {})
    //             .then((result: string) => resolve(result), (err: string) => reject(err));
    //         });
    //     });
    // }

    generateTemplateRaw = (imageB64): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            this.platform.ready().then(() => {
                console.log('Launching generateTemplateRaw...');
                // return facephi.widget.universal.GenerateTemplateRaw(imageB64)
                return (<any>window).facephi.widget.universal.GenerateTemplateRaw(imageB64)
                .then((result: any) => resolve(result)
                ,(err: string) => reject(err));
            });
        });
    }

    consultaPruebaVida = (pImage: string, pTokenImage: string): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            const sender = { 
                pImage,
                pTokenImage
            };
            this.http.post(sender, '812').then(res => {
                console.log('consultaPruebaVida', res)
                resolve(res.eDetallePruebaVida);
              }, err => {
                reject(err);
              })
        });
    }

    consultaPlantillaBiometrica = (pDpi: string, pImagenB64: string, pImageCropped: string, pTemplateRaw: string): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            const sender = {
                pDpi,
                pImagenB64,
                pImageCropped,
                pTemplateRaw
            };
            this.http.post(sender, '811').then(res => {
                console.log('consultaPlantillaBiometrica', res)
                resolve(res);
              }, err => {
                reject(err);
              })
        });
    }

}