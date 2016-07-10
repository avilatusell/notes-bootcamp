function rockPaperScissors(choice2){

	var choice1=computerChoice();

	if(choice1==='ROCK' && choice2==='SCISSORS'){
        return "ROCK wins!";
	}else if(choice1==='ROCK' && choice2==='PAPER'){
	    return "PAPER wins!";
	}else if(choice1==='PAPER' && choice2==='ROCK'){
	    return "PAPER wins!";
	}else if(choice1==='PAPER' && choice2==='SCISSORS'){
	    return "SCISSORS wins!";
	}else if(choice1==='SCISSORS' && choice2==='PAPER'){
	    return "SCISSORS wins!";
	}else if(choice1==='SCISSORS' && choice2==='ROCK'){
	    return "ROCK wins!";
	}else if(choice1===choice2){
		return "tie!";
	}

	return "Please enter only ROCK,SCISSORS,PAPER";
}

function computerChoice(){

	var numRandom = Math.floor((Math.random() * 100) + 1);

	var randomChoice="";

    if(numRandom>=1 && numRandom<=33){
		randomChoice='ROCK';
	}else if(numRandom>=34 && numRandom<=66){
		randomChoice='PAPER';
	}else{
		randomChoice='SCISSORS';
	}

	return randomChoice;
}