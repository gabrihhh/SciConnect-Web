import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('inputNome') inputNome!: ElementRef
  @ViewChild('inputSobrenome') inputSobrenome!: ElementRef
  @ViewChild('inputTipo') inputTipo!: ElementRef
  @ViewChild('inputEmail') inputEmail!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef
  @ViewChild('inputSenhaNovamente') inputSenhaNovamente!: ElementRef

  public CriarConta(){

    if(this.inputSenha.nativeElement.value === this.inputSenhaNovamente.nativeElement.value){
      const dados = {
        nome:this.inputNome.nativeElement.value,
        sobrenome: this.inputSobrenome.nativeElement.value,
        tipo: this.inputTipo.nativeElement.value,
        email: this.inputEmail.nativeElement.value,
        senha: this.inputSenha.nativeElement.value,
      };

      console.log(dados);
    }else{
      alert('senhas diferentes')
    }
  }

}
