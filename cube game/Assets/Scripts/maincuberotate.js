#pragma strict
/*
1 red
2 yellow
3 green
4 purple
5 blue
6 orrange


state1 Blue_
state2 Blue_Yellow
state3 Yellow
state4 Yellow Green
state5 Green
state6 Green Purple
state7 Purple
state8 Purple Blue

gameState 1 showingColors
gameState 2 showingQuestionMark1
gameState 3 waitingUserInput

*/

static var level1Array = new Array();
static var level2Array = new Array();
static var level3Array = new Array();
static var level4Array = new Array();
static var level5Array = new Array();
static var level6Array = new Array();

var bumpMap : Texture;
var bumpMap2 : Texture;
var bumpMap4 : Texture;



var gameState : int = 1;
static var applicationlevel : int = 1;
static var sidesPlaced : int = 2;
static var sideToBeDetected : int = 0;

static var stopRotating : boolean = false;

static var prev_x : float = 0.0;
static var prevState : int = 1;

function Awake(){

			//rotate a bit
			transform.Rotate(0, 0, 16);
			
			GameObject.Find("red").renderer.material.color = ConvertColor(247, 28, 1, 255);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(0,194,255, 255);
			//GameObject.Find("green").renderer.material.color = ConvertColor(40,212,92, 255);
			GameObject.Find("orrange").renderer.material.color = ConvertColor(255,152,46, 255);
			//GameObject.Find("purple").renderer.material.color = ConvertColor(198, 88, 198, 255);
			//GameObject.Find("yellow").renderer.material.color = ConvertColor(255, 255, 0, 255);
			
			//GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMap);
			
			print("MCS-Awake _ Blue Side Angle is x=" + GameObject.Find("blue").transform.rotation.x + " y=" + GameObject.Find("blue").transform.rotation.y + " z=" + GameObject.Find("blue").transform.rotation.z );

			InitializeAllValues();

			ColorTheRespectiveSide(level1Array[0],1);
			ColorTheRespectiveSide(level1Array[1],2);
			//ColorTheRespectiveSide(level1Array[2],3);
			//ColorTheRespectiveSide(level1Array[3],4);
}



function Start () {
print("MCS-Start _ Blue Side Angle is x=" + GameObject.Find("blue").transform.rotation.x + " y=" + GameObject.Find("blue").transform.rotation.y + " z=" + GameObject.Find("blue").transform.rotation.z );
}

function Update () 
{
	if(!stopRotating){
		transform.Rotate(0, 20*Time.deltaTime, 0);
	}
	//print("MCS-Update _ Blue Side Angle is x=" + GameObject.Find("blue").transform.rotation.x + " y=" + GameObject.Find("blue").transform.rotation.y + " z=" + GameObject.Find("blue").transform.rotation.z );


	var cur_x : float = GameObject.Find("blue").transform.rotation.x;
	if(cur_x < 0.0){
		 cur_x = cur_x * -1;
	}
	
	if(cur_x < 0.01){
		print("BLUE");
		if(prevState != 1){
			prevState = 1;
			ChangeState();
		}
	}else if(cur_x > 0.9902){
		print("GREEN");
		if(prevState != 5){
			prevState = 5;
			ChangeState();
		}
	}else if(cur_x > 0.70 && cur_x < 0.715){
	
		if(cur_x > prev_x){
			print("YELLOW");
			if(prevState != 3){
				prevState = 3;
				ChangeState();
			}
		}else if(cur_x < prev_x){
			print("PURPLE");
			if(prevState != 7){
				prevState = 7;
				ChangeState();
			}
		}
	
	}else if(cur_x > 0.0 && cur_x < 0.7071){
	
		if(cur_x > prev_x){
			print("BLUE YELLOW");
			if(prevState != 2){
				prevState = 2;
				ChangeState();
			}
		}else{
			print("PURPLE BLUE");
			if(prevState != 8){
				prevState = 8;
				ChangeState();
			}
		}
		
	}else{
	
		if(cur_x > prev_x){
			print("YELLOW GREEN");
			if(prevState != 4){
				prevState = 4;
				ChangeState();
			}
		}else{
			print("GREEN PURPLE");
			if(prevState != 6){
				prevState = 6;
				ChangeState();
			}
		}
		
	}
	prev_x = cur_x;


}

function ConvertColor (r : int, g : int, b : int, a : int) : Color {
    return Color(r/255.0, g/255.0, b/255.0, a/255.0);
}

function ChangeState(){
	print("***********Current State is  = " + prevState);
	if(prevState == 1 || prevState == 3   || prevState == 5 || prevState == 7){
		if(sidesPlaced < level1Array.length ){
			sidesPlaced++;
			if(prevState == 3){
				ColorTheRespectiveSide(level1Array[sidesPlaced-1],3);
			}else if(prevState == 5){
				ColorTheRespectiveSide(level1Array[sidesPlaced-1],4);
			}else if(prevState == 7){
				ColorTheRespectiveSide(level1Array[sidesPlaced-1],1);
			}else if(prevState == 1){
				ColorTheRespectiveSide(level1Array[sidesPlaced-1],2);
			}
			sideToBeDetected = 0;
		}else{
		
			if(gameState == 1){
				gameState = 2;
			}else if(gameState == 2){
				stopRotating = true;
				NewBehaviourScript.isInputEnabled = true;
			}
			
			if(prevState == 3){
				GameObject.Find("green").renderer.material.color = ConvertColor(171,159,158, 0);//blue
				GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMap2);
				sideToBeDetected++;
			}else if(prevState == 5){
				GameObject.Find("purple").renderer.material.color = ConvertColor(171,159,158, 0);//blue
				GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMap);
				sideToBeDetected++;
			}else if(prevState == 7){
				GameObject.Find("blue").renderer.material.color = ConvertColor(171,159,158, 0);//blue
				GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMap4);
				sideToBeDetected++;
			}else if(prevState == 1){
				GameObject.Find("yellow").renderer.material.color = ConvertColor(171,159,158, 0);//blue
				GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMap);
				sideToBeDetected++;
			}
			
		}
	}
}

