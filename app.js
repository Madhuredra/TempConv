function find(){
    let res;
    let x = document.querySelector('.inpt').value;
    let tempSelect = document.getElementsByName("Temprature")[0].value;
    if(x.length!=0){
        if(tempSelect=='C'){
            res = x*9/5+32;
            document.querySelector('.ShowArea').innerHTML = "The Fahrenheit value of "+ x +" <sup>o</sup>C is "+ res +" F";
        }else{
            res = (x-32)*5/9;
            document.querySelector('.ShowArea').innerHTML = "The Celsius value of "+ x +" F is "+ res +" <sup>o</sup>C";
        }
    }else{
        document.querySelector('.inpt').style.border = "1px solid red";
        document.querySelector('.warn').innerText = "Enter Value";
    }
}