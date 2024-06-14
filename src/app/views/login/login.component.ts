import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service';
import { IResponseLogin, RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit{
  @ViewChild('inputLogin') inputLogin!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef

  public listaUsuarios:IUser[] = [] 
  public loginError:boolean = false

  constructor(private userService:UserService,private router:Router,private requisicoesService:RequisicoesService){}


  ngAfterViewInit(): void {
      document.addEventListener('keydown',(e)=>{
        if(e.code == 'Enter'){
          this.Entrar()
        }
      })
  }

  public Entrar(){
    if(this.inputLogin.nativeElement.value.trim() !== '' && this.inputSenha.nativeElement.value.trim() !== ''){
      this.requisicoesService.postLogin(this.inputLogin.nativeElement.value,this.inputSenha.nativeElement.value).subscribe({
        next:(res: IResponseLogin[]) => {
          if(res.length>0){
            if(res[0]){
              this.userService.setUser(res[0])
              this.router.navigate(['home'])
            }
          } 
        },
        error:(error) => {
          console.error(error); 
        }
      });
    }
  }

  public Inscrever() {
    this.router.navigate(['register'])
  }
}
