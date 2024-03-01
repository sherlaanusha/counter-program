const data = document.getElementById('text-num');
const increaseBtn1 = document.getElementById('increaseBtn1');
const resetBtn2 = document.getElementById('resetBtn2');
const decreaseBtn3 = document.getElementById('decreaseBtn3');
let count = 0;

increaseBtn1.onclick = function(){
    count++;
    data.textContent = count;
}
resetBtn2.onclick = function(){
    count = 0;
    data.textContent = count;
}
decreaseBtn3.onclick = function(){
    count--;
    data.textContent = count;
}

