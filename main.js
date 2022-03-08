console.log('Player VS Player');
/*
(function(){
// Selecting Targeted HTMl Element 


const formElm = document.querySelector('form');
const userInputElm = document.querySelector('.lucky-number');
//console.log(formElm);
//console.log(userInputElm);
let luckNumberElm = document.querySelector('.luck-number span')
//selecting players from buttons 
const p1BtnElm = document.querySelector('.p1btn')
const p2BtnElm = document.querySelector('.p2btn')
//console.log(p1Elm);
//console.log(p2Elm);

// Player 1 & Player 2 te add howa event ke show korate browser e selector use korbo
const p1InputElm = document.querySelector('.first-player')
console.log(p1InputElm);
const p2InputElm = document.querySelector('.second-player')
console.log(p2InputElm);

// Selecting Winner declaration
const winnerElm = document.querySelector('.winner') 
const resetElm = document.querySelector('.reset')
console.log(resetElm)

let luckyNumber 
let p1ClickValue
let p2ClickValue
let p1Turn
let p2Turn
let gameOver

function initialState(){
    luckyNumber =10 // globally declared lucky Number
    p1ClickValue = 0;
    p2ClickValue = 0;
    p1Turn = true
    p2Turn = true
    gameOver = false
   
}

function initialView(){
    luckNumberElm.textContent=luckyNumber // visualizing globallu declared lucky number into Dom
    p1InputElm.textContent = 0
    p2InputElm.textContent = 0

}

initialState()
initialView()



// for enabling and disabling p1,p2 button we take 2 varibale
// and these variable will be used inside particular p1,p2 event
// to ensure p1 can click once at a time 


// form er input field er value Submit korar por receive korte chassi
// er jonno ekta event listener add korbo form e 

function winner(player){
    gameOver = true;
    // P1 Winner
    winnerElm.textContent = `${player} is winner`;
    p1BtnElm.setAttribute('disabled', 'disabled')
    p2BtnElm.setAttribute('disabled', 'disabled')
}

formElm.addEventListener('submit', function(event){
    event.preventDefault();
    //console.log(event);
     //for stopping auto browser loading to check

     // user je input disse sei value ke receive korbo
     luckyNumber = parseInt(userInputElm.value)
        //console.log(userInputElm.value)

     //inserting LuckyNumber into luckNumber Elm

     luckNumberElm.textContent=luckyNumber // html er text content akare luckyNumber ke rec korbe luckNumberElm

     // ebar Input field e dewa number ke reset/vanish korbo
            userInputElm.value='';
    
})

// ekon player 1 e event add korbo jebo se game ta khelte pare 

p1BtnElm.addEventListener('click', function(event){
    event.preventDefault()
    if(p1Turn && luckyNumber !==p1ClickValue && luckyNumber !==p2ClickValue){
          //console.log(event)
    //Increment P1 value after clicking 
    p1ClickValue++
    //console.log(p1ClickValue);
    // showing it to dom
    p1InputElm.textContent = p1ClickValue
    // // switching off p1 and enabling p2 after one click
    p1Turn = false
    p2Turn = true

    // After clicking p1 button it will be disabled

    p1BtnElm.setAttribute('disabled', 'disabled')
    p2BtnElm.removeAttribute('disabled')


    }
    if (p1ClickValue === luckyNumber){
       winner('p1')

    }
  
})

p2BtnElm.addEventListener('click',function(event){

    if (p2Turn && luckyNumber !==p2ClickValue && luckyNumber !==p1ClickValue){
        event.preventDefault()
        //console.log(event)
        p2ClickValue++
    
        p2InputElm.textContent = p2ClickValue
        //console.log(p2ClickValue);
        // switching off p2 and enabling p1 after one Click
        p2Turn = false
        p1Turn = true

    // After clicking p1 button it will be disabled

    p2BtnElm.setAttribute('disabled', 'disabled')
    p1BtnElm.removeAttribute('disabled')


    }
    if (p2ClickValue === luckyNumber){
        winner('p2')
    }
   
})

// Resetting 

resetElm.addEventListener('click', function(){
    initialState()
    initialView()
    winnerElm.textContent = '' 
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')


})
}())

*/

///__________________Final Work____________________

// Added feature 
// random LuckNumber Generate & Random number generate for Player 1 And Player 2  

(function (){
    const formElm = document.querySelector('form')
    const userInputElm = document.querySelector('.lucky-number');
    const showNumElm = document.querySelector('.luck-number span')
    const p1BtnElm = document.querySelector('.p1btn')
    const p2BtnElm = document.querySelector('.p2btn')
    
    const p1InputElm = document.querySelector('.first-player')
    const p2InputElm = document.querySelector('.second-player')
    const winnerElm = document.querySelector('.winner')
    const resetElm = document.querySelector('.reset')
    
    
    let luckyNumber
    let p1ClickValue
    let p2ClickValue 
    let p1Trurn
    let p2Turn
    let gameOver

    // Generating Random Numbers

    function randomNumber(){
       return  Math.floor(Math.random() * 10) + 1
    }
    //function randomFor1(increment){
      //  return Math.floor(Math.random()*increment) + randomNumber()
   // }
    
    function initialState(){
        luckyNumber = randomNumber()
        p1ClickValue = 0
        p2ClickValue = 0 
        p1Trurn = true
        p2Turn = true
        gameOver = false
    }
    
    initialState()
    
    function initialView(){
        showNumElm.textContent = luckyNumber
        p1InputElm.textContent = 0
        p2InputElm.textContent = 0
    
    }
    
    initialView();
    
    function winner(player){
        gameOver = true
        winnerElm.textContent = `${player} is Winner`
        p1BtnElm.setAttribute('disabled', 'disabled')
        p2BtnElm.setAttribute('disabled', 'disabled')
    }
    
    formElm.addEventListener('submit',function(event){
        event.preventDefault()
    
        // receiving user input to visualize in browser 
        luckyNumber = parseInt(userInputElm.value) 
    
        showNumElm.textContent = luckyNumber
    
        // emptying user inputField
        userInputElm.value = ''
    
    })
    
    p1BtnElm.addEventListener('click', function(event){
        if (p1Trurn && luckyNumber  >=p1ClickValue && luckyNumber >=p2ClickValue){
            event.preventDefault()
           //p1ClickValue++
           p1ClickValue = Math.floor((Math.random() * luckyNumber) + 1)
            p1InputElm.textContent = p1ClickValue
    
            p1Trurn = false
            p2Turn = true
    
            p1BtnElm.setAttribute('disabled', 'disabled')
            p2BtnElm.removeAttribute('disabled');
    
        }
        if (p1ClickValue >= luckyNumber){
          
                winner('Player 1')
        }
    
    
    
    })
    p2BtnElm.addEventListener('click', function(event){
        if (p2Turn && luckyNumber >= p2ClickValue && luckyNumber >= p1ClickValue){
            event.preventDefault()
           // p2ClickValue++
           p2ClickValue = Math.floor((Math.random() * luckyNumber) + 1)
            p2InputElm.textContent = p2ClickValue
    
            p2Turn = false
            p1Trurn = true
    
            p2BtnElm.setAttribute('disabled', 'disabled')
            p1BtnElm.removeAttribute('disabled')
    
        }
        if (p2ClickValue >= luckyNumber){
         
            winner('Player 2')
    
        }
      
    })
    
    
    // resetting 
    
    resetElm.addEventListener('click', function(){
        initialState()
        initialView()
        winnerElm.textContent = ''
        p1BtnElm.removeAttribute('disabled')
        p2BtnElm.removeAttribute('disabled')
    
    
    })
}())