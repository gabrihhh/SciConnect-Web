import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/storage/user/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  constructor(private router:Router,private route: ActivatedRoute){}

  public navigatingToPublish(){
    this.router.navigate(['publish'], { relativeTo: this.route });
  }
}
