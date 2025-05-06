import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { cargarUsuario } from '../../store/actions';
import { Usuario } from '../../models/usuario.model';
import Swal, { SweetAlertIcon } from 'sweetalert2'

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styles: ``
})
export class UsuarioComponent implements OnInit {

  usuario!: Usuario;

  constructor(
    private route: ActivatedRoute,
    private destroyRef: DestroyRef,
    private store: Store<AppState>
  ){}

ngOnInit(): void {
  this.route.params.subscribe(({id}) =>
    this.store.dispatch(cargarUsuario({id})));
  this.store.select('usuario').subscribe(({ user, error, loading, loaded }) => {
    this.usuario = user;
      if (error) this.alert('ERROR', error.message, undefined ,'error');
      if (loading) this.alert('CARGANDO.....','Espere por favor.', true);
      if (loaded) Swal.close();
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
