import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IUserPost {
  titulo:'teste teste',
  data:'02/05/2000',
  describe:'Curabitur molestie odio diam, non sagittis turpis pulvinar ac. Nullam fringilla non velit vel iaculis. Curabitur neque lorem, ornare ut purus non, faucibus fringilla nulla. Integer mauris metus, finibus sed sapien non, gravida tincidunt mi. Phasellus laoreet ligula vel libero venenatis, eu tristique dui varius. Quisque in nunc vitae metus viverra dignissim.'
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public user:any 
  public seguidores:number = 1234;
  public seguindo:number = 4321;
  public postsOfUser:any = [] 
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getUserPost()
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params['parametro']);
    });
  }

  public getUserPost(){
    
  }
}
