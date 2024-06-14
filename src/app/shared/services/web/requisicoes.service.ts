import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environments } from 'src/environments';
import { IUser } from '../../interface/user.interface';
import { Observable } from 'rxjs';

export interface IResponseLogin{
  idEstudante: number,
  documentoEstudante: string;
  nomeEstudante: string;
  areaInteresse: string;
  senhaEstudante: string;
  ultimoLogin: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http:HttpClient) { }

  public getPosts(){
    this.http.get(`${environments.endpoint}/v1/home`).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  public postLogin(login: string, senha: string): Observable<IResponseLogin[]> {
    return this.http.post<IResponseLogin[]>(`${environments.endpoint}/v1/login`, {
      login: login.trim(),
      senha: senha.trim()
    });
  }

}
