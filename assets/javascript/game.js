// pseudo coding
// Step 1: Attach random numbers to crystal buttons
// Step 2:  Attach a number associated with the total score number 
// Step 3:  Attach 


$(document).ready(function(){
    var redNumber, purpleNumber, pinkNumber, greenNumber, totalscore, goalscore, wins, lose;

    
    redNumber = Math.floor(Math.random()*12);
    purpleNumber = Math.floor(Math.random()*12);
    pinkNumber = Math.floor(Math.random()*12);
    greenNumber = Math.floor(Math.random()*12);
    totalscore = 0;
    goalscore = Math.floor(Math.random() * 120) + 30;
    console.log(goalscore)
    wins = 0;
    lose = 0;


    $('#button-red').attr('value', redNumber);
    $('#button-purple').attr('value', purpleNumber);
    $('#button-green').attr('value', greenNumber);
    $('#button-pink').attr('value', pinkNumber);


    $('.crystal').click(function(){
      totalscore += parseInt($(this).attr('value'));
		console.log(totalscore);
        $('.totalscoretext').text(totalscore);
    });

    $('.totalscorenum').text(goalscore);
    
    if (totalscore > 120) {
      console.log ("Lose");
    } 

    
});

// // Comment out 
// $("#button-red").attr('value', redNumber);

// // global scope
// var foo = 5;

// function danFunc() {
//     // local scope
//     foo = 2;
// }

// // danFunc();

// console.log(foo);
