import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './components/contatos-listagem/contatos-listagem.component';
import { LoginComponent } from './components/login/login.component'
import { ContatoService } from './services/contato.service';
@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
