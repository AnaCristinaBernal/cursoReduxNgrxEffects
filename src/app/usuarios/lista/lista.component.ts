import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { cargarUsuarios } from '../../store/actions';
import Swal, { SweetAlertIcon } from 'sweetalert2'

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent {

  usuarios!: Usuario[];

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    // this.usuarioService.getUsers().subscribe((users)=>this.usuarios = users)
    this.store.dispatch(cargarUsuarios());
    this.store.select('usuarios').subscribe((state) => {
      this.usuarios=state.users;
      if (state.error) this.alert('ERROR', state.error.message, undefined ,'error');
      if (state.loading) this.alert('CARGANDO.....','Espere por favor.', true);
      if (state.loaded) Swal.close();
    })
  }


  alert(title: string, text: string, loading: boolean = false, icon?: SweetAlertIcon) {
    if (icon)
      Swal.fire({
        title,
        text,
        icon,
        didOpen: () => {
          if (loading) Swal.showLoading();
        }
      });
    else
    Swal.fire({
      title,
      text,
      didOpen: () => {
        if (loading) Swal.showLoading();
      }
    });
  }
}
