$(window).resize(function() {
	myFunction();
});

<<<<<<< HEAD
function isMobile(){
	// User-Agent-String auslesen
	var UserAgent = navigator.userAgent.toLowerCase();

	// User-Agent auf gewisse Schlüsselwörter prüfen
	if(UserAgent.search(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/)>-1){
	// mobiles Endgerät
		console.log("mobiles Gerät");
		return true;
		
	}else{
	// kein mobiles Endgerät (PC, Tablet, etc.)
		console.log("KEIN mobiles Gerät");
		return false;	
	}
}


function vegan(p){
	
=======
function vegan(p){
	
	//alert(p);
	
>>>>>>> gh-pages
	var container=document.getElementsByClassName('vegan');
	var anzahl=container.length;
	var aktiv;
	var neu;
	
	for (i = 0; i < container.length; i++) {
		if(container[i].style.display=="block"){
			aktiv=i;
		}
	}
<<<<<<< HEAD

		
=======
	
	//alert(aktiv);
	//alert(container.length);
	//alert(container[0].style.display);
	
	
	
>>>>>>> gh-pages
	if(p==true){
		//Wechsel nach rechts
		if(aktiv<container.length-1){
			neu=aktiv+1;
		}else{
			neu=0;
		}
		
	}else{
		//Wechsel nach links
		if(aktiv==0){
			neu=container.length-1;
		}else{
			neu=aktiv-1;
		}
	}

	container[aktiv].style.display="none";
	container[neu].style.display="block";

	//Um Fenster anzupassen falls neuer Teil länger oder kürzer ist
<<<<<<< HEAD
	if(isMobile()==false){
		var s = skrollr.init();
		s.refresh($("#slide-vegan div"));
	}
	
=======
	var s = skrollr.init();
	s.refresh($("#slide-vegan div"));
>>>>>>> gh-pages
	myFunction();
	window.location.href="#slide-vegan";
}

function impressionen(p){
	
<<<<<<< HEAD
	//alert("impressionen"+p);
=======
	//alert(p);
>>>>>>> gh-pages
	
	var container=document.getElementsByClassName('impressionen');
	var anzahl=container.length;
	var aktiv;
	var neu;
	
	for (i = 0; i < container.length; i++) {
		if(container[i].style.display=="block"){
			aktiv=i;
		}
	}
	
	if(p==true){
		//Wechsel nach rechts
		if(aktiv<container.length-1){
			neu=aktiv+1;
		}else{
			neu=0;
		}
		
	}else{
		//Wechsel nach links
		if(aktiv==0){
			neu=container.length-1;
		}else{
			neu=aktiv-1;
		}
	}

	container[aktiv].style.display="none";
	container[neu].style.display="block";

	//Um Fenster anzupassen falls neuer Teil länger oder kürzer ist
<<<<<<< HEAD
	if(isMobile()==false){
		var s = skrollr.init();
		s.refresh($("#slide-impressionen div"));
	}
	myFunction();
	window.location.href="#slide-impressionen";
}

=======
	var s = skrollr.init();
	s.refresh($("#slide-impressionen div"));
	myFunction();
	window.location.href="#slide-impressionen";
}
>>>>>>> gh-pages
function navigation(p){
	if($window.width()<=1000){
		if(p==true){
			//Navigation ist sichtbar
			$('.entry-header .inner').css('display','block');
			
		}else{
			//Navigation ist unsichtbar
			$('.entry-header .inner').css('display','none');
<<<<<<< HEAD

=======
>>>>>>> gh-pages
			
		}
	}
}

function navigationbtn(){
	var p=document.getElementById('nav-inner').style.display;

	if(p=="block"){
		navigation(false);
		
	}else{
		navigation(true);
	}
}

<<<<<<< HEAD
=======
function navigationbtneffect(p){
	
	if(p==true){
		//Navigationbtn Effekt ist sichtbar
		$('#nav-btn').css('box-shadow','0px 0px 5px grey');
		
	}else{
		//Navigationbtn Effekt ist unsichtbar
		$('#nav-btn').css('box-shadow','0px 0px 0px grey');
	}
}
>>>>>>> gh-pages

function myFunction(){
	
	
	//GetParameter
	winW = $window.width();
	winH = $window.innerHeight();
	win = $window.height();
	
	console.log("myFunction; innerHeight:"+winH+"; height"+win);
	
	
	$('.bcg').css('min-height', winH);
	$('.absoluteSlide').css('height', winH);
	$('.absoluteSlideTall').css('height', winH*2);

	
	//Menü abhängig von der Größe formatieren
	if(winW>1000){
		//Normales Menü
		$('#nav-btn').css('display','none');
<<<<<<< HEAD
		$('#fb-btn').css('display','none');
=======
>>>>>>> gh-pages
		
		$('.entry-header .inner').css('display','block');
		//$('.entry-header .inner').css('text-align','right');	
		$('.entry-header .inner').css('margin','0 auto 20px auto');
		$('.entry-header .inner').css('width','1000px');
		//$('.entry-header .inner').css('min-width','150px');
		$('.entry-header .inner').css('height','0');
		$('.entry-header .inner').css('position','static');
		//$('.entry-header .inner').css('right','0');
		$('.entry-header .inner').css('top','20px');
		
		$('#nav-list').css('text-align','center');
<<<<<<< HEAD
		$('#nav-list').css('margin','0 0 0 55px');
		$('#nav-list').css('padding','0.6em');
=======
		$('#nav-list').css('margin','0 0 0 50px');
		$('#nav-list').css('padding','0.8em');
>>>>>>> gh-pages
		$('#nav-list').css('background-color','transparent');
		$('#nav-list').css('box-shadow','none');
		//$('#nav-list').css('top','0');
		
		$('#nav-list li').css('display','inline');
		$('#nav-list li').css('margin','1.2em');
		
		/*$('#nav-btn').css('display','none');
				$('.entry-header .inner').css('display','block');
		//$('.entry-header .inner').css('text-align','left');
		$('.entry-header .inner').css('margin','0 auto 20px auto');
		$('.entry-header .inner').css('width','800px');
		$('#nav-list').css('text-align','left');*/

	}else{
		//Mobiles Menü
		$('#nav-btn').css('display','block');
<<<<<<< HEAD
		$('#fb-btn').css('display','block');
=======
>>>>>>> gh-pages
		
		$('.entry-header .inner').css('display','none');
		$('.entry-header .inner').css('text-align','right');	
		$('.entry-header .inner').css('margin','0 0 0 0');
		$('.entry-header .inner').css('width','0px');
<<<<<<< HEAD
		$('.entry-header .inner').css('min-width','200px');
=======
		$('.entry-header .inner').css('min-width','150px');
>>>>>>> gh-pages
		$('.entry-header .inner').css('height','200px');
		$('.entry-header .inner').css('position','fixed');
		$('.entry-header .inner').css('right','0');
		$('.entry-header .inner').css('top','95px');
		
		$('#nav-list').css('text-align','left');
		$('#nav-list').css('margin','0 0 0 0');
		$('#nav-list').css('padding','0.2px');
		$('#nav-list').css('background-color','#fff');
		$('#nav-list').css('box-shadow','0px 0px 5px grey');
<<<<<<< HEAD
		$('#nav-list').css('top','0px');
=======
		$('#nav-list').css('top','10px');
>>>>>>> gh-pages
		
		$('#nav-list li').css('display','block');
		$('#nav-list li').css('margin','15px auto 10px 10px');

	}
}


(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

<<<<<<< HEAD
=======
/**
 * How to create a parallax scrolling website
 * Author: Petr Tichy
 * URL: www.ihatetomatoes.net
 * Article URL: http://ihatetomatoes.net/how-to-create-a-parallax-scrolling-website/
 */
>>>>>>> gh-pages

( function( $ ) {
	// Setup variables
	$window = $(window);
	$body = $('body');
<<<<<<< HEAD
		
	myFunction();
	
=======
	
	
	myFunction();
	
	// Get window size
	/*winH = $window.height();
	
	//Define the sizes of the slider
	$('.bcg').css('min-height', winH);
	$('.absoluteSlide').css('height', winH);
	$('.absoluteSlideTall').css('height', winH*2);*/
>>>>>>> gh-pages
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
<<<<<<< HEAD

	//Mobile Anpassungen
	console.log(isMobile());
	console.log(navigator.userAgent);
	
	if(isMobile()==true){	

		// mobiles Endgerät
		elements=document.getElementsByClassName("arrow");
		
		for (i = 0; i < elements.length; i++) {
			elements[i].style.position="absolute";
			elements[i].style.top="auto";
		}

	  
	  
	  
		document.getElementById("slide-impressionen").style.backgroundImage="none";
		document.getElementById("slide-impressionen").style.opacity="1";
		document.getElementById("slide-vegan").style.backgroundImage="none";
		elements=document.getElementsByName(".hsContent");
	  
		for (i = 0; i < elements.length; i++) {
			elements[i].style.opacity="1";
		}
	  
	  
	}else{
		console.log("KEIN mobiles Gerät");
		document.write('<script type="text/javascript" src="js/skrollr.js"></script>');


		
		
		function adjustWindow(){
		
			if(isMobile()==false){
				// Init Skrollr
				var s = skrollr.init({

					render: function(data) {
					
						//Debugging - Log the current scroll position.
						//console.log(data.curTop);
					}

				});
			}
		}
		
	}
	
=======
	
	function adjustWindow(){
		// Init Skrollr
		var s = skrollr.init({
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});
	    
	}
		
>>>>>>> gh-pages
} )( jQuery );