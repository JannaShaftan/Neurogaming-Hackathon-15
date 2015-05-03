var characterLike = 20
var friendLike = 30


function begin_game(){
	if(player is connected === true){
		console.log = ("Jannas game introduction")
		//slides play of characters, brother storms out, the story begins and the charatcer ebgins to move across the screen
	if(player is in radius of friend){
		console.log("Friend speal- Friend Johnny")
		if (player is happy){
			friendLike += 5;
			arc1();
		}else{
			friendLike -=5;
			arc1();
		}
		else{
			console.log("Follow the path to the city")
		}
	}else{
		console.log("Your almost there, follow the path!")
	}
	}else{
		console.log("Please connect game!")
	}
}

function arc1(){
//friend begins to follow character
	if(player is in radius of highway toll man){
		console.log("Highway man speal - Daniel")
		if(player is happy){
			console.log("You both pay the highwayman")
			characterLike +=5;
			//highway man is happy and they go on
			arc2();
		}else{
			console.log("You have no money, guess friend will need to pay")
			friendLike -= 5;
			characterLike -=10;
			//highway man is happy and they go on
			arc2();
		}
	}
}


function arc2(){
	//Characters stop at campfire for the night
	console.log ("Sappy love story told by friend")
	if(player is happy){
		friendLike +=5;
		//characters go to bed, game begins in the morning
		arc3();
	}else{
		friendLike -=5;
		//characters go to bed, game begins in the morning
		arc3();
	}
}

function arc3(){
	// characters travel
	if (player in radius of bad guy){
		console.log("Abondon all hope, were here to get you - Zoe/Robert")
		if(player is happy){
			console.log("Run far away!")
			friendLike += 5;
			characterLike += 5;
			//both characters run away or fight back and win/ arm band integration
			arc4();
		}else{
			console.log("Everyman for himself")
			//push friend on the ground and escape
			characterLike = 0;
			arc5();
		}
	}else{
		console.log("The adventure continues onward!")
	}
}


function arc4(){
	// both characters arrive in the city and are confronted by stanger in the market
	console.log("Are you here to save your family? Let me help you - Mathias ")
	if (person is happy){
		//you go with the character and friend stays behind
		if(friendLike > 30 && characterLike > 20){
			//friend saves you and everyone else, Woho happy ending!
		}
		else if(friendLike< 30 && characterLike >20){
			//You friend frees everyone but get trapped in the process, everyone survives but you	
		}
		else{
			// You friend comes to save everyone but Friend gets trapped, you survive and love and brother survive
		}
	}
	else{
		//you dont go with person and friend goes without you
		if(friendLike > 30 && characterLike > 20){
			//you save friend and everyone else, Woho happy ending!
		}
		else if(friendLike< 30 && characterLike >20){
			//You free everyone but get trapped in the process, everyone survives but you	
		}
		else{
			// You come to save everyone but Friend gets trapped, you survive and love and brother survive
		}
	}
}

function arc5(){
	// only you arrive in the city and are confronted by stanger in the market
	console.log("Are you here to save your family? Let me help you - Mathias ")
	if (person is happy){
		//you go with the character and are killed
		console.log("End of game everyone dead")
	}
	else{
		//you dont go with person 
		console.log("End of game you are captured and dead")
	}
}



