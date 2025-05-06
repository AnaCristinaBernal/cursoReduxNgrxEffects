import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { httpHeadersInterceptor } from './interceptors/http-headers.interceptor';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as UsuariosEffects from './store/effects/usuarios.effects';
import * as UsuarioEffects from './store/effects/usuario.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(UsuariosEffects, UsuarioEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptors([httpHeadersInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
