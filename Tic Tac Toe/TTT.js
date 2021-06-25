function handleClick(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9,fin;
    fin=0;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;

    // X Win Conditions
    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }

    // O Win Conditions
    if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert('Player O won');
    }
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
    }
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
    }
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        document.getElementById('result').innerHTML = "Player O won";
        fin=1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }
    //Tie Condition
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
            (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
            (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
            
            document.getElementById('result').innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else{
        if(flag==1 && fin==0)
        {
            document.getElementById('result').innerHTML="Player X Turn"
        }
        else if(flag==0 && fin==0){
            document.getElementById('result').innerHTML="Player O Turn"
        }
    }
}

let flag=1;
function buttonClick1(){
    if (flag == 1){
        document.getElementById("b1").value="X";
        document.getElementById("b1").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function buttonClick2(){
    if (flag == 1){
        document.getElementById("b2").value="X";
        document.getElementById("b2").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function buttonClick3(){
    if (flag == 1){
        document.getElementById("b3").value="X";
        document.getElementById("b3").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
function buttonClick4(){
    if (flag == 1){
        document.getElementById("b4").value="X";
        document.getElementById("b4").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function buttonClick5(){
    if (flag == 1){
        document.getElementById("b5").value="X";
        document.getElementById("b5").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function buttonClick6(){
    if (flag == 1){
        document.getElementById("b6").value="X";
        document.getElementById("b6").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function buttonClick7(){
    if (flag == 1){
        document.getElementById("b7").value="X";
        document.getElementById("b7").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function buttonClick8(){
    if (flag == 1){
        document.getElementById("b8").value="X";
        document.getElementById("b8").disabled = true;
        flag =0;
    }
    else{
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function buttonClick9(){
    if (flag == 1){
        document.getElementById("b9").value="X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
function resetButton()
{
    location.reload();
    document.getElementById("b1").value='';
    document.getElementById("b2").value='';
    document.getElementById("b3").value='';
    document.getElementById("b4").value='';
    document.getElementById("b5").value='';
    document.getElementById("b6").value='';
    document.getElementById("b7").value='';
    document.getElementById("b8").value='';
    document.getElementById("b9").value='';
    window.alert("Game Reset Done!")
}