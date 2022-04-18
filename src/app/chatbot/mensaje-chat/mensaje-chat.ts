import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-chat',
  templateUrl: './mensaje-chat.html',
  styleUrls: ['./mensaje-chat.scss'],
})
export class MensajeChatComponent implements OnInit {
  @Input()
  message: any;

  constructor() { }

  ngOnInit() {
  }

}
