import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit{
  @ViewChild('inputNome') inputNome!: ElementRef
  @ViewChild('inputSobrenome') inputSobrenome!: ElementRef
  @ViewChild('inputTipo') inputTipo!: ElementRef
  @ViewChild('inputEmail') inputEmail!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef
  @ViewChild('inputSenhaNovamente') inputSenhaNovamente!: ElementRef
  @ViewChild('btnEstudante') btnEstudante!: ElementRef
  @ViewChild('btnColaborador') btnColaborador!: ElementRef
  @ViewChild('inputColaborador') inputColaborador!: ElementRef
  @ViewChild('inputEstudante') inputEstudante!: ElementRef

  public Error:Boolean = false;

  constructor(private router:Router){}
  
  ngAfterViewInit(): void {
    this.btnEstudante.nativeElement.addEventListener('click', () => {
      this.inputEstudante.nativeElement.checked = true
      if(this.inputColaborador.nativeElement.checked){
        this.inputColaborador.nativeElement.checked = false
      }
    });

    this.btnColaborador.nativeElement.addEventListener('click', () => {
      this.inputColaborador.nativeElement.checked = true
      if(this.inputEstudante.nativeElement.checked){
        this.inputEstudante.nativeElement.checked = false
      }
    });
  }

  public CriarConta(){

    if(this.validateInputs()){

      const dados = {
        nome: this.inputNome.nativeElement.value,
        sobrenome: this.inputSobrenome.nativeElement.value,
        tipo: this.inputColaborador.nativeElement.checked ? 'Colaborador' : 'Estudante',
        email: this.inputEmail.nativeElement.value,
        senha: this.inputSenha.nativeElement.value,
      };

      console.log(dados);
    }else{
      this.Error = true
    }
  }

  public navigateToLogin() {
    this.router.navigate(['login'])
  }

  public validateInputs():boolean{
    if(this.inputNome.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputSobrenome.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputEmail.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputSenha.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputSenhaNovamente.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputSenha.nativeElement.value.trim() !== this.inputSenhaNovamente.nativeElement.value.trim()){
      return false
    }

    return true
  }
}
