import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public setUser(user:IUser){
      localStorage.setItem('user',JSON.stringify(user))
  }

  public getUSer(){
    return localStorage.getItem('user');
  }
}
