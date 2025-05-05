import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { httpHeadersInterceptor } from './interceptors/http-headers.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptors([httpHeadersInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
