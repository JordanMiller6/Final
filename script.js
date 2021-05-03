function submit(){
  var valEle = document.body.querySelector(".valMess");
  var val =document.body.querySelector(".val");
  var username =document.body.querySelector(".username").value;
  var password =document.body.querySelector(".password").value;
  
  if(username==="cool"&&password==="password"){
    val.parentNode.removeChild(val);
    var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var x = 0
var pages = [
  {
    title:"Grade View",
    content:"Home content"
  },
  {
    title:"Add Grade",
    content:"Some about content"
  },
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
 
  if (pg =="Grade View"){
    display.innerHTML="";
    var heading = document.createElement("h1");
    heading.innerHTML="Grade View";
    display.appendChild(heading);
    document.getElementById("demo").innerHTML = grades;

  }
  if (pg =="Add Grade"){
    display.innerHTML="";
    var heading = document.createElement("h1");
    var Name = document.createElement("h3");
    heading.innerHTML="Add name then add grade";
    display.appendChild(heading);
    display.appendChild(Name);
    var namebox = document.createElement("input")
namebox.setAttribute("type", "text");
display.appendChild(namebox);
    var button = document.createElement("button");
button.innerHTML = "enter";
    var scorebox = document.createElement("input")
scorebox.setAttribute("type", "text");
display.appendChild(scorebox);
    display.appendChild(button);
    button.addEventListener ("click", function() {
      var name = (namebox.value);
        var score = (scorebox.value);
           if (isNaN(score) === true){
        alert("Invalid entry. Please enter a number!")

      }
        else{
     
     
      }
     
});

  }
 
}
writeStuff(pages[0].content, "Grade View");
  }else if(username==="cool"){
    valEle.innerHTML="Incorrect Password"
  }
  else if(password==="password"){
    valEle.innerHTML="Incorrect username"
}
  else{valEle.innerHTML="Incorrect username and password"}
}
document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})