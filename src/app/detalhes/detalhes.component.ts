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

  @Input() transporte: Transportadoras;
  constructor(
    private route: ActivatedRoute,
    private trasnporteService: TransporteService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTransporta();
  }

  getTransporta(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.trasnporteService.getTransportadorasId(id)
    .subscribe(transportadora => this.transporte = transportadora);
  }

  goBack(): void{
    this.location.back();
  }
}
