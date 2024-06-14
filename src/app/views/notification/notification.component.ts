import { Component, OnInit } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/interface/user.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  public dataNotification:IPost[] = []

  ngOnInit(): void {
      this.getNotification();
  }

  public getNotification(){

  }

  public toPerfil(user:string){
    console.log(user)
  }
}
