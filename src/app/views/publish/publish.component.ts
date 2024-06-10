import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {
  @ViewChild('inputTitulo') inputTitulo!: ElementRef
  @ViewChild('inputDiciplina') inputDiciplina!: ElementRef
  @ViewChild('inputTexto') inputTexto!: ElementRef

  public post(){
    console.log(this.inputTitulo.nativeElement.value,this.inputDiciplina.nativeElement.value,this.inputTexto.nativeElement.value)
  }
}
