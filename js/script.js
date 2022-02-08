let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('.button-menu input');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');

//contador
let jogador1 = 0;
let jogador2 = 0

//evento de click em todos os boxes através do for

for(let i = 0; i < boxes.length ; i++){
    
    boxes[i].addEventListener('click', function(){

        let el = checkEl(jogador1,jogador2);

        if(this.childNodes.length == 0){
        
            let clone = el.cloneNode(true);

            this.appendChild(clone); 
            
            //controlando a vez de cada jogador
            if(jogador1 == jogador2){
                jogador1++;
            } else{
                jogador2++;
            }
        }
    })
}

function checkEl(jogador1, jogador2){
    if(jogador1 == jogador2){
        //x
        el = x;
    } else{
        //o
        el = o;
    }
    return el;
}

