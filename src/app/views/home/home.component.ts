import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { IPost, IUser } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service'
import { RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public dataWeek:IPost[] = []
  public user:IUser | null = null
  public inputValue: string = '';
  private inputChangeSubject: Subject<string> = new Subject<string>();
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ){
    this.inputChangeSubject
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.navigateToTTimelineWithParams(value);
        setTimeout(() => {
          this.inputValue = '';
        }, 0);
      });

    this.user = JSON.parse(this.userService.getUser()!);

    if(!this.user){
      this.userService.clearLocarStorage();
      this.router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    this.getWeek();
    this.navigateToTimeline();
  }

  public navigateToTTimelineWithParams(param: string) {
    this.router.navigate(['timeline'], { queryParams: { parametro: param },relativeTo: this.route });
  }

  public navigateToTimeline(){
    this.router.navigate(['timeline'],{relativeTo:this.route})
  }


  public onInputChange(value: string) {
    this.inputChangeSubject.next(value);
  }

  public getWeek(){
    for(let i = 0;i<5;i++){
      this.dataWeek.push({
        data:'30/09/2023',
        descricao:'Nullam sollicitudin odio non elit vehicula, ut fermentum turpis viverra. Phasellus lacinia ac dui et euismod. Aliquam posuere et ex ac tincidunt. Nunc convallis pulvinar vestibulum.',
        titulo:'A casa dos fitoplânctons',
        views:1000,
        user:{
          nome:'Caio',
          email:'caio.teste@gmail.com',
          userid:2,
          senha:'123',
          usertype:'Estudante',
          formacao:'Desenvolvedor'
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

  public toPerfil(user:IUser) {

    this.router.navigate(['profile'], { queryParams: { parametro: JSON.stringify(user) },relativeTo: this.route });
  }
}
