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
    for(let i = 0;i<5;i++){
      this.dataNotification.push({
        data:'30/09/2023',
        descricao:'Nullam sollicitudin odio non elit vehicula, ut fermentum turpis viverra. Phasellus lacinia ac dui et euismod. Aliquam posuere et ex ac tincidunt. Nunc convallis pulvinar vestibulum.',
        titulo:'A casa dos fitoplânctons',
        views:1000,
        user:{
          nome:'Caio',
          email:'caio.teste@gmail.com',
          telefone:'11978651234',
          userid:2,
          senha:'123',
          diciplina:'Estudante',

        }
      })
    }
  }

  public toPerfil(user:IUser){
    console.log(user)
  }
}
