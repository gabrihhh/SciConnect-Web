import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interface/user.interface';
import { IResponseLogin } from '../../web/requisicoes.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public setUser(user:IResponseLogin){
      localStorage.setItem('user',JSON.stringify(user))
  }

  public getUser(){
    return localStorage.getItem('user');
  }

  public clearLocarStorage(){
    return localStorage.clear()
  }
}
