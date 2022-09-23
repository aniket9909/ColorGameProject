// var colors = [
//   "rgb(255, 0, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(255, 255, 0)"
// ];
var colors = ganaratcolor(6);
var squares=document.querySelectorAll(".square");
var pickedcolor=colors[Math.floor(Math.random() * colors.length)];
var colordispla=document.getElementById("colordisplay");
var result =document.getElementById("result");
var head1 = document.querySelector("h1");
var newgame=document.getElementById("newgame");
var hardlevel = document.getElementsByClassName("btn1");
var easylevel = document.getElementsByClassName("btn2");
var eayssquare=document.querySelectorAll("#easysquare");

colordispla.innerText=pickedcolor;



  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
      if (this.style.backgroundColor === pickedcolor) {
        // alert("right");
        result.textContent="right";
        newgame.textContent="Play Again?";
        colorchanges(pickedcolor);
        head1.style.backgroundColor=this.style.backgroundColor;
      }else{
        result.textContent="wrong";
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

newgame.addEventListener("click",function(){
  // alert("new game start");
  // location.reload();
  head1.style.backgroundColor="rgb(97, 168, 230)";
  colors = ganaratcolor(6);
  pickedcolor=colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];    
  }
  colordispla.innerText=pickedcolor;
});

hardlevel.addEventListener("click",function(){
  easylevel.classList.add(".selected");
});

easylevel.addEventListener("click",function(){
  colors = ganaratcolor(3);
  easylevel.classList.add(".selected");
  pickedcolor=colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < squares.length ; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor=colors[i];  
    }else{
      squares[i].style.display=none;  
    } 
  }
  colordispla.innerText=pickedcolor;
})