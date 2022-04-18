import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotPageRoutingModule } from './chatbot-routing.module';

import { ChatbotPage } from './chatbot.page';
import { MensajeChatModule } from '../mensaje-chat/mensaje-chat.module';
import { ChatbotInputModule } from '../chatbot-input/chatbot-input.module';
import { Device } from '@ionic-native/device/ngx';
// import { ToolbarModule } from 'src/components';
// import { ChatbotInputModule } from '../chatbot-input/chatbot-input.module';
// import { MensajeChatModule } from '../mensaje-chat/mensaje-chat.module';
// import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
// import { File } from '@awesome-cordova-plugins/file/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotPageRoutingModule,
    // ToolbarModule,
    ChatbotInputModule,
    MensajeChatModule
  ],
  declarations: [ChatbotPage],
  // providers:[Media,File]
})
export class ChatbotPageModule {}
