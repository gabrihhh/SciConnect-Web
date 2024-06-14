import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { IEstudante } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/storage/user/user.service'
import { RequisicoesService } from 'src/app/shared/services/web/requisicoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public dataWeek:any= []
  public user:any;
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

  public toPerfil(userId:number) {
    this.router.navigate(['profile'], { queryParams: { parametro: JSON.stringify(userId) },relativeTo: this.route });
  }
}
