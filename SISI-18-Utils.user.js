// ==UserScript==

// @name			    SISI-18-Utils (Alpha)
// @namespace     https://github.com/Etiendeval/SISI-18-Utils
// @version			  1.3
// @author        Etiendeval
// @description 	Script for play GoodGameEmpire in fullscreen for spilgames.com (Alpha)
// @updateURL     https://github.com/Etiendeval/SISI-18-Utils.git
// @downloadURL   https://github.com/Etiendeval/SISI-18-Utils.git
// @supportURL    https://github.com/Etiendeval/SISI-18-Utils/issues
// @require       http://code.jquery.com/jquery-latest.js
// @grant         GM_setValue
// @grant         GM_getValue

// @match			    http://www.jeu.fr/goodgames/sns/init/*
// @match			    http://www.jeu.fr/jeu/Goodgame-Empire.html
// @match			    http://www.jeux.fr/goodgames/sns/init/*
// @match			    http://www.jeux.fr/jeu/Goodgame-Empire.html
// @match			    http://www.gioco.it/goodgames/sns/init/*
// @match			    http://www.gioco.it/gioco/goodgame-empire.html
// @match			    http://www.spelletjes.nl/goodgames/sns/init/*
// @match			    http://www.spelletjes.nl/spel/goodgame-empire.html
// @match			    http://www.giochi.it/goodgames/sns/init/*
// @match			    http://www.giochi.it/gioco/goodgame-empire.html
// @match			    http://www.jetztspielen.de/goodgames/sns/init/*
// @match			    http://www.jetztspielen.de/spiel/goodgame-empire.html
// @match			    http://www.gry.pl/goodgames/sns/init/*
// @match			    http://www.gry.pl/gra/goodgame-empire.html
// @match			    http://www.spel.nl/goodgames/sns/init/*
// @match			    http://www.spel.nl/spel/goodgame-empire.html
// @match			    http://www.spielen.com/goodgames/sns/init/*
// @match			    http://www.spielen.com/spiel/goodgame-empire.html
// @match			    http://www.spela.se/goodgames/sns/init/*
// @match			    http://www.spela.se/spel_/goodgame-empire.html
// @match			    http://www.spelletjes.nl/goodgames/sns/init/*
// @match			    http://www.spelletjes.nl/spel/goodgame-empire.html

// @match			    http://www.mousebreaker.com/goodgames/sns/init/*
// @match			    http://www.mousebreaker.com/game/goodgame-empire?
// @match			    http://www.juegos.com/goodgames/sns/init/*
// @match			    http://www.juegos.com/juego/goodgame-empire?
// @match			    http://www.agame.com/goodgames/sns/init/*
// @match			    http://www.agame.com/game/goodgame-empire.html
// @match			    http://www.games.co.uk/goodgames/sns/init/*
// @match			    http://www.games.co.uk/game/goodgame-empire.html

// ==/UserScript==

$(document).ready(function() {

var auto_run = GM_getValue('auto-run');
if(auto_run == undefined){GM_setValue('auto-run','false');
}

var chaine= "<html style=\"height:100%;\"><head>\r\n<title>NOMJOUEUR ( SISI 18 Utils )<\/title>\r\n<script src=\"http:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.8.2\/jquery.min.js\"><\/script>\r\n<\/head><body style=\"margin:0px;padding:0px;\">\r\n<script type='text\/javascript'>\r\nfunction Rel() {\r\n\t\tdocument.getElementById('flashcontent').parentNode.innerHTML=document.getElementById('flashcontent').parentNode.innerHTML;\r\n}\r\n\r\nvar memo;\r\nmemo='';\r\nfunction freeze() {\r\n\t$(\"#refresh\").hide();\r\n\t$(\"#freeze\").toggle();\r\n\t$(\"#restart\").toggle();\r\n\tmemo=document.getElementById('flashcontent').parentNode.innerHTML;\r\n\tdocument.getElementById('gge').innerHTML=\"Clique D\u00e9 Freeze pour relancer\";\r\n}\r\n\r\nfunction restart() {\r\n\t$(\"#refresh\").show();\r\n\t$(\"#freeze\").toggle();\r\n\t$(\"#restart\").toggle();\r\n\tdocument.getElementById('gge').innerHTML=memo;\r\n\t$('#gge').css(\"width\",'70%');\r\n\t$('#flashcontent').css(\"height\",'100%');\r\n\t\r\n\t\r\n}\r\n\r\nfunction From() {\r\nvar arr=$('#to2').val();\r\nvar dure=$('#dure2').val();\r\nvar aarr=arr.split(':');\r\nvar ddure=dure.split(':');\r\nvar min=aarr[1]-ddure[1];\r\nvar hour=aarr[0]-ddure[0];\r\nif(min<0) {\r\nmin+=60;\r\nhour-=1;\r\n}\r\nif(min<10) min='0'+min;\r\nif(hour<0) hour+=24;\r\n$('#from2').val(hour+':'+min);\r\n}\r\n\r\nfunction ShowTools(e) {\r\n\tif($('#tools').is(':visible')) {\r\n\t\tHideTools();\r\n\t\treturn;\r\n\t} \r\n\t$('#tools').show();\r\n\t$('#gge').css(\"width\",'70%');\r\n\t$('#flashcontent').css(\"height\",'100%');\r\n\te.stopPropagation();\r\n}\r\n\r\nfunction HideTools() {\r\n$('#tools').hide();\r\n$('#gge').css(\"width\",'100%');\r\n}\r\n\r\nfunction CalcDef() {\r\nvar D1=parseInt($('#D_1').val());\r\nvar D2=parseInt($('#D_2').val());\r\nvar D3=parseInt($('#D_3').val());\r\nvar M1=parseInt($('#L_1').val());\r\nvar M2=parseInt($('#L_2').val());\r\nvar M3=parseInt($('#L_3').val());\r\nvar T=D1+D2+D3+M1+M2+M3;\r\nvar T1=D1+M1;\r\nvar T2=D2+M2;\r\nvar T3=D3+M3;\r\n$('#fg')         .html( Math.round(100*T1\/T)+'%');\r\n$('#fc')         .html( Math.round(100*T2\/T)+'%');\r\n$('#fd')         .html( Math.round(100*T3\/T)+'%');\r\n$('#mfg')      .html( Math.round(100*D1\/T1)+'%');\r\n$('#mfc')      .html( Math.round(100*D2\/T2)+'%');\r\n$('#mfd')      .html( Math.round(100*D3\/T3)+'%');\r\n$('#mfg')      .html( Math.round(100*M1\/T1)+'%');\r\n$('#mfc')      .html( Math.round(100*M2\/T2)+'%');\r\n$('#mfd')      .html( Math.round(100*M3\/T3)+'%');\r\n$('#dfg')       .html( Math.round(100*D1\/T1)+'%');\r\n$('#dfc')       .html( Math.round(100*D2\/T2)+'%');\r\n$('#dfd')       .html( Math.round(100*D3\/T3)+'%');\r\n\r\n}\r\n\r\nfunction ch_taille(dime) {\r\n\t$('#gge').css(\"width\",dime+'%');\r\n\tdime2=dime-2;\r\n\t$('#flashcontent').css(\"height\",dime2+'%');\r\n}\r\n\r\n<\/script>\r\n<div style='position:absolute;top:10px';left:10px;'>\r\n<img onclick='var e = arguments[0] || window.event; ShowTools(e);' src='http:\/\/sidesdarkness.lorksoft.com\/images\/icon-toolbox.jpg'  width='33%;'\/>\r\n<\/div>\r\n<div id='tools' style='Display:none;float:left;width:29%;border 0px solid;'><br\/>\r\n<input type='button' id='refresh' value='Refresh' onclick='Rel()' >\r\n<input type='button' value='Arret temporaire' id='freeze' onclick='freeze()' >\r\n<input type='button' value='d\u00e9 freeze' id='restart' onclick='restart()' style='display:none'>\r\n<input type='button' onclick=\"document.location.href='http:\/\/www.gioco.it\/gioco\/Goodgame-Empire?auto=1';\" value='gioco.it' \/>\r\n<input type='button' onclick=\"document.location.href='http:\/\/www.jeux.fr\/jeu\/Goodgame-Empire?auto=1';\" value='Jeux.fr' \/>\r\n<input type='button' onclick=\"document.location.href='http:\/\/www.jeu.fr\/jeu\/Goodgame-Empire?auto=1';\" value='Jeu.fr' \/>\r\n<br\/>\r\nTaille d'affichage : \r\n<input type='button' value='1\/4' onclick='ch_taille(25);'>\r\n<input type='button' value='1\/2' onclick='ch_taille(50);'>\r\n<input type='button' value='3\/4' onclick='ch_taille(70);'><br\/><br/><\/div>\r\n<div id='gge' style='float:left;width:100%;border:0px solid;'>\r\nMOMOMOMO\r\n<\/div>\r\n<\/body>\r\n<\/html>";
  var loc = window.location.href;

if (loc.indexOf('http://gi.goodgamestudios.com/sns')!=-1 || loc.indexOf('jeux.fr/goodgames/sns/init/') != -1 || loc.indexOf('goodgames/sns/init/') != -1 ) {
    var count=0;
   var tttt=setInterval(function(e) {

   ifr=document.getElementById("content-iframe");
       if(ifr!=null)
   button = ifr.contentDocument.getElementById('icon');
	   if(button==null)  return;
       button.innerHTML='<input type="button" value="Full Window + Tools"/>';
    button.addEventListener('click',function() {
        var str=ifr.contentDocument.getElementById('flashcontent');
        var reg= new RegExp('MOMOMOMO',"g");
        var reg1= new RegExp('="800"',"g");
        var reg2= new RegExp('="600"',"g");
        var reg3= new RegExp('pln=([^&]*)&',"g");
		    var reg4= new RegExp('NOMJOUEUR',"g");
        var nomjoueur=reg3.exec(str.innerHTML);

		mwin=open('','_self');
		mwin.parent.document.write(chaine.replace(reg4,nomjoueur[1]).replace(reg, str.parentNode.innerHTML.replace(reg1,'="100%"').replace(reg2,'="100%"')));

    },true);
       clearInterval(tttt) ;

    }, 3000);


}
   var tttt2=setInterval(function(e) {
		pub=document.getElementById("sgAdWrapperObj");
		if(pub!=null) {pub.parentNode.removeChild(pub);
		clearInterval(tttt2);
		}
		pub=document.getElementById("sgAdLbGp728x90");
		if(pub!=null) {pub.parentNode.removeChild(pub);
		}
		pub=document.getElementById("sgAdLbSg728x90");
		if(pub!=null) {pub.parentNode.removeChild(pub);
		}
		pub=document.getElementById("cboxOverlay");
		if(pub!=null) {pub.parentNode.removeChild(pub);
		clearInterval(tttt2);
		}
		pub=document.getElementById("colorbox");
		if(pub!=null) {pub.parentNode.removeChild(pub);
		clearInterval(tttt2);
		}

	},1500);

});
