const timer = document.getElementById('timer');
const start = document.getElementById('startButton');
const reset = document.getElementById('resetButton');

let Button = true
let interval

const Click = (e) => {
    console.log(e.target.value)
   
    const countdown = () => {
        Button = false;
        start.value = 'Stop';
        reset.disabled = false;
    
        const intFunc = () => {
            const x = parseInt(timer.innerHTML) - 1;        
            timer.innerHTML = x;
        }
       // setInterval( intFunc, 1000)
        const count = (() => setInterval( intFunc, 1000))();
        interval = count;
        
    }

    const stopCountdown = () => {
        Button = true;
        start.value = 'Start';

        clearInterval(interval);
    }
    const resetCountdown = () => {
        reset.disabled = true;

        if (parseInt(timer.innerHTML) != 100) {
            timer.innerHTML = 100;

            stopCountdown();
        }
    }

    switch (e.target.value){
        case 'Start' :
            countdown();
             break;
        case 'Stop' : 
            stopCountdown();
            break;
        case 'Reset': 
            resetCountdown();
            break;
    }
}

start.addEventListener('click', Click);
reset.addEventListener('click', Click);


  
