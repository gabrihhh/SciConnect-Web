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
  public dataDocumentos: any = [];
  public dataUsuarios: any = [];
  public typeofdata: 'artigo'|'perfil' = 'artigo'
  public parametro: string | undefined;
  public showFiltro:Boolean = false;
  constructor(private route: ActivatedRoute,private requisicoesService: RequisicoesService){}

  ngOnInit(): void {
      this.getPosts()
      this.route.queryParams.subscribe(params => {
        this.parametro = params['parametro'];
        this.filterItems();
      });
  }

  filterItems() {
    if (this.parametro){
      this.getPosts(this.parametro)
      this.showFiltro = true
    }
  }

  public getPosts(params?:string){
    this.dataDocumentos = []
    this.dataUsuarios = []
    if(params){
      this.requisicoesService.getExplorer(params).subscribe({
        next:(res)=>{
          this.dataDocumentos = res.documento
          this.dataUsuarios = res.estudante
        }
      })
    }else{
      switch(this.typeofdata){
        case 'artigo':
          this.requisicoesService.getDocumentos().subscribe({
            next:(res:IResponsePost[])=>{
              this.dataDocumentos = res
            },
            error:(err)=>{
              console.error(err)
            }
          })
          break
      }
    }
    
  }

  public changeType(type:'artigo'|'perfil'){
    this.typeofdata = type;
  }
}
