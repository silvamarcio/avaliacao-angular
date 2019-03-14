import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transportadoras} from './Transportadoras';
import { Lista } from './Seeding';
import {MessageService} from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  private TransportadorasUrl ='http://hostgator.prolins.com.br/teste/api/transportadora/2'; //URL To WEB API
  constructor(
    private http: HttpClient,
    private messageService: MessageService)
     { }


  getTransportadoras(): Observable <Transportadoras> {
    return this.http.get<Transportadoras>(this.TransportadorasUrl)
    .pipe(
      tap(_ => this.log( 'transportadoras')),
      catchError(this.handleError<Transportadoras>('getTransportadoras'))
    );
  }

  getTransporId(id: number): Observable<Transportadoras> {
    const url =`${this.TransportadorasUrl}/${id}`;
    return this.http.get<Transportadoras>(url).pipe(
      tap(_ => this.log('fetched Transportadora id=${id}')),
      catchError(this.handleError<Transportadoras>('getTransporId id =${id}'))
    );
  }

  getTransportadorasId(id: number): Observable<Transportadoras>{
    this.messageService.add('TransporteService: fetched transporte id=${id}')
    return of (Transportadoras.find(transportadora => transportadora.id === id));
  }

  updateTranport(transpo: Transportadoras): Observable<any>{
    return this.http.put(this.TransportadorasUrl, transpo, httpOptions).pipe(
      tap(_ => this.log('updated transportadora id=${transpo.id}')),
      catchError(this.handleError<any>('updateTranport'))
    );
  }

  addTransporte(transp: Transportadoras): Observable<Transportadoras>{
    return this.http.post<Transportadoras>(this.TransportadorasUrl, transp, httpOptions)
    .pipe(
      tap((newTransp: Transportadoras) => this.log( 'added transp id=${newTransp.id}')),
      catchError(this.handleError<Transportadoras>('addTransporte'))
    );
  }
  private log(message: string) {
    this.messageService.add(`TransporteService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
