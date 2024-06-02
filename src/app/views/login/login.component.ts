import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service';

const listaUsuarioFake:IUser[] = [
  {email:'gabriel.patara@gmail.com',nome:'gabriel',telefone:'11999999999',userid:1,senha:'123'},
  {email:'teste@gmail.com',nome:'teste',telefone:'11999999999',userid:2, senha:'123'},
] 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('inputLogin') inputLogin!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef


  constructor(private userService:UserService,private router:Router){}

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
