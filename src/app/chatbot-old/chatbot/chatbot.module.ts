import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotPageRoutingModule } from './chatbot-routing.module';

import { ChatbotPage } from './chatbot.page';
// import { ToolbarModule } from 'src/components';
import { ChatbotInputModule } from '../chatbot-input/chatbot-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotPageRoutingModule,
    // ToolbarModule,
    ChatbotInputModule
  ],
  declarations: [ChatbotPage]
})
export class ChatbotPageModule {}
