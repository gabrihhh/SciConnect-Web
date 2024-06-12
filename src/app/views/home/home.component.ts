import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/storage/user/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private abaAtiva:'artigo' | 'perfil' = 'artigo';


  constructor(private router:Router,private route: ActivatedRoute,){}


  ngOnInit(): void {
      
  }

  public navigatingToPublish(){
    this.router.navigate(['publish'], { relativeTo: this.route });
  }

  public navigatingToTimeline() {
    this.router.navigate(['timeline'],{ relativeTo: this.route });
  }

  public navigatingToNotification() {
    this.router.navigate(['notification'],{ relativeTo: this.route });
  }
}
