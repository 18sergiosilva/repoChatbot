import { Component, OnInit } from '@angular/core';
// import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-chatbot-input',
  templateUrl: './chatbot-input.component.html',
  styleUrls: ['./chatbot-input.component.scss'],
})
export class ChatbotInputComponent implements OnInit {
  public txtInput: string = '';

  
  constructor(
    // private animationCtrl: AnimationController
    ) { 

    // this.animationCtrl.create()
    //                   .addElement(document.querySelector('.square'))
    //                   .duration(500)
    //                   .iterations(1)
    //                   .fromTo('width', 'translateX(0px)', 'translateX(100px)')
    //                   .fromTo('opacity', '1', '0.2');
    
  }

  ngOnInit() {}

}
