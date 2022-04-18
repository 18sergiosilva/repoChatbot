import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotInputComponent } from './chatbot-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatbotInputComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ChatbotInputComponent
  ]
})
export class ChatbotInputModule { }
