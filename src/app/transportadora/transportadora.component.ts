import { Component, OnInit } from '@angular/core';
import {Transportadoras} from '../Transportadoras';

import {TransporteService} from '../transporte.service';

@Component({
  selector: 'app-transportadora',
  templateUrl: './transportadora.component.html',
  styleUrls: ['./transportadora.component.css']
})
export class TransportadoraComponent implements OnInit {

  transportadora: Transportadoras[];
 

  constructor(private transporteService: TransporteService) {
    
   }

  ngOnInit() {
    this.getTransportadoras();
  }

  getTransportadoras(): void{
     this.transporteService.getTransportadoras()
     .subscribe(transportadora => this.transportadora = transportadora);
  }
}
