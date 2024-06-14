import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environments } from 'src/environments';

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
}
