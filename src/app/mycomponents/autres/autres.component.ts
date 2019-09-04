import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.css']
})
export class AutresComponent implements OnInit {

	list = [
		{name:"html/css/création de site",route:"/hc",onglet:"creation"},
		{name:"html/css/index",route:"/hc",onglet:"index"},
		{name:"html/css/texte",route:"/hc",onglet:"texte"},
		{name:"html/css/sélécteurs",route:"/hc",onglet:"selector"},
		{name:"html/css/positions",route:"/hc",onglet:"position"},
		{name:"html/css/zoning",route:"/hc",onglet:"zoning"},
		{name:"html/css/lists",route:"/hc",onglet:"list"},
		{name:"html/css/forum",route:"/hc",onglet:"forum"},
		{name:"html/css/animations",route:"/hc",onglet:"animation"},
		{name:"html/css/tableaux",route:"/hc",onglet:"tableau"},
		{name:"html/css/résponsive",route:"/hc",onglet:"responsive"},
		{name:"javascript/bases",route:"/js",onglet:"basesjs"},
		{name:"javascript/liste de photos",route:"/js",onglet:"alp"},
		{name:"javascript/diaporama",route:"/js",onglet:"diaporama"},
		{name:"jquery/bases",route:"/js",onglet:"basesjq"},
		{name:"jquery/compteur de caractères",route:"/js",onglet:"compdeca"},
		{name:"jquery/menu accordéon",route:"/js",onglet:"menuaccordeon"},
		{name:"jquery/projet movies",route:"/js",onglet:"projetmovies"},
		{name:"angular",route:"/js",onglet:"angular"},
		{name:"ionic",route:"/js",onglet:"ionic"},
		{name:"sql",route:"/php",onglet:"sql"},
		{name:"php/bases",route:"/php",onglet:"php"},
		{name:"php/mysql",route:"/php",onglet:"mysql"},
		{name:"ajax",route:"/ajax",onglet:""},
		{name:"poo en php",route:"/poo",onglet:""},
		{name:"mvc",route:"/phppoo",onglet:""},
		{name:"tchat",route:"/tchat",onglet:""}
	];
	list2=[];
	
	search="";
	searchCountry="";
	countryFound={};
	show=false;
  constructor(private fs:FirstService) {
		this.fs.display$.next(['none']);
		this.fs.country$.subscribe(data=>{
			if(Object.keys(data).length!=0){
				this.countryFound=data;
				this.show=true;
			}
		});
   }

  ngOnInit() {
  }
  
  showbm(){
    this.fs.display$.next(["play"]);
  }
  onglet(v){
	this.fs.actived$.next([v]);
  }
  
  Search(){
	if(this.search.length == 0) this.list2=[];
	else this.list2 = this.list.filter(o=>o.name.includes(this.search));
	//console.log(this.search.length);
  }
	
  SearchCountry(){
		this.show=false;
	if(this.searchCountry.length != 0)this.fs.getCountry(this.searchCountry);
  }
}

