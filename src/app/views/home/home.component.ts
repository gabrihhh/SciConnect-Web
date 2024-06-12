import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IPost, IUser } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public dataWeek:IPost[] = []
  public user:IUser | null = null

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ){
    this.user = JSON.parse(this.userService.getUser()!);

    if(!this.user){
      this.userService.clearLocarStorage();
      this.router.navigate(['/login'])
    }
  }


  ngOnInit(): void {
    this.getWeek();
  }

  public getWeek(){
    for(let i = 0;i<5;i++){
      this.dataWeek.push({
        data:'30/09/2023',
        descricao:'Nullam sollicitudin odio non elit vehicula, ut fermentum turpis viverra. Phasellus lacinia ac dui et euismod. Aliquam posuere et ex ac tincidunt. Nunc convallis pulvinar vestibulum.',
        titulo:'A casa dos fitoplânctons',
        user:{
          nome:'Caio',
          email:'caio.teste@gmail.com',
          telefone:'11978651234',
          userid:2,
          senha:'123',
          diciplina:'Estudante'
        }
      })
    }
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

  public logout() {
    this.userService.clearLocarStorage()
    this.router.navigate(['/login'])
  }
}
