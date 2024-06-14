import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResponsePost } from 'src/app/shared/interface/user.interface';
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
          this.datasource = this.datasource.filter((item:IResponsePost) => 
            item.nomeDocumento.toLowerCase().includes(this.parametro!.toLowerCase())
          );
          break
        case 'perfil':
          this.datasource = this.datasource.filter((item:any) => 
            item.nome.toLowerCase().includes(this.parametro!.toLowerCase())
          );
          break
      }
    }
  }

  public getPosts(){
    this.datasource = []
    switch(this.typeofdata){
      case 'artigo':
        this.requisicoesService.getPosts().subscribe({
          next:(res:IResponsePost[])=>{
            this.datasource = res
          },
          error:(err)=>{
            console.error(err)
          }
        })
        break
      case 'perfil':
        break
    }
  }

  public changeType(type:'artigo'|'perfil'){
    this.typeofdata = type;
    this.getPosts()
  }

  public toPerfil(userId:number){
    console.log(userId)
  }
}
