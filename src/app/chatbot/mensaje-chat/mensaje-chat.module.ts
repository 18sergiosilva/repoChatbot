import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MensajeChatComponent } from './mensaje-chat';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [MensajeChatComponent],
  exports:[MensajeChatComponent]
})
export class MensajeChatModule {}
