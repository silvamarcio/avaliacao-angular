import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transportadoras} from './Transportadoras';
import { Lista } from './Seeding';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  private TransportadorasUrl ='http://hostgator.prolins.com.br/teste/api/transportadora/2'; //URL To WEB API
  constructor(
    private http: HttpClient,
    private messageService: MessageService)
     { }


  getTransportadoras(): Observable <Transportadoras[]> {
    return this.http.get<Transportadoras[]>(this.TransportadorasUrl);
  }

  getTransportadorasId(id: number): Observable<Transportadoras>{
    this.messageService.add('TransporteService: fetched transporte id=${id}')
    return of (Lista.find(transportadora => transportadora.id === id));
  }

  private log(message: string) {
    this.messageService.add(`TransporteService: ${message}`);
  }
}
