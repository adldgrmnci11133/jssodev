let userName = prompt("Lütfen adını gir güzel kardeşim");
document.querySelector("#myName").innerHTML= userName;

function showTime(){
    var now = new Date()
    
    let clock = document.getElementById('myClock').innerHTML = `${now}`;
    
}
setInterval(function(){showTime()});