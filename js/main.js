var x= 0;
function inc(){
    x++;
    document.getElementById("counter").innerHTML= x;
}
function dec(){
    x--;
    document.getElementById("counter").innerHTML= x;
}
function convert(){
    var dollar= document.getElementById('dollar').value;
    var result= document.getElementById('result');
    if(dollar<0){
        document.getElementById('result').innerHTML="Enter a valid number";
        return false;
    }else if(isNaN(dollar)){
        document.getElementById('result').innerHTML="Enter a number";
        return false;
    }else if(dollar==''){
        result.innerHTML='';
        return false;
    }
    else{
        result.innerHTML= dollar*50;
        return false;
    }
}