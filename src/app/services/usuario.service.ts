import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


const URL = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) {}

  getUser() {
    return this.http.get(`${ URL }/users?per_page=6&delay=3`)
      .pipe(
        map( ( usuarios: any ) => usuarios.data )
      );
  }

  getUserByID( id: string ) {
    return this.http.get(`${ URL }/users/${ id }`)
      .pipe(
        map( ( usuarios: any ) => usuarios.data )
      );
  }



}
