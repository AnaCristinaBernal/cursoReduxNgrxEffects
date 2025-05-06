import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction('[Usuario Component] cargarUsuario',
  props<{id: string}>()
);
export const cargarUsuarioSuccess = createAction('[Usuario Component] cargarUsuarioSuccess',
  props<{usuario: Usuario}>()
);
export const cargarUsuarioError = createAction('[Usuario Component] cargarUsuariosError',
  props<{payload: any}>()
);
