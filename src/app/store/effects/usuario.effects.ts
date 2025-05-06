import { cargarUsuario } from './../actions/usuario.actions';
// Efecto corregido para NgRx - sin errores de acceso a undefined y con typing correcto

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuarioActions from '../actions/usuario.actions';
import { UsuarioService } from '../../services/usuario.service';

export const cargarUsuario$ = createEffect((
  actions$ = inject(Actions), usuarioService = inject(UsuarioService)) =>{
    return actions$.pipe(
        ofType(usuarioActions.cargarUsuario),
        mergeMap(({id}) =>
          usuarioService.getUserById(id).pipe(
            map(usuario => usuarioActions.cargarUsuarioSuccess({ usuario })),
            catchError(error => {
              return of(usuarioActions.cargarUsuarioError({ payload: error }));
            })
          )
        )
      )
    },
    { functional: true }
  );