function InitializeAllValues(){
	
		
		//level 1 with 6 stages and 1 different color
		var i :int;
		var temp : int = Random.Range(1,7);
		for(i=0;i<6;i++){	
			level1Array.Push(temp);
		}
		level1Array[Random.Range(1,7)-1]= Random.Range(1,7);
		
		//level 2 with 8 stages and 2 different color
		temp = Random.Range(1,7);
		for(i=0;i<8;i++){	
			level2Array.Push(temp);
		}
		level2Array[Random.Range(1,9)-1]= Random.Range(1,7);
		level2Array[Random.Range(1,9)-1]= Random.Range(1,7);
		
		
		//level 3 with 10 stages and 3 different color
		temp = Random.Range(1,7);
		for(i=0;i<10;i++){	
			level3Array.Push(temp);
		}
		level3Array[Random.Range(1,11)-1]= Random.Range(1,7);
		level3Array[Random.Range(1,11)-1]= Random.Range(1,7);
		level3Array[Random.Range(1,11)-1]= Random.Range(1,7);
		
		//level 4 with 12 stages and 4 different color
		temp = Random.Range(1,7);
		for(i=0;i<12;i++){	
			level4Array.Push(temp);
		}
		level4Array[Random.Range(1,13)-1]= Random.Range(1,7);
		level4Array[Random.Range(1,13)-1]= Random.Range(1,7);
		level4Array[Random.Range(1,13)-1]= Random.Range(1,7);
		level4Array[Random.Range(1,13)-1]= Random.Range(1,7);
		
		//level 5 with 14 stages and 5 different color
		temp = Random.Range(1,7);
		for(i=0;i<14;i++){	
			level5Array.Push(temp);
		}
		level5Array[Random.Range(1,15)-1]= Random.Range(1,7);
		level5Array[Random.Range(1,15)-1]= Random.Range(1,7);
		level5Array[Random.Range(1,15)-1]= Random.Range(1,7);
		level5Array[Random.Range(1,15)-1]= Random.Range(1,7);
		level5Array[Random.Range(1,15)-1]= Random.Range(1,7);
		
		//level 6 with 16 stages and 6 different color
		temp = Random.Range(1,7);
		for(i=0;i<16;i++){	
			level6Array.Push(temp);
		}
		level6Array[Random.Range(1,17)-1]= Random.Range(1,7);
		level6Array[Random.Range(1,17)-1]= Random.Range(1,7);
		level6Array[Random.Range(1,17)-1]= Random.Range(1,7);
		level6Array[Random.Range(1,17)-1]= Random.Range(1,7);
		level6Array[Random.Range(1,17)-1]= Random.Range(1,7);
		level6Array[Random.Range(1,17)-1]= Random.Range(1,7);
		
	
		//Display All Arrays
		print("LEVEL = 1");
		for (i = 0; i < level1Array.length; i++) {
    		print("level1Array[" +i + "]: " + level1Array[i]);
		}
		
		print("LEVEL = 2");
		for (i = 0; i < level2Array.length; i++) {
    		print("level2Array[" +i + "]: " + level2Array[i]);
		}
		
		print("LEVEL = 3");
		for (i = 0; i < level3Array.length; i++) {
    		print("level3Array[" +i + "]: " + level3Array[i]);
		}
		
		print("LEVEL = 4");
		for (i = 0; i < level4Array.length; i++) {
    		print("level4Array[" +i + "]: " + level4Array[i]);
		}
		
		print("LEVEL = 5");
		for (i = 0; i < level5Array.length; i++) {
    		print("level5Array[" +i + "]: " + level5Array[i]);
		}
		
		print("LEVEL = 6");
		for (i = 0; i < level6Array.length; i++) {
    		print("level6Array[" +i + "]: " + level6Array[i]);
		}
}

function ColorTheRespectiveSide(colorCode : int , side : int){

	if(side == 1){//blue
	
		if(colorCode == 1){
			GameObject.Find("blue").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("blue").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("blue").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("blue").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("blue").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("blue").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
	
	}else if(side == 2){//yellow
	
		if(colorCode == 1){
			GameObject.Find("yellow").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("yellow").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("yellow").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("yellow").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("yellow").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("yellow").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
		
	}else if(side == 3){//green
	
		if(colorCode == 1){
			GameObject.Find("green").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("green").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("green").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("green").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("green").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("green").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
	
	}else if(side == 4){//purple
		
		if(colorCode == 1){
			GameObject.Find("purple").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("purple").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("purple").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("purple").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("purple").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("purple").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
		
	}

} 