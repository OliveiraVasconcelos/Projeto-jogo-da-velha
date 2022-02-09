
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll(".button-menu button")
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

//button choice -- decide se o jogo irá acontecer contra um segundo jogador, ou contra a IA.
for(let i = 0; i < buttons.length; i++){
  
    buttons[i].addEventListener('click', function(){
      
        secondPlayer = this.getAttribute('id');
      
        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }

        let container = document.querySelector('#container');

        setTimeout(function(){
            container.classList.remove('hide');
        },250)
    })
}


//inseringo a lógica do click
for(let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener('click', function(){
        
                  
        let el = checkEl(jogador1,jogador2);
        
        if(this.childNodes.length == 0 ){
    
            let clone = el.cloneNode(true); 
            
            this.appendChild(clone);
            
            //controlando a vez
            if(jogador1 == jogador2){
                jogador1++;
                
                if(secondPlayer == "AI-player"){
                    computerPlay();
                    jogador2++;
                }

            } else{
                jogador2++;

            }
            checkQuemVenceu();
        } 

    });

}

//Lógica do vencedor

function checkQuemVenceu(){

let b1 = document.getElementById("block-1");
let b2 = document.getElementById("block-2");
let b3 = document.getElementById("block-3");
let b4 = document.getElementById("block-4");
let b5 = document.getElementById("block-5");
let b6 = document.getElementById("block-6");
let b7 = document.getElementById("block-7");
let b8 = document.getElementById("block-8");
let b9 = document.getElementById("block-9");

//horizontal

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
            
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        

        if(b1Child == "x" && b2Child =="x" && b3Child == "x"){
            declareWinner("x");
        
        }else if(b1Child == "o" && b2Child =="o" && b3Child == "o")
        {
            declareWinner("o");
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        
    
        if(b4Child == "x" && b5Child =="x" && b6Child == "x"){
            declareWinner("x");
        }else if(b4Child == "o" && b5Child =="o" && b6Child == "o")
        {
            declareWinner("o");
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
    
        if(b7Child == "x" && b8Child =="x" && b9Child == "x"){
            declareWinner("x");
        
        }else if(b7Child == "o" && b8Child =="o" && b9Child == "o")
        {
            declareWinner("o");

        }
    }
    
    //vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        

        if(b1Child == "x" && b4Child =="x" && b7Child == "x"){
            declareWinner("x");
        
        }else if(b1Child == "o" && b4Child =="o" && b7Child == "o")
        {
            declareWinner("o");
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        

        if(b2Child == "x" && b5Child =="x" && b8Child == "x"){
            declareWinner("x");
        
        }else if(b2Child == "o" && b5Child =="o" && b8Child == "o")
        {
            declareWinner("o");
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
            
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        
        if(b3Child == "x" && b6Child =="x" && b9Child == "x"){
            declareWinner("x");
        
        }else if(b3Child == "o" && b6Child =="o" && b9Child == "o")
        {
            declareWinner("o");
        }
    }

    //diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
    
        if(b1Child == "x" && b5Child =="x" && b9Child == "x"){
            declareWinner("x");
        
        }else if(b1Child == "o" && b5Child =="o" && b9Child == "o")
        {
            declareWinner("o");

        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        
    
        if(b3Child == "x" && b5Child =="x" && b7Child == "x"){
            declareWinner("x");
        
        }else if(b3Child == "o" && b5Child =="o" && b7Child == "o")
        {
            declareWinner("o");
        }
    }
    
    //draw = Velha
    let contVencedor = 0
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contVencedor++;
        }
        if(contVencedor == 9){
            declareWinner("Velha");
        }
    }
}



function checkEl (jogador1,jogador2){
    if(jogador1 == jogador2){
        //x
        el = x;
    } else{
        //o
        el = o;
    }
    return el;
}

function declareWinner(winner){
   let scoreboardX = document.querySelector("#scoreboard-1"); 
   let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = "";

   if(winner == "x"){
       scoreboardX.innerText = parseInt(scoreboardX.innerText) + 1;
       msg = "O Jogador-1 venceu!";

    }else if(winner == "o"){
       scoreboardO.innerText = parseInt(scoreboardO.innerText) + 1;
       msg = "O Jogador-2 venceu!";

   }else if(winner == 'o' && secondPlayer == "AI-player"){
        msg = "A Inteligência artificial venceu!"
   }else{
       msg = "Deu Velha!"
   }

   //exibindo mensagem - show the message
   messageContainer.classList.remove('hide');
   messageText.innerHTML = msg;


   //escondendo a mensagem - hiding the message
   setTimeout(function(){
    messageContainer.classList.add('hide');
   },2400)


   //zerando jogadas
   jogador1 = 0;
   jogador2 = 0;

   //limpando o jogo - cleaning the game    //essa função acessa apenas os boxes que contém um filho(elemento) e
   //trata de limpar as divs com a lógica de acessar o seu elemento-pai com o método -parentNode- e remover com o método -removeChild()-
   let boxToRemove = document.querySelectorAll('.box div');

   for(let i = 0; i < boxToRemove.length; i++){
       boxToRemove[i].parentNode.removeChild(boxToRemove[i]);

   }
}

//lógica da IA
function computerPlay(){
    
    let cloneO = o.cloneNode(true);
    let cont = 0;
    let filled = 0;
    
    for(let i = 0; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                cont++;
                break;
            }
        }else{
            filled++
        }
        
    }

    if(cont == 0 && filled < 9 ){
        computerPlay();
    }
}