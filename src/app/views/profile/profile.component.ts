import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, IUser } from 'src/app/shared/interface/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public user:IUser | undefined; 
  public seguidores:number = 1234;
  public seguindo:number = 4321;
  public postsOfUser = [] 
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params['parametro']);
      console.log(this.user)
    });

  }
}
