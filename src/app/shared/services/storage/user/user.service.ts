import { Injectable } from '@angular/core';
import { IUserLogin } from 'src/app/shared/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public setUser(user:IUserLogin){
      localStorage.setItem('user',JSON.stringify(user))
  }

  public getUSer(){
    return localStorage.getItem('user');
  }
}
