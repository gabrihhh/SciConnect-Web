import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environments } from 'src/environments';
import { IResponseCadastro, IResponseLogin, IResponsePost } from '../../interface/user.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http:HttpClient) { }

  public getPosts(): Observable<IResponsePost[]>{
    return this.http.get<IResponsePost[]>(`${environments.endpoint}/v1/home`);
  }

  public postLogin(login: string, senha: string): Observable<IResponseLogin[]> {
    return this.http.post<IResponseLogin[]>(`${environments.endpoint}/v1/login`, {
      login: login.trim(),
      senha: senha.trim()
    });
  }

  public postCadastro(cpf:string,nome:string,area:string,senha:string,tipo:string,data:string):Observable<IResponseCadastro>{
    return this.http.post<IResponseCadastro>(
      `${environments.endpoint}/v1/estudante`,
      {
        documentoEstudante:cpf,
        nomeEstudante:nome,
        areaInteresse:area,
        senhaEstudante:senha,
        tipoUsuario:tipo,
        ultimoLogin:data
      }
    )
  }
}
