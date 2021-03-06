import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeechRecognitionPageRoutingModule } from './speech-recognition-routing.module';

import { SpeechRecognitionPage } from './speech-recognition.page';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeechRecognitionPageRoutingModule
  ],
  declarations: [SpeechRecognitionPage],
  providers: [
    SpeechRecognition
  ]
})
export class SpeechRecognitionPageModule {}
