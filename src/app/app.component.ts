import { Component, Input, OnInit } from '@angular/core';
import { MsgApiService } from './msg-api.service';
import { Msg } from './msg.model';
import { Observable } from 'rxjs';
// import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  message: string[] = [];
  // msg!: string;
  // newMessage!: string;
  newMessage: any = [];

  filterApi: any;
  output!: string;

  constructor(private msgApiService: MsgApiService) {}

  ngOnInit(): void {

  }

 

  

  filter(output: string): void {
    if (output == '') {
    } else {
      this.newMessage = this.msgApiService.filterApi(output)
      this.message.push(this.newMessage);
     

      // console.log(this.newMessage);
      // console.log(this.msgApiService.filterApi(output));
      this.message.unshift(this.newMessage);


    }
  }


}
