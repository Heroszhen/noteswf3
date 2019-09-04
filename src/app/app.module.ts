import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlcssComponent } from './mycomponents/htmlcss/htmlcss.component';
import { AccueilComponent } from './mycomponents/accueil/accueil.component';
import { PhppooComponent } from './mycomponents/phppoo/phppoo.component';
import { AjaxComponent } from './mycomponents/phppoo/ajax/ajax.component';
import { JavascriptComponent } from './mycomponents/javascript/javascript.component';
import { PortfolioComponent } from './mycomponents/portfolio/portfolio.component';
import { PhpComponent } from './mycomponents/php/php.component';
import { PooComponent } from './mycomponents/phppoo/poo/poo.component';
import { SingupComponent } from './mycomponents/singup/singup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SinginComponent } from './mycomponents/singin/singin.component';
import { AutresComponent } from './mycomponents/autres/autres.component';
import { HttpClientModule } from '@angular/common/http';

import { FirstService } from './myservices/first.service';
import { TchatComponent } from './mycomponents/tchat/tchat.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlcssComponent,
    AccueilComponent,
    PhppooComponent,
    AjaxComponent,
    JavascriptComponent,
    PortfolioComponent,
    PhpComponent,
    PooComponent,
    SingupComponent,
    SinginComponent,
    AutresComponent,
    TchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
