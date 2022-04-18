import { Injectable } from "@angular/core";
import { Device } from "@ionic-native/device/ngx";
import { v4 as Uuidv4 } from 'uuid';

interface IDispositivo {
    pSmartPhone: string;
    pTipoSmartPhone: string;
    pSO: string;
    pUi: string;
}

@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    constructor(
        private device: Device
    ) {
    }

    public getInfoDispositivo(): IDispositivo {
        if (!this.device.model) {
            return {
                pSmartPhone: 'KIW-L24',
                pTipoSmartPhone: 'KIW-L24',
                pSO: 'Android',
                pUi: this.generateUuid()
            };
        } else {
            return {
                pSmartPhone: this.device.model,
                pTipoSmartPhone: this.device.model,
                pSO: this.device.platform,
                pUi: this.device.uuid
            }
        }
    }

    private generateUuid(): string {
        return Uuidv4();
    }

}