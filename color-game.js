
var colors = ganaratcolor(6);
var squares=document.querySelectorAll(".square");
var pickedcolor=colors[Math.floor(Math.random() * colors.length)];
var colordispla=document.getElementById("colordisplay");
var result =document.getElementById("result");
var head1 = document.querySelector("h1");
var newgame=document.getElementById("newgame");
var hardlevel = document.querySelector(".btn1");
var easylevel = document.querySelector(".btn2");
var eayssquare=document.querySelectorAll("#easysquare");

colordispla.innerText=pickedcolor;



  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
      if (this.style.backgroundColor === pickedcolor) {
        // alert("right");
        result.src="correct.png";
        newgame.textContent="Play Again?";
        colorchanges(pickedcolor);
        head1.style.backgroundColor=this.style.backgroundColor;
      }else{
        result.src="cross.png";
        this.style.backgroundColor="#232323";
      }
    })
  }

function colorchanges(color){
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=color;
    // head.style.backgroundColor=pickedcolor;
  }
}

function ganaratcolor(times) {
  var arr=[];
  for (let i = 0; i < times; i++) {
    arr.push(rgb());
  }
  return arr;
}
function rgb(){
  var r = Math.floor(Math.random() * 257);
  var g = Math.floor(Math.random() * 257);
  var b = Math.floor(Math.random() * 257);
  var ans = "rgb("+r+", "+g+", "+b+")";
  return ans;
}

newgame.addEventListener("click", function(){
// function hardl(){
  easylevel.classList.remove("selected");
  hardlevel.classList.add("selected");
  result.src="finish-flag.png";
  head1.style.backgroundColor="rgb(97, 168, 230)";
  colors = ganaratcolor(6);
  pickedcolor=colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.display="block";  
    squares[i].style.backgroundColor=colors[i];    
  }
  colordispla.innerText=pickedcolor;
})

hardlevel.addEventListener("click",function(){
  hardlevel.classList.add("selected");
  easylevel.classList.remove("selected");
  result.src="finish-flag.png";
  head1.style.backgroundColor="rgb(97, 168, 230)";
  colors = ganaratcolor(6);
  pickedcolor=colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.display="inline-block";  
    squares[i].style.backgroundColor=colors[i];    
  }
  colordispla.innerText=pickedcolor;
});

easylevel.addEventListener("click",function(){
  easylevel.classList.add("selected");
  hardlevel.classList.remove("selected");
  result.src="finish-flag.png";
  head1.style.backgroundColor="rgb(97, 168, 230)";
  colors = ganaratcolor(3);
  pickedcolor=colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < squares.length ; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor=colors[i];  
    }else{
      squares[i].style.display="none";  
    } 
  }
  colordispla.innerText=pickedcolor;


  // newgame.addEventListener("click", easyl);
})

