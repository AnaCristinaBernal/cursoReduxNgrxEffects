import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent {

  usuarios!: Usuario[];

  constructor(
    private usuarioService: UsuarioService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuarioService.getUsers().subscribe((users)=>this.usuarios = users)
  }
}
