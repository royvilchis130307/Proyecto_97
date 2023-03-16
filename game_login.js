
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    player1_score = 0;
    player2_score = 0;

    document.getElementById("player1_name").innerHTML = player1_name + " : ";
    document.getElementById("player2_name").innerHTML = player2_name + " : ";
    document.getElementById("player1_score").innerHTML = player1_score; 
    document.getElementById("player2_score").innerHTML = player2_score; 
    document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
    document.getElementById("player_answere").innerHTML = "Turno para responder - " + player2_name ;

    window.location = "game_page.html";
} 
function send() {
   get_word = document.getElementById("word").value;
   word = get_word.tolowerCase();
   console.log("Palabra en minuscula = " + word);

   charAt
  } 

  function check() 
{ 
get_answer = document.getElementById("input_check_box").value;
answer = get.answer.tolowerCase();
console.log("Respuesta en inusculas =" + answere);
if(answwer== word)
{ 

  if(answer_turn -- "player1")
  {
    player1_score = player1_score +1;
    document.getElementsById("player1_score").innerHTML = player1_score
  } 
  else
  {
    player1_score = player2_score +1;
    document.getElementsById("player2_score").innerHTML = player1_score
  }
}
if(question_turn == player1)
{
 question_turn == player2
 document.getElementsById("player_question").innerHTML = "turno_para_preguntar -" + player2_name
}





}
