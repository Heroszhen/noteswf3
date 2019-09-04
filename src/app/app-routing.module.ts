import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlcssComponent } from './mycomponents/htmlcss/htmlcss.component';
import { AccueilComponent } from './mycomponents/accueil/accueil.component';
import { PhppooComponent } from './mycomponents/phppoo/phppoo.component';
import { AjaxComponent } from './mycomponents/phppoo/ajax/ajax.component';
import { JavascriptComponent } from './mycomponents/javascript/javascript.component';
import { PortfolioComponent } from './mycomponents/portfolio/portfolio.component';
import { PhpComponent } from './mycomponents/php/php.component';
import { PooComponent } from './mycomponents/phppoo/poo/poo.component';
import { SingupComponent } from './mycomponents/singup/singup.component';
import { SinginComponent } from './mycomponents/singin/singin.component';
import { AutresComponent } from './mycomponents/autres/autres.component';
import { TchatComponent } from './mycomponents/tchat/tchat.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'hc',component:HtmlcssComponent},
  {path:'phppoo',component:PhppooComponent},
  {path:'ajax',component:AjaxComponent},
  {path:'js',component:JavascriptComponent},
  {path:'php',component:PhpComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'poo',component:PooComponent},
  {path:'singin',component:SinginComponent},
  {path:'singup',component:SingupComponent},
  {path:'autres',component:AutresComponent},
  {path:'tchat',component:TchatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
