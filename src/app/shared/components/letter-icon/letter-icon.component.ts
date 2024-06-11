import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter-icon',
  templateUrl: './letter-icon.component.html',
  styleUrls: ['./letter-icon.component.scss']
})
export class LetterIconComponent {
  @Input() nome:string = '';
  @Input() size: string = '';
  @Input() fontSize: string = '';
  @Input() radiusSize: string = '20';
}
