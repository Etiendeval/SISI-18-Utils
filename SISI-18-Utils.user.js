// ==UserScript==

// @name			    SISI-18-Utils (Alpha)
// @namespace     https://github.com/Etiendeval/SISI-18-Utils
// @version			  1.7
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

// @match			    http://www.mousebreaker.com/goodgames/sns/init/*
// @match			    http://www.mousebreaker.com/game/goodgame-empire?
// @match			    http://www.juegos.com/goodgames/sns/init/*
// @match			    http://www.juegos.com/juego/goodgame-empire?
// @match			    http://www.agame.com/goodgames/sns/init/*
// @match			    http://www.agame.com/game/goodgame-empire.html
// @match			    http://www.games.co.uk/goodgames/sns/init/*
// @match			    http://www.games.co.uk/game/goodgame-empire.html

// ==/UserScript==
var auto_run = GM_getValue('auto-run');
if(auto_run == undefined){GM_setValue('auto-run','false');
  auto_run = GM_getValue('auto-run');
}
GM_log('auto_run_info '+auto_run);

$(document).ready(function() {

var chaine='<html style="height:100%;">'+
''+
'<head>'+
'  <title>NOMJOUEUR ( SISI 18 Utils )</title>'+
'  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>'+
'  <meta name="viewport" content="width=device-width, initial-scale=1">'+
'  <style>'+
'  .switch {'+
'    position: relative;'+
'    top: -9px;'+
'    display: inline-block;'+
'    width: 30px;'+
'    height: 17px;'+
'  }'+
'  .switch input {'+
'    opacity: 0;'+
'    width: 0;'+
'    height: 0;'+
'  }'+
'  .slider {'+
'    position: absolute;'+
'    cursor: pointer;'+
'    top: 0;'+
'    left: 0;'+
'    right: 0;'+
'    bottom: 0;'+
'    background-color: #ccc;'+
'    -webkit-transition: .3s;'+
'    transition: .3s;'+
'  }'+
'  .slider:before {'+
'    position: absolute;'+
'    content: "";'+
'    height: 13px;'+
'    width: 13px;'+
'    left: 2px;'+
'    bottom: 2px;'+
'    background-color: white;'+
'    -webkit-transition: .3s;'+
'    transition: .3s;'+
'  }'+
'  input:checked + .slider {'+
'    background-color: #2196F3;'+
'  }'+
'  input:focus + .slider {'+
'    box-shadow: 0 0 1px #2196F3;'+
'  }'+
'  input:checked + .slider:before {'+
'    -webkit-transform: translateX(13px);'+
'    -ms-transform: translateX(13px);'+
'    transform: translateX(13px);'+
'  }'+
'/* Rounded sliders */'+
'  .slider.round {'+
'    border-radius: 13px;'+
'  }'+
'  .slider.round:before {'+
'    border-radius: 50%;'+
'  }'+
'  </style>'+
'</head>'+
''+
'<body style="margin:0px;padding:0px;">'+
'  <script type="text/javascript">'+
''+
'    function Rel() {'+
'      document.getElementById(\'flashcontent\').parentNode.innerHTML=document.getElementById(\'flashcontent\').parentNode.innerHTML;'+
'    }'+
'    var auto_run_info;'+
'    auto_run_info='+ auto_run +';'+
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
'    function check(){'+
'      $("#auto_run").prop("checked", true);'+
'    }'+
'    function uncheck(){'+
'      $("#auto_run").prop("checked", false);'+
'    }'+
'    function MAJ_checkbox(){'+
'      if(auto_run_info===true){'+
'        check();'+
'      }'+
'      if(auto_run_info===false){'+
'        uncheck();'+
'      }'+
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
'    <label class=\'switch\'>'+
'      <input type=\'checkbox\'id=\'auto_run\'>'+
'      <span class=\'slider round\'></span>'+
'    </label>'+
'  </div>'+
'  <div id=\'gge\' style=\'float:left;width:100%;border:0px solid;\'>'+
'  MOMOMOMO'+
'  </div>'+
'  </body>'+
'</html>';

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
