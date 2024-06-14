import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environments } from 'src/environments';
import { IUser } from '../../interface/user.interface';

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

  public postLogin(login:string,senha:string):any{
    this.http.post(`${environments.endpoint}/v1/login`,
      {
        login: login.trim(),
        senha: senha.trim()
      }
    ) .subscribe({
      next:(res)=>{
        return res
      },
      error:(err)=>{
        return console.log(err)
      }
    })
  }
}
