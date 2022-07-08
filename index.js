let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = ' ';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log('button text is ', buttontext)
        if(buttontext=='X'){
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if(buttontext == 'C'){
            screenvalue = " ";
            screen.value = screenvalue;
        }
        else if(buttontext == '='){
            screen.value = eval(screenvalue);
        }
        // else if(buttontext == '^'){
        //      screenvalue = Math.pow(screnvalue,screenvalue);
        //     screen.value =  screenvalue;
        // }
        // else if(buttontext == 'sin'){
        //     screenvalue = Math.sin(screenvalue);
        //     screen.value = screenvalue;
        // }
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}