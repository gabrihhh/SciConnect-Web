import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IUserLogin } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service';


const listaUsuarioFake:IUserLogin[] = [
  {nome:'gabriel',senha:'123'},
  {nome:'teste',senha:'321'},
] 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit{
  @ViewChild('inputLogin') inputLogin!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef


  constructor(private userService:UserService,private router:Router){}
  
  ngAfterViewInit(): void {
      document.addEventListener('keydown',(e)=>{
        if(e.code == 'Enter'){
          this.Entrar()
        }
      })
  }

  public Entrar(){
    const user = listaUsuarioFake.find((e)=>{
      return e.nome === this.inputLogin.nativeElement.value && e.senha === this.inputSenha.nativeElement.value
    })

    if(user){
      this.userService.setUser(user);
      this.router.navigate(['home'])
    }else{

      alert('n foi')
    }
  }

  public Inscrever() {
    this.router.navigate(['register'])
  }
}
