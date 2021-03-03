import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects{

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuario$ = createEffect(
        () =>  this.actions$.pipe(
            ofType( usuariosActions.cargarUsuario ),
            mergeMap(
                ( action ) => this.usuarioService.getUserByID( action.id )
                    .pipe(
                        map( user =>  usuariosActions.cargarUsuarioSuccess( { usuario: user } ) ),
                        catchError( error => of(usuariosActions.cargarUsuarioError( { payload: error } )) )
                    )
            )
        )
    );

}
