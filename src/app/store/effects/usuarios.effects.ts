import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuarios$ = createEffect(
        () =>  this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            mergeMap(
                () => this.usuarioService.getUser()
                    .pipe(
                        map( users =>  usuariosActions.cargarUsuariosSuccess( { usuarios: users } ) ),
                        catchError( error => of(usuariosActions.cargarUsuariosError( { payload: error } )) )
                    )
            )
        )
    );

}
