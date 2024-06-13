import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit,OnInit{
  @ViewChild('inputLogin') inputLogin!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef

  public listaUsuarios:IUser[] = [] 
  public loginError:boolean = false

  constructor(private userService:UserService,private router:Router){}
  
  ngOnInit(): void {
      this.getUsuario()
  }

  ngAfterViewInit(): void {
      document.addEventListener('keydown',(e)=>{
        if(e.code == 'Enter'){
          this.Entrar()
        }
      })
  }

  public getUsuario(){
     this.listaUsuarios = [
      {email:'gabriel.patara@gmail.com',nome:'gabriel',userid:1,senha:'123',usertype:'Estudante',formacao:'Desenvolvedor'},
      {email:'teste@gmail.com',nome:'teste',userid:2, senha:'321',usertype:'Colaborador',formacao:'Administrador'},
     ]
  }

  public Entrar(){
    const user = this.listaUsuarios.find((e)=>{
      return e.nome === this.inputLogin.nativeElement.value && e.senha === this.inputSenha.nativeElement.value
    })

    if(user){
      this.userService.setUser(user);
      this.router.navigate(['home'])
    }else{
      this.loginError = true;
      this.inputLogin.nativeElement.value = ''
      this.inputSenha.nativeElement.value = ''
    }
  }

  public Inscrever() {
    this.router.navigate(['register'])
  }
}
