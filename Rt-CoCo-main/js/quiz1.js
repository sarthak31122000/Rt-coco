document.getElementById('password1').addEventListener('click',function(event){
    let password=document.getElementById("passwordbox");
    let passwordtext=password.value;
    
    if(passwordtext==="411"){
        return;
    }
    else{
        alert("You have answered wrong please try again");
        event.preventDefault();
    }

});
