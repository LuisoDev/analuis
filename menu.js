
	var header = document.getElementById('header');
	var tituloM = document.getElementById('titulo-g');
	var menu = document.getElementById('menu');
	var btnmenu = document.getElementById('btn-menu');
	var submenu1 = document.getElementById('sub-menu-servicios');
	var submenu2 = document.getElementById('sub-menu-productos');
	var opc = document.getElementById('opc');
	var opc2 = document.getElementById('opc2');
	var opc3 = document.getElementById('opc3');
	var opc4 = document.getElementById('opc4');
	var opc5 = document.getElementById('opc5');	


	var blackActive = false;
	var navFixed = false;

	function cambioANegro(){
		blackActive = true;
		header.style.background = '#1b1b1b';
		header.style.transition = 'all 0.5s'
		tituloM.style.color = '#e5dfd9';
		menu.style.background = '#1b1b1b';
		opc.style.color = '#e5dfd9'
		opc2.style.color = '#e5dfd9'
		opc3.style.color = '#e5dfd9'
	  	opc4.style.color = '#e5dfd9'
	  	opc5.style.color = '#e5dfd9' 
	  	menu.style.transition = 'all 0.5s'
	}

	function cambioANormal(){
		blackActive = false;
		header.style.background = 'rgba(0,0,0,0.2)';
		tituloM.style.color = '#1b1b1b';
		if(!navFixed){
			menu.style.background = 'none';
			menu.style.background = 'rgba(0,0,0,0.1)';
			opc.style.color = '#1b1b1b'
			opc2.style.color = '#1b1b1b'
			opc3.style.color = '#1b1b1b'
		  	opc4.style.color = '#1b1b1b'
		  	opc5.style.color = '#1b1b1b'
		}
	}

	window.onscroll = function() {
	  console.log("Vertical: " + window.scrollY);

	 


  
  	if(window.scrollY<=60){
  		navFixed = false
	  	if(window.innerWidth>=700 ){
	  		menu.style.position = 'relative';
		  	menu.style.top = 'auto';
		  	menu.style.background = 'none';
		  	opc.style.color = 'black'
		  	opc2.style.color = 'black'
		  	opc3.style.color = 'black'
		  	opc4.style.color = 'black'
		  	opc5.style.color = 'black'
		  	menu.style.transition = 'all 0.5s'
		 }

 	}
	if(window.scrollY>60){
		navFixed = true;
		if(window.innerWidth>=700 ){
			menu.style.position = 'fixed'
		  	menu.style.top = '0'
		  	if(!blackActive){
			  	menu.style.background = '#1b1b1b'
			  	opc.style.color = '#e5dfd9'
			  	opc2.style.color = '#e5dfd9'
			  	opc3.style.color = '#e5dfd9'
			  	opc4.style.color = '#e5dfd9'
			  	opc5.style.color = '#e5dfd9'
			  	menu.style.transition = 'all 0.5s'
		  }
	  	}

	}

	

};

function bajarOpciones(id){

	if(window.innerWidth>700){
		var subOpc;
		switch(id){
			case 'opc2':
			subOpc = 'sub-menu-servicios' 
			break;
			case 'opc3':
			subOpc = 'sub-menu-sobre' 
			break;
			case 'opc4':
			subOpc = 'sub-menu-productos' 
			break;
			case 'opc5':
			subOpc = 'sub-menu-contacto' 
			break;

		}
		var subNav = document.getElementById(subOpc);
		subNav.style.top = '100%';
		 	
	}

};

function subirOpciones(id){

	if(window.innerWidth>=700){


		var subOpc;
		switch(id){
			case 'opc2':
			subOpc = 'sub-menu-servicios' 
			break;
			case 'opc3':
			subOpc = 'sub-menu-sobre' 
			break;
			case 'opc4':
			subOpc = 'sub-menu-productos' 
			break;
			case 'opc5':
			subOpc = 'sub-menu-contacto' 
			break;

		}
		var subNav = document.getElementById(subOpc);
		subNav.style.top = '-1000%';
	
		
		opc.style.color = '#1b1b1b'
		opc2.style.color = '#1b1b1b'
		opc3.style.color = '#1b1b1b'
	  	opc4.style.color = '#1b1b1b'
	  	opc5.style.color = '#1b1b1b' 
	}
	

};
function mantenerBajo(id){

	if(window.innerWidth>=700){
		var subNav = document.getElementById(id);
		subNav.style.transition = 'all 0.5s';
		subNav.style.top = '100%';


	}
}

function subir(id){
	
	if(window.innerWidth>=700){
		var subNav = document.getElementById(id);
		subNav.style.top = '-1000%';
		subNav.style.transition = 'none';
	}
	
}


var menuAct = false;
function subMenuAct(id){
	if(window.innerWidth<=700){

		

		var subOpc;
			switch(id){
				case 'opc2':
				subOpc = 'sub-menu-servicios-mobile' 
				break;
				case 'opc3':
				subOpc = 'sub-menu-sobre-mobile' 
				break;
				case 'opc4':
				subOpc = 'sub-menu-productos-mobile' 
				break;
				case 'opc5':
				subOpc = 'sub-menu-contacto-mobile' 
				break;

			}
			var subMenu = document.getElementById(subOpc);
		if(!menuAct){ 

			subMenu.style.display = 'block';
			menuAct = true;
		}
		else{
			subMenu.style.display = 'none';
			menuAct = false;
		}
	}
};