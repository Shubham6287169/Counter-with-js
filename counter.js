let count = 0;
let output = document.querySelector('.output');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');

const addValue = ()=>{

        if(count<20){
            count = count+1
        }else{
            count=count;
        }
    
    output.innerHTML = count;
}

const removeValue = ()=>{
    if(count == 0){
        count = count
    }else{
        count=count-1;
    }
    output.innerHTML = count;
}