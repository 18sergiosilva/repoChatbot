import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx'

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.page.html',
  styleUrls: ['./speech-recognition.page.scss'],
})
export class SpeechRecognitionPage implements OnInit {

  constructor(private speechRecognition: SpeechRecognition) { }

  ngOnInit() {
  }

  public async grabarAudio() {
    try {
    // const available = await this.speechRecognition.isRecognitionAvailable();
    // if(available) {
      await this.speechRecognition.requestPermission();

      this.speechRecognition.startListening({language: 'es-MX'})
      .subscribe(
        (matches: string[]) => console.log('Matches', matches),
        (onerror) => console.log('error:', onerror)
      );

    // } else {
    //   console.log('No está disponible el reconocimiento de audio');
    //   await this.speechRecognition.requestPermission();
    // }

    } catch(err) {
      console.log('Error', err);
    }
  }

}
