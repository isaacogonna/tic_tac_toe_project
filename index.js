function myGame(){
    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    let C = document.getElementById("C").value;
    let D = document.getElementById("D").value;
    let E = document.getElementById("E").value;
    let F = document.getElementById("F").value;
    let G = document.getElementById("G").value;
    let H = document.getElementById("H").value;
    let I = document.getElementById("I").value;
    

    if ((A == 'x' || A == 'x') && (B == 'X' || B == 'X') && (C == 'X' || C == 'X')) {
    document.getElementById('print').innerHTML = "Player X won";

    document.getElementById("D").disabled = true;
    document.getElementById("E").disabled = true;
    document.getElementById("F").disabled = true;
    document.getElementById("G").disabled = true;
    document.getElementById("H").disabled = true;
    document.getElementById("I").disabled = true;
    console.log("player X won");

    }else  if ((A == 'x' || A == 'x') && (D == 'X' || D == 'X') && (G == 'X' || G == 'X')) {
    document.getElementById('print').innerHTML = "Player X won";

    document.getElementById("B").disabled = true;
    document.getElementById("E").disabled = true;
    document.getElementById("F").disabled = true;
    document.getElementById("C").disabled = true;
    document.getElementById("H").disabled = true;
    document.getElementById("I").disabled = true;
    console.log("player X won");
  
    }else if ((C == 'x' || C == 'X') && (F == 'X' || F == 'X') && (I == 'X' || I == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
    
        document.getElementById("D").disabled = true;
        document.getElementById("E").disabled = true;
        document.getElementById("A").disabled = true;
        document.getElementById("G").disabled = true;
        document.getElementById("H").disabled = true;
        document.getElementById("B").disabled = true;
        console.log("player X won");
    }else if ((G == 'x' || G == 'X') && (H == 'X' || H == 'X') && (I == 'X' || I == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
    
        document.getElementById("D").disabled = true;
        document.getElementById("E").disabled = true;
        document.getElementById("A").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("F").disabled = true;
        document.getElementById("B").disabled = true;
        console.log("player X won");
    }else if ((B == 'x' || B == 'X') && (E == 'X' || E == 'X') && (H == 'X' || H == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
    
        document.getElementById("D").disabled = true;
        document.getElementById("F").disabled = true;
        document.getElementById("A").disabled = true;
        document.getElementById("G").disabled = true;
        document.getElementById("I").disabled = true;
        document.getElementById("C").disabled = true;
        console.log("player X won");
    }else if ((D == 'x' || D == 'x') && (E == 'X' || E == 'X') && (F == 'X' || F == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
    
        document.getElementById("C").disabled = true;
        document.getElementById("I").disabled = true;
        document.getElementById("A").disabled = true;
        document.getElementById("G").disabled = true;
        document.getElementById("H").disabled = true;
        document.getElementById("B").disabled = true;
        console.log("player X won");
    }else if ((A == 'x' || A == 'x') && (E == 'X' || E == 'X') && (I == 'X' || I == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
    
        document.getElementById("D").disabled = true;
        document.getElementById("F").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("G").disabled = true;
        document.getElementById("H").disabled = true;
        document.getElementById("B").disabled = true;
        console.log("player X won");
    }else if ((C == 'x' || C == 'X') && (E == 'X' || E == 'X') && (G == 'X' || G == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
    
        document.getElementById("D").disabled = true;
        document.getElementById("I").disabled = true;
        document.getElementById("A").disabled = true;
        document.getElementById("F").disabled = true;
        document.getElementById("H").disabled = true;
        document.getElementById("B").disabled = true;
        console.log("player X won");



        

    }else if ((A == 'O') && (B == 'O') && (C == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
    
        document.getElementById("D").disabled = true;
        document.getElementById("E").disabled = true;
        document.getElementById("F").disabled = true;
        document.getElementById("G").disabled = true;
        document.getElementById("H").disabled = true;
        document.getElementById("I").disabled = true;
        console.log("player 0 won");
    
        }else  if ((A == 'O') && (D == 'O') && (G == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
    
        document.getElementById("B").disabled = true;
        document.getElementById("E").disabled = true;
        document.getElementById("F").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("H").disabled = true;
        document.getElementById("I").disabled = true;
        console.log("player 0 won");
      
        }else if ((C == 'O') && (F == 'O') && (I == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
        
            document.getElementById("D").disabled = true;
            document.getElementById("E").disabled = true;
            document.getElementById("A").disabled = true;
            document.getElementById("G").disabled = true;
            document.getElementById("H").disabled = true;
            document.getElementById("B").disabled = true;
            console.log("player 0 won");
        }else if ((G == 'O') && (H == 'O') && (I == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
        
            document.getElementById("D").disabled = true;
            document.getElementById("E").disabled = true;
            document.getElementById("A").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("F").disabled = true;
            document.getElementById("B").disabled = true;
            console.log("player 0 won");
        }else if ((B == 'O') && (E == 'O') && (H == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
        
            document.getElementById("D").disabled = true;
            document.getElementById("F").disabled = true;
            document.getElementById("A").disabled = true;
            document.getElementById("G").disabled = true;
            document.getElementById("I").disabled = true;
            document.getElementById("C").disabled = true;
            console.log("player 0 won");
        }else if ((D == 'O') && (E == 'O') && (F == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
        
            document.getElementById("C").disabled = true;
            document.getElementById("I").disabled = true;
            document.getElementById("A").disabled = true;
            document.getElementById("G").disabled = true;
            document.getElementById("H").disabled = true;
            document.getElementById("B").disabled = true;
            console.log("player 0 won");
        }else if ((A == 'O') && (E == 'O') && (I == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
        
            document.getElementById("D").disabled = true;
            document.getElementById("F").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("G").disabled = true;
            document.getElementById("H").disabled = true;
            document.getElementById("B").disabled = true;
            console.log("player 0 won");
        }else if ((C == 'O') && (E == 'O') && (G == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
        
            document.getElementById("D").disabled = true;
            document.getElementById("I").disabled = true;
            document.getElementById("A").disabled = true;
            document.getElementById("F").disabled = true;
            document.getElementById("H").disabled = true;
            document.getElementById("B").disabled = true;
            console.log("player 0 won");


        } else if ((A == 'X' || A == '0') && (B == 'X'
        || B == '0') && (C == 'X' || C== '0') &&
        (D == 'X' || D == '0') && (E == 'X' ||
        E == '0') && (F== 'X' || F == '0') &&
        (G == 'X' || G == '0') && (H == 'X' ||
        H == '0') && (I == 'X' || I == '0')) {
            document.getElementById('print').innerHTML = "Match Tie";
            console.log('Match Tie');
    }
    else {
 
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
            }
    }
}

function my_Game(){
    location.reload();
    document.getElementById("A").value = '';
    document.getElementById("B").value = '';
    document.getElementById("C").value = '';
    document.getElementById("D").value = '';
    document.getElementById("E").value = '';
    document.getElementById("F").value = '';
    document.getElementById("G").value = '';
    document.getElementById("H").value = '';
    document.getElementById("I").value = '';
}



flag = 1;
function myGame_1(){
    if(flag == 1){
        document.getElementById("A").value = "X";
        document.getElementById("A").disabled = true; 
        flag = 0;
    }else{
        document.getElementById("A").value = "O";
        document.getElementById("A").disabled = true;
        flag = 1;
    }
}
function myGame_2(){
    if(flag == 1){
        document.getElementById("B").value = "X";
        document.getElementById("B"),disabled = true;
        flag = 0;
    }else {
        document.getElementById("B").value = "O";
        document.getElementById("B").disabled = true;
        flag = 1;
    }
}

function myGame_3(){
    if(flag == 1){
        document.getElementById("C").value = "X";
        document.getElementById("C").disabled = true;
        flag = 0;
    }else {
        document.getElementById("C"),value = "O";
        document.getElementById("C").disabled = true;
        flag = 1;
    }
}
function myGame_4(){
    if(flag == 1){
        document.getElementById("D").value = "X";
        document.getElementById('D').disabled = true;
        flag = 0;
    }else{
        document.getElementById("D").value = "O";
        document.getElementById("D").disabled = true;
        flag = 1;
    }
   
}
function myGame_5(){
    if(flag == 1){
        document,getElementById("E").value = "X";
        document.getElementById("E").disabled = true;
        flag = 0;
    }else{
        document.getElementById("E").value = "O";
        document.getElementById("E").disabled = true;
        flag = 1;
    }
}
function myGame_6(){
    if(flag == 1){
        document.getElementById("F").value = "X";
        document.getElementById("F").disabled = true;
        flag = 0;
    }else{
        document.getElementById("F").value = "O";
        document.getElementById("F").disabled = true;
        flag = 1;
    }
    
}
function myGame_7(){
    if(flag == 1){
        document.getElementById("G").value = "X";
        document.getElementById("G").disabled = true;
        flag = 0; 
    }else{
        document.getElementById("G").value = "O";
        document.getElementById("G").disabled = true;
        flag = 1;
    }
}
function myGame_8(){
    if(flag == 1){
        document.getElementById("H").value = "X";
        document.getElementById("H").disabled = true;
        flag = 0;
    }else{
        document.getElementById("H").value = "O";
        document.getElementById("H").disabled = true;
        flag = 1;
    }
}
function myGame_9(){
    if(flag == 1){
        document.getElementById("I").value = "X";
        document.getElementById("I").disabled = true;
        flag = 0;
    }else{
        document.getElementById("I").value = "O";
        document.getElementById("I").disabled = true;
        flag = 1;
    }
    
}