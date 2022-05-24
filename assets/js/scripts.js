var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var btnAdd = document.getElementsByName('btnAdd')[0];
var btnSub = document.getElementsByName('btnSub')[0];

btnAdd.addEventListener("click", function(){
    currentNumber = currentNumber + 1;
    
    //Color changing 
    if(currentNumber >= 10 && currentNumber < 20){
        currentNumberWrapper.style.color = 'green';
        currentNumberWrapper.style.fontWeight = '600';
    }else if(currentNumber >= 20){
        currentNumberWrapper.style.color = '#006400';
        currentNumberWrapper.style.fontWeight = '800';
    }

    currentNumberWrapper.innerHTML = currentNumber;
});

btnSub.addEventListener("click", function(){
    if(currentNumber === 0){
        return;
    }else{
        currentNumber = currentNumber - 1;
    }   

    //Color changing 
    if(currentNumber >= 10 && currentNumber < 20){
        currentNumberWrapper.style.color = 'green';
        currentNumberWrapper.style.fontWeight = '600';
    }else if(currentNumber < 10){
        currentNumberWrapper.style.color = 'slateblue';
        currentNumberWrapper.style.fontWeight = '500';
    }

    currentNumberWrapper.innerHTML = currentNumber;
});

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if(currentNumber === 0){
        return;
    }else{
        currentNumber = currentNumber - 1;
    }   
    currentNumberWrapper.innerHTML = currentNumber;
}