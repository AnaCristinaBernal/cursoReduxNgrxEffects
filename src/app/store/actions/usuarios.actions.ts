import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios Component] cargarUsuarios');
export const cargarUsuariosSuccess = createAction('[Usuarios Component] cargarUsuariosSuccess',
  props<{usuarios: Usuario[]}>()
);
export const cargarUsuariosError = createAction('[Usuarios Component] cargarUsuariosError',
  props<{payload: any}>()
);
