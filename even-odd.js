function test(){
    var num=document.getElementById("txtNum").value;
    if(num%2==0){
        document.getElementById('txtResult').value= num + ` is an even number!`;
    }else if(num%2==1){
        document.getElementById('txtResult').value= num + ` is an odd number!`;
    }
}