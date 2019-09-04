import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	images = [
		'assets/images/slider1.JPG',
		'assets/images/slider2.JPG',
		'assets/images/slider3.JPG',
		'assets/images/slider4.JPG',
		'assets/images/slider5.JPG'
	];
	timer;
  constructor() {/*
		var nbImages = $('.slide').length; 
    for (let k = 0; k < nbImages; k++) {
      $('.slide').eq(k).css('order', k);
    }
 */
		clearInterval(this.timer);
	}

  ngOnInit() {/*
    var slides = document.querySelectorAll(".slide");
	  var inner = document.getElementById("inner");
	  var nbimgs = slides.length;
	  function order(){
		for(var i=0;i<nbimgs;i++){
		  slides[i].setAttribute("style","order:"+i);
		}
	  }
	  order();
	  var j = 0;
	  function myslides(){
		var w = (getComputedStyle(inner).width)?getComputedStyle(inner).width:'0px';
		var go = inner.animate([
		{ transform: 'translateX(0px)' },
		{ transform: 'translateX(-'+w+')' }
		], {
		  duration: 1000
		});

	   setTimeout(()=>{
		  var slide = slides[j];
		  var style = getComputedStyle(slide);
		  var forder = Number(style.order)+nbimgs;
		  //slide.style.order = Number(forder);
		  slide.setAttribute("style","order:"+Number(forder));
		  j++;
		  if(j==nbimgs){
			j=0;
		   order();
		  }
		}, 1001);
	  }
	  setInterval(myslides,4000);
	  
	  
	var nbImages = $('.slide').length; 
    function reorder() {
        for (let k = 0; k < nbImages; k++) {
            $('.slide').eq(k).css('order', k);
        }
    }
    reorder();
    var compteur = 0;
    function carousel() {
		var w = $("#inner").width()+"px";
    $('#inner').animate({ left: "-"+w }, 2000, function() {
      $('#inner').css('left', 0);
      $('.slide').eq(compteur).css('order', Number($('.slide').eq(compteur).css('order')) + nbImages);
      compteur++;
    });

    	if (compteur == nbImages) {
      	compteur = 0;
      	reorder();
      }
    }

		this.timer = setInterval(carousel, 2000);*/
		var images = this.images;
		var i = 1;
		this.timer = setInterval(function(){
			//console.log(i);
			$('#inner').find("img").attr("src",images[i]);
			 i++;
			 if(i>4)i=0;
			}, 3000);
  }

}
