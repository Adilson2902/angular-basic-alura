
import { Component, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['/src/app/nova-transferencia/nova-transferencia.component.scss']
})


export class NovaTransferenciaComponent{


  @Output() aoTransferir  = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService,private router:Router){

  }

      tranferir(){
        console.log('valor -->', this.valor)
        console.log('destino -->', this.destino)

        const valorEmitir: Transferencia = {
          valor: this.valor,
          destino: this.destino
        };

        this.service.adicionar(valorEmitir).subscribe(result =>{
          console.log(result);
          this.limparCampos();
          this.router.navigateByUrl('extrato')
        }, error => console.error(error));


      }


      limparCampos(){
        this.valor = 0 ;
        this.destino = 0;
      }
}
