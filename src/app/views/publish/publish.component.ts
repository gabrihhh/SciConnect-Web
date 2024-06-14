import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEstudante, IResponseLogin } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service';
import { RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent{
  @ViewChild('inputTitulo') inputTitulo!: ElementRef
  @ViewChild('inputDiciplina') inputDiciplina!: ElementRef
  @ViewChild('inputTexto') inputTexto!: ElementRef

  public user:any;

  constructor(private requisicoesService:RequisicoesService,private userService:UserService,private router:Router,private route: ActivatedRoute,){
    this.user = JSON.parse(this.userService.getUser()!);

    if(!this.user){
      this.userService.clearLocarStorage();
      this.router.navigate(['/login'])
    }
  }

  public postDocumento(){
    if(this.validate()){
      this.requisicoesService.postDocumento(
        this.user.nomeEstudante,
        this.inputDiciplina.nativeElement.value.trim(),
        this.inputTitulo.nativeElement.value.trim(),
        this.inputTexto.nativeElement.value.trim()
      ).subscribe({
        next:(res)=>{
          this.router.navigate(['timeline'],{ relativeTo: this.route });
        },
      })
    }
  }

  public validate():Boolean {
    if(this.inputDiciplina.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputTexto.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputTitulo.nativeElement.value.trim() === ''){
      return false
    }

    return true
  }
}
