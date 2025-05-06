// Efecto corregido para NgRx - sin errores de acceso a undefined y con typing correcto

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';

export const cargarUsuarios$ = createEffect((
  actions$ = inject(Actions), usuarioService = inject(UsuarioService)) =>{
    return actions$.pipe(
        ofType(usuariosActions.cargarUsuarios),
        mergeMap(() =>
          usuarioService.getUsers().pipe(
            map(usuarios => usuariosActions.cargarUsuariosSuccess({ usuarios })),
            catchError(error => {
              return of(usuariosActions.cargarUsuariosError({ payload: error }));
            })
          )
        )
      )
    },
    { functional: true }
  );

