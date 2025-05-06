import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/usuario.model';

const emptyUser: Usuario = {
  id: 'No ID',
  first_name: '',
  last_name: '',
  avatar:''
};

export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
};

export const usuarioInitialState: UsuarioState = {
  id: 'No ID',
  user: emptyUser,
  loaded: false,
  loading: false,
  error: null
};

export const usuarioReducer = createReducer(usuarioInitialState,
    on(actions.cargarUsuario, (state, { id }) => (
      {
        ...state,
        loading: true,
        id
      })),
    on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({
      ...state,
      loading: false,
      loaded: true,
      user: {...usuario}
    })),
    on(actions.cargarUsuarioError, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      user: emptyUser,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    })),
);
