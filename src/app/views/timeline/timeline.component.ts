import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interface/user.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit{
  public datasource: any = [];
  public typeofdata: 'artigo'|'perfil' = 'artigo'

  ngOnInit(): void {
      this.getPosts()
  }

  public getPosts(){
    this.datasource = []
    switch(this.typeofdata){
      case 'artigo':
        for(let i = 0;i<4;i++){
          this.datasource.push(
            {
              user:{
              nome: 'gabriel'
              },
              data: '02/05/2000',
              titulo: 'teste',
              descricao: 'Curabitur molestie odio diam, non sagittis turpis pulvinar ac. Nullam fringilla non velit vel iaculis. Curabitur neque lorem, ornare ut purus non, faucibus fringilla nulla. Integer mauris metus, finibus sed sapien non, gravida tincidunt mi. Phasellus laoreet ligula vel libero venenatis, eu tristique dui varius. Quisque in nunc vitae metus viverra dignissim.'
            }
          )
        }
        break
      case 'perfil':
        for(let i = 0;i<4;i++){
          this.datasource.push({
            nome:'teste'
          })
        }
        break
    }
  }

  public changeType(type:'artigo'|'perfil'){
    this.typeofdata = type;
    this.getPosts()
  }

  public toPerfil(user:IUser){
    console.log(user)
  }
}
