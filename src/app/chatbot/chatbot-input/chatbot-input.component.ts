import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbot-input',
  templateUrl: './chatbot-input.component.html',
  styleUrls: ['./chatbot-input.component.scss'],
})
export class ChatbotInputComponent implements OnInit {
  public txtInput: string = '';

  @Output() eventoTexto= new EventEmitter<string>();

  emitirTexto(){
    this.eventoTexto.emit(this.txtInput);
    this.txtInput='';
  }

  clickFab(){
    if(this.txtInput!==''){
      this.emitirTexto();
    }
  }


  constructor() { }

  ngOnInit() {}

}
