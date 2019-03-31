// ==UserScript==

// @name			    SISI-18-Utils (Alpha)
// @namespace     https://github.com/Etiendeval/SISI-18-Utils
// @version			  1.8.1
// @author        Etiendeval
// @description 	Script for play GoodGameEmpire in fullscreen for spilgames.com (Alpha)
// @updateURL     https://github.com/Etiendeval/SISI-18-Utils/raw/master/SISI-18-Utils.user.js
// @downloadURL   https://github.com/Etiendeval/SISI-18-Utils/raw/master/SISI-18-Utils.user.js
// @supportURL    https://github.com/Etiendeval/SISI-18-Utils/issues
// @require       http://code.jquery.com/jquery-latest.js
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_log

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

// @match			    https://www.jeu.fr/goodgames/sns/init/*
// @match			    https://www.jeu.fr/jeu/Goodgame-Empire.html
// @match			    https://www.jeux.fr/goodgames/sns/init/*
// @match			    https://www.jeux.fr/jeu/Goodgame-Empire.html
// @match			    https://www.gioco.it/goodgames/sns/init/*
// @match			    https://www.gioco.it/gioco/goodgame-empire.html
// @match			    https://www.spelletjes.nl/goodgames/sns/init/*
// @match			    https://www.spelletjes.nl/spel/goodgame-empire.html
// @match			    https://www.giochi.it/goodgames/sns/init/*
// @match			    https://www.giochi.it/gioco/goodgame-empire.html
// @match			    https://www.jetztspielen.de/goodgames/sns/init/*
// @match			    https://www.jetztspielen.de/spiel/goodgame-empire.html
// @match			    https://www.gry.pl/goodgames/sns/init/*
// @match			    https://www.gry.pl/gra/goodgame-empire.html
// @match			    https://www.spel.nl/goodgames/sns/init/*
// @match			    https://www.spel.nl/spel/goodgame-empire.html
// @match			    https://www.spielen.com/goodgames/sns/init/*
// @match			    https://www.spielen.com/spiel/goodgame-empire.html
// @match			    https://www.spela.se/goodgames/sns/init/*
// @match			    https://www.spela.se/spel_/goodgame-empire.html
// @match			    https://www.spelletjes.nl/goodgames/sns/init/*
// @match			    https://www.spelletjes.nl/spel/goodgame-empire.html

// @match			    http://www.mousebreaker.com/goodgames/sns/init/*
// @match			    http://www.mousebreaker.com/game/goodgame-empire?
// @match			    http://www.juegos.com/goodgames/sns/init/*
// @match			    http://www.juegos.com/juego/goodgame-empire?
// @match			    http://www.agame.com/goodgames/sns/init/*
// @match			    http://www.agame.com/game/goodgame-empire.html
// @match			    http://www.games.co.uk/goodgames/sns/init/*
// @match			    http://www.games.co.uk/game/goodgame-empire.html

// @match			    https://www.mousebreaker.com/goodgames/sns/init/*
// @match			    https://www.mousebreaker.com/game/goodgame-empire?
// @match			    https://www.juegos.com/goodgames/sns/init/*
// @match			    https://www.juegos.com/juego/goodgame-empire?
// @match			    https://www.agame.com/goodgames/sns/init/*
// @match			    https://www.agame.com/game/goodgame-empire.html
// @match			    https://www.games.co.uk/goodgames/sns/init/*
// @match			    https://www.games.co.uk/game/goodgame-empire.html

// ==/UserScript==
console.log('[UserScript] Preboot');

//-->Pour une future option de mise en plaine écrant automatique ?
var auto_run = GM_getValue('auto-run');
if(auto_run == undefined){GM_setValue('auto-run','false');
  auto_run = GM_getValue('auto-run');
};
//<--
GM_log('[UserScript] auto_run_info '+auto_run);

