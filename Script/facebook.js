javascript:
var elms = document.getElementsByClassName('uiButton _1sm');
var sorteados = [];
var valorMaximo = elms.length;
var i= 0;
var clicks = 0; 
function criarUnico(clicks, i){        
    if(clicks >= valorMaximo){                
        alert("Foram convidados "+clicks);        
        return false;    
    }     
    setTimeout(function(){  
        elms[i].click();    
        i++; clicks = clicks+1;           
        criarUnico(clicks, i);            
    }, 1000);
}
criarUnico(clicks, i);
