import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IResponseCadastro } from 'src/app/shared/interface/user.interface';
import { RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit{
  @ViewChild('inputNome') inputNome!: ElementRef
  @ViewChild('inputCpf') inputCpf!: ElementRef
  @ViewChild('inputTipo') inputTipo!: ElementRef
  @ViewChild('inputEmail') inputEmail!: ElementRef
  @ViewChild('inputSenha') inputSenha!: ElementRef
  @ViewChild('inputSenhaNovamente') inputSenhaNovamente!: ElementRef
  @ViewChild('btnEstudante') btnEstudante!: ElementRef
  @ViewChild('btnColaborador') btnColaborador!: ElementRef
  @ViewChild('inputColaborador') inputColaborador!: ElementRef
  @ViewChild('inputEstudante') inputEstudante!: ElementRef
  @ViewChild('inputArea') inputArea!: ElementRef

  public Error:Boolean = false;

  constructor(private router:Router,private requisicoesService:RequisicoesService){}
  
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
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      const currentDate = `${year}-${this.pad(month, 2)}-${this.pad(day, 2)}`;

      this.requisicoesService.postCadastro(
        this.inputCpf.nativeElement.value,
        this.inputNome.nativeElement.value,
        this.inputArea.nativeElement.value,
        this.inputSenha.nativeElement.value,
        this.inputColaborador.nativeElement.checked ? 'colaborador' : 'estudante',
        currentDate
      ).subscribe({
        next:(res:IResponseCadastro)=>{
          this.router.navigate(['login'])
        }
      })

    }else{
      this.Error = true
    }
  }

  public navigateToLogin() {
    this.router.navigate(['login'])
  }

  public pad(num: number, size: number): string {
    let s = num.toString();
    while (s.length < size) s = '0' + s;
    return s;
  }

  public validateInputs():boolean{
    if(this.inputNome.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputCpf.nativeElement.value.trim() === ''){
      return false
    }

    if(this.inputArea.nativeElement.value.trim() === ''){
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
