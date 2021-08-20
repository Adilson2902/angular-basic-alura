import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulaalura';

  constructor(private service: TransferenciaService){

  }

// tslint:disable-next-line: typedef
tranferir($event){
 this.service.adicionar($event);
  }
}
