var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var btnAdd = document.getElementsByName('btnAdd')[0];
var btnSub = document.getElementsByName('btnSub')[0];

btnAdd.addEventListener("click", function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
});

btnSub.addEventListener("click", function(){
    if(currentNumber === 0){
        return;
    }else{
        currentNumber = currentNumber - 1;
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