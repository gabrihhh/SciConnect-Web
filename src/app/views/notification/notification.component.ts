import { Component, OnInit } from '@angular/core';
import { IResponsePost } from 'src/app/shared/interface/user.interface';
import { RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  public dataNotification:IResponsePost[] = []

  constructor(private requisicoesService:RequisicoesService){}

  ngOnInit(): void {
      this.getNotification();
  }

  public getNotification(){
    this.requisicoesService.getDocumentosParaValidacao().subscribe({
      next:(res)=>{
        this.dataNotification = res
      }
    })
  }

  public atualizaNotification(idDocumento:number,status:boolean){
    this.requisicoesService.putAtualizarStatusDocumento(idDocumento,status).subscribe({
      next:(res)=>{
        this.getNotification()
      }
    })
  }

  public toPerfil(userId:string){
    console.log(userId)
  }
}
