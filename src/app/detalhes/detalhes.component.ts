import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TransporteService} from '../transporte.service';
import { Transportadoras} from '../Transportadoras';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

   transporte: Transportadoras;
  constructor(
    private route: ActivatedRoute,
    private transporteService: TransporteService,
    private location: Location
  ) { }

  ngOnInit(): void {
   
  }

  getTransporta(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.transporteService.getTransporId(id)
    .subscribe(transportadora => this.transporte = transportadora);
  }

  goBack(): void{
    this.location.back();
  }

  Save(): void{
    this.transporteService.updateTranport(this.transporte)
    .subscribe(() => this.goBack());

  }
}
