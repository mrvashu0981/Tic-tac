var turn=0;  //0==o ,1==x...
var state=[2,2,2,2,2,2,2,2,2]; //2 means blank..
var winposition=[[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
var gamestatus=true;
function ontap(e,i){      //e==element ,  i==index...
    if(state[i]==2 & gamestatus==true){
          if(turn==0){
            e.innerHTML="<img src='a.jpg'>";
            var audio=new Audio("sound.wav");
            audio.play();
            turn=1;
            state[i]=0;
            document.getElementById("h1").innerHTML="O player Turn";
            document.getElementById("h1").style.color="red";
            document.getElementById("h1").style.backgroundColor="black";
          }

    else{
        e.innerHTML="<img src='b.jpg'>";
        
        var audio=new Audio("sound1.wav");
        audio.play();
        turn=0;
        state[i]=1;
        document.getElementById("h1").innerHTML="X player Turn";
        document.getElementById("h1").style.color="blue";
    }
}
 console.log(state); 
 
 var winner=checkwin();
 if (winner==0){
    document.getElementById("h1").innerHTML="X player won";
    document.getElementById("p").style.backgroundImage="url('4A5.gif')";
    document.getElementById("p").style.backgroundRepeat = 'no-repeat';
    document.getElementById("p").style.backgroundSize = 'cover'; // Optional: adjusts the image size to cover the element
    document.getElementById("p").style.backgroundPosition = 'center';
    
    

 }

 else if(winner==1){
document.getElementById("h1").innerHTML="O player won";
document.getElementById("p").style.backgroundImage="url('4A5.gif')";
    document.getElementById("p").style.backgroundRepeat = 'no-repeat';
    document.getElementById("p").style.backgroundSize = 'cover'; // Optional: adjusts the image size to cover the element
    document.getElementById("p").style.backgroundPosition = 'center';
    
 }
 //check gameover
 var blank=0;
 for(x of state){
     blank++;
     
 }
}
if(blank==0 && winner==2){
document.getElementById("h1").innerHTML="Game Over";
}

///function for win

function checkwin(){
var win=2;
for(x of winposition){
if(state[x[0]]==state[x[1]]&&state[x[1]]==state[x[2]]&&state[x[0]]!=2){
win=state[x[0]];
gamestatus=false;
break;

}
}
return win;

}