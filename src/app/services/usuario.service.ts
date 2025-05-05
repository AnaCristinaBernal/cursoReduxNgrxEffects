import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api/users?page=1';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable <Usuario[]> {
    return this.http.get<Usuario>(this.url).pipe(
      take(1),
      map( (response: any) => {
        const users = response.data;
        return users.map((user: any)=>({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          avatar: user.avatar
        }));
      }));
  }
}
