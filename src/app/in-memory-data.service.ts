import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import {Transportadoras} from './Transportadoras';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transportadoras = [
      {id: 11, nome: 'Braspress', cnpj: '123.23/0001-23', inscricaoEstadual: '123546372', latitude: 34.23, longitude: 54.87},
      {id: 12, nome: 'Nepomoceno', cnpj: '324.43/0001-78', inscricaoEstadual: '94756839', latitude: 87.76, longitude: 129.00},
      {id: 13, nome: 'Transpanorama', cnpj: '983.11/0001-94', inscricaoEstadual: '17564523', latitude: 76.76, longitude: 85.50}

    ];
    return {transportadoras};
  }

  genId(transportadoras: Transportadoras[]): number{
    return transportadoras.length > 0 ? Math.max(...transportadoras.map(transp => transp.id)) + 1 : 11;
  }

  constructor() { }
}