console.log('[UserScript] Boot');
$(document).ready(function() {

var HTML='<html style="height:100%;">'+
''+
'<head>'+
'  <title>NOMJOUEUR ( SISI 18 Utils )</title>'+
'  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>'+
'  <meta name="viewport" content="width=device-width, initial-scale=1">'+
'</head>'+
''+
'<body style="margin:0px;padding:0px;">'+
'  <script type="text/javascript">'+
''+
'    function Rel() {'+
'      document.getElementById(\'flashcontent\').parentNode.innerHTML=document.getElementById(\'flashcontent\').parentNode.innerHTML;'+
'    }'+
'    var auto_run_info =auto_run;'+
'    var memo;'+
'    memo=\'\';'+
''+
'    function freeze() {'+
'      $("#refresh").hide();'+
'      $("#freeze").toggle();'+
'      $("#restart").toggle();'+
'      memo=document.getElementById(\'flashcontent\').parentNode.innerHTML;'+
'      document.getElementById(\'gge\').innerHTML="Clique D\u00e9 Freeze pour relancer";'+
'    }'+
''+
'    function restart() {'+
'      $("#refresh").show();'+
'      $("#freeze").toggle();'+
'      $("#restart").toggle();'+
'      document.getElementById(\'gge\').innerHTML=memo;'+
'      $(\'#gge\').css("width",\'70%\');'+
'      $(\'#flashcontent\').css("height",\'100%\');'+
'    }'+
''+
'    function ShowTools(e) {'+
'      if($(\'#tools\').is(\':visible\')) {'+
'        HideTools();'+
'        return;'+
'        }'+
'        MAJ_checkbox();'+
'        $(\'#tools\').show();'+
'        $(\'#gge\').css("width",\'70%\');'+
'        $(\'#flashcontent\').css("height",\'100%\');'+
'        e.stopPropagation();'+
'      }'+
''+
'    function HideTools() {'+
'      $(\'#tools\').hide();'+
'      $(\'#gge\').css("width",\'100%\');'+
'    }'+
''+
'    function ch_taille(dime) {'+
'      $(\'#gge\').css("width",dime+\'%\');'+
'      dime2=dime-2;'+
'      $(\'#flashcontent\').css("height",dime2+\'%\');'+
'    }'+
'  </script>'+
''+
'  <div style=\'position:absolute;top:10px;left:10px;\'>'+
'    <img onclick=\'var e = arguments[0] || window.event; ShowTools(e);\' src=\'http://sidesdarkness.lorksoft.com/images/icon-toolbox.jpg\'  width=\'33%;\'/>'+
'  </div>'+
'  <div id=\'tools\' style=\'Display:none;float:left;width:29%;border 0px solid;\'>'+
'    <br>'+
'      <input type=\'button\' id=\'refresh\' value=\'Refresh\' onclick=\'Rel()\' >'+
'      <input type=\'button\' value=\'Arret temporaire\' id=\'freeze\' onclick=\'freeze()\' >'+
'      <input type=\'button\' value=\'d\u00e9 freeze\' id=\'restart\' onclick=\'restart()\' style=\'display:none\'>'+
'      <input type=\'button\' onclick="document.location.href=\'http://www.jeux.fr/jeu/Goodgame-Empire?auto=1\';" value=\'Jeux.fr\' />'+
'      <input type=\'button\' onclick="document.location.href=\'http://www.jeu.fr/jeu/Goodgame-Empire?auto=1\';" value=\'Jeu.fr\' />'+
'      <input type=\'button\' onclick="document.location.href=\'http://www.gioco.it/gioco/Goodgame-Empire?auto=1\';" value=\'gioco.it\' />'+
''+
'    <br>'+
'    Taille d\'affichage :'+
'    <input type=\'button\' value=\'1/4\' onclick=\'ch_taille(25);\'>'+
'    <input type=\'button\' value=\'1/2\' onclick=\'ch_taille(50);\'>'+
'    <input type=\'button\' value=\'3/4\' onclick=\'ch_taille(70);\'><br>'+
'    Mise en pleine écrant automatiquement (alpha):'+
'  </div>'+
'  <div id=\'gge\' style=\'float:left;width:100%;border:0px solid;\'>'+
'  MOMOMOMO'+
'  </div>'+
'  </body>'+
'</html>';

console.log('[UserScript] Postboot');
var loc = window.location.href;
var GUI_auto_run;

if (loc.indexOf('http://gi.goodgamestudios.com/sns')!=-1 || loc.indexOf('jeux.fr/goodgames/sns/init/') != -1 || loc.indexOf('goodgames/sns/init/') != -1 ) {
    var count=0;
   var tttt=setInterval(function(e) {

   ifr=document.getElementById("CastleUI");
       if(ifr!=null)
   button = ifr.contentDocument.getElementById('icon');
	   if(button==null)  return;
       button.innerHTML='<input type="button" value="Full Window + Tools"/>';
    button.addEventListener('click',function() {
        var str=ifr.contentDocument.getElementById('CastleUI');
        var reg= new RegExp('MOMOMOMO',"g");
        var reg1= new RegExp('="800"',"g");
        var reg2= new RegExp('="600"',"g");
        var reg3= new RegExp('pln=([^&]*)&',"g");
		    var reg4= new RegExp('NOMJOUEUR',"g");
        var nomjoueur=reg3.exec(str.innerHTML);

		mwin=open('','_self');
		mwin.parent.document.write(HTML.replace(reg4,nomjoueur[1]).replace(reg, str.parentNode.innerHTML.replace(reg1,'="100%"').replace(reg2,'="100%"')));

    },true);
       clearInterval(tttt) ;

    }, 3000);
}
});