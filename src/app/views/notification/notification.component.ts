import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  public dataNotification:any[] = []

  ngOnInit(): void {
      this.getNotification();
  }

  public getNotification(){

  }

  public toPerfil(user:string){
    console.log(user)
  }
}
