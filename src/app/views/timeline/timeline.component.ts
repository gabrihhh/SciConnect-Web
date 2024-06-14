import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, IUser } from 'src/app/shared/interface/user.interface';
import { RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  public datasource: any = [];
  public typeofdata: 'artigo'|'perfil' = 'artigo'
  public parametro: string | undefined;

  constructor(private route: ActivatedRoute,private requisicoesService: RequisicoesService){}

  ngOnInit(): void {
      this.getPosts()
      this.route.queryParams.subscribe(params => {
        this.getPosts()
        this.parametro = params['parametro'];
        this.filterItems(this.typeofdata);
      });

  }

  filterItems(type:'artigo'|'perfil') {
    if (this.parametro){
      switch(type){
        case 'artigo':
          this.datasource = this.datasource.filter((item:IPost) => 
            item.titulo.toLowerCase().includes(this.parametro!.toLowerCase())
          );
          break
        case 'perfil':
          this.datasource = this.datasource.filter((item:IUser) => 
            item.nome.toLowerCase().includes(this.parametro!.toLowerCase())
          );
          break
      }
    }
  }

  public getPosts(){
    this.requisicoesService.getPosts()
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
        this.datasource.push(
          {
            user:{
            nome: 'gabriel'
            },
            data: '02/05/2000',
            titulo: 'jogos',
            descricao: 'Curabitur molestie odio diam, non sagittis turpis pulvinar ac. Nullam fringilla non velit vel iaculis. Curabitur neque lorem, ornare ut purus non, faucibus fringilla nulla. Integer mauris metus, finibus sed sapien non, gravida tincidunt mi. Phasellus laoreet ligula vel libero venenatis, eu tristique dui varius. Quisque in nunc vitae metus viverra dignissim.'
          }
        )
        break
      case 'perfil':
        for(let i = 0;i<4;i++){
          this.datasource.push({
            nome:'teste'
          })
        }
        this.datasource.push({
          nome:'matheus'
        })
        this.datasource.push({
          nome:'gabriel'
        })
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
