import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environments } from 'src/environments';
import { IEstudante, IResponseCadastro, IResponseLogin, IResponsePost } from '../../interface/user.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http:HttpClient) { }

  public getDocumentos(): Observable<IResponsePost[]>{
    return this.http.get<IResponsePost[]>(`${environments.endpoint}/v1/home`);
  }

  public postLogin(login: string, senha: string): Observable<IResponseLogin[]> {
    return this.http.post<IResponseLogin[]>(`${environments.endpoint}/v1/login`, {
      login: login.trim().toLowerCase(),
      senha: senha.trim()
    });
  }

  public postCadastro(cpf:string,nome:string,area:string,senha:string,tipo:string,data:string):Observable<IResponseCadastro>{
    return this.http.post<IResponseCadastro>(
      `${environments.endpoint}/v1/estudante`,
      {
        documentoEstudante:cpf.toLowerCase(),
        nomeEstudante:nome.toLowerCase(),
        areaInteresse:area.toLowerCase(),
        senhaEstudante:senha.toLowerCase(),
        tipoUsuario:tipo.toLowerCase(),
        ultimoLogin:data.toLowerCase()
      }
    )
  }

  public getExplorer(param:string):Observable<{estudante:IEstudante[],documento:IResponsePost[]}>{
    return this.http.get<{estudante:IEstudante[],documento:IResponsePost[]}>(`${environments.endpoint}/v1/home/explorer/${param.toLowerCase()}`)
  }

  public postDocumento(autor:string,diciplina:string,titulo:string,proposta:string):Observable<IResponsePost>{
    return this.http.post<IResponsePost>(`${environments.endpoint}/v1/documento`,{
      autor: autor,
      areaEstudoDocumento:diciplina,
      nomeDocumento:titulo,
      propostaEstudo:proposta,
      documentoVerificado:"NAO"
    })
  }
}
