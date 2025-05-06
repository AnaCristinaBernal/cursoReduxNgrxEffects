import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuariosInitialState: UsuariosState = {
   users: [],
   loaded: false,
   loading: false,
   error: null
}

export const usuariosReducer = createReducer(usuariosInitialState,
    on(actions.cargarUsuarios, state => ({ ...state, loading: true})),
    on(actions.cargarUsuariosSuccess, (state, {usuarios}) => ({
      ...state,
      loading: false,
      loaded: true,
      users: [...usuarios]
    })),
    on(actions.cargarUsuariosError, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      users: [],
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    })),
);
