#pragma strict

private var rotationSpeed : float = 80;
static var isInputEnabled : boolean = false;
var cubeType : int;
var gameObjectRedSide : GameObject;
var gameObjectBlueSide : GameObject;
var gameObjectOrrangeSide : GameObject;
var gameObjectGreenSide : GameObject;
var gameObjectYellowSide : GameObject;
var gameObjectPurpleSide : GameObject;

var bumpMapRed : Texture;
var bumpMapBlue : Texture;
var bumpMapYellow : Texture;
var bumpMapGreen : Texture;
var bumpMapPurple : Texture;
var bumpMapOrrange : Texture;

function Start () {
	print("NBS _ Starting Function Called");

}

function Update () {
	if(maincuberotate.stopRotating){
		transform.Rotate(-rotationSpeed * Time.deltaTime,0,0);
	}
	
}


function ConvertColor (r : int, g : int, b : int, a : int) : Color {
    return Color(r/255.0, g/255.0, b/255.0, a/255.0);
}

function OnMouseDown () {
	print("NBS _ Mouse Down is Working");
	if(isInputEnabled){
		
		if(cubeType == 1){
			
			if(maincuberotate.prevState == 1){
				ColorTheRespectiveSide(1,1);
			}else if(maincuberotate.prevState == 3){
				ColorTheRespectiveSide(1,2);
			}else if(maincuberotate.prevState == 5){
				ColorTheRespectiveSide(1,3);
			}else if(maincuberotate.prevState == 7){
				ColorTheRespectiveSide(1,4);
			}	
			
		}else if(cubeType == 2){
			
			if(maincuberotate.prevState == 1){
				ColorTheRespectiveSide(2,1);
			}else if(maincuberotate.prevState == 3){
				ColorTheRespectiveSide(2,2);
			}else if(maincuberotate.prevState == 5){
				ColorTheRespectiveSide(2,3);
			}else if(maincuberotate.prevState == 7){
				ColorTheRespectiveSide(2,4);
			}
			
		}else if(cubeType == 3){
			
			if(maincuberotate.prevState == 1){
				ColorTheRespectiveSide(3,1);
			}else if(maincuberotate.prevState == 3){
				ColorTheRespectiveSide(3,2);
			}else if(maincuberotate.prevState == 5){
				ColorTheRespectiveSide(3,3);
			}else if(maincuberotate.prevState == 7){
				ColorTheRespectiveSide(3,4);
			}
			
		}else if(cubeType == 4){
			
			if(maincuberotate.prevState == 1){
				ColorTheRespectiveSide(4,1);
			}else if(maincuberotate.prevState == 3){
				ColorTheRespectiveSide(4,2);
			}else if(maincuberotate.prevState == 5){
				ColorTheRespectiveSide(4,3);
			}else if(maincuberotate.prevState == 7){
				ColorTheRespectiveSide(4,4);
			}
			
		}else if(cubeType == 5){
			
			if(maincuberotate.prevState == 1){
				ColorTheRespectiveSide(5,1);
			}else if(maincuberotate.prevState == 3){
				ColorTheRespectiveSide(5,2);
			}else if(maincuberotate.prevState == 5){
				ColorTheRespectiveSide(5,3);
			}else if(maincuberotate.prevState == 7){
				ColorTheRespectiveSide(5,4);
			}
			
		}else if(cubeType == 6){
			
			if(maincuberotate.prevState == 1){
				ColorTheRespectiveSide(6,1);
			}else if(maincuberotate.prevState == 3){
				ColorTheRespectiveSide(6,2);
			}else if(maincuberotate.prevState == 5){
				ColorTheRespectiveSide(6,3);
			}else if(maincuberotate.prevState == 7){
				ColorTheRespectiveSide(6,4);
			}
		}
		
		maincuberotate.stopRotating = false;
		isInputEnabled = false;
		checkGameWiningCondition();
	}
}


function ColorTheRespectiveSide(colorCode : int , side : int){

	if(side == 1){//blue
		
		if(colorCode == 1){
		GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMapRed);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMapYellow);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMapGreen);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMapPurple);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMapBlue);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("blue").renderer.material.SetTexture("_MainTex", bumpMapOrrange);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
	
	}else if(side == 2){//yellow
	
		if(colorCode == 1){
		GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMapRed);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMapYellow);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMapGreen);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMapPurple);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMapBlue);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("yellow").renderer.material.SetTexture("_MainTex", bumpMapOrrange);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
		
	}else if(side == 3){//green
	
		if(colorCode == 1){
		GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMapRed);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMapYellow);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMapGreen);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMapPurple);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMapBlue);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("green").renderer.material.SetTexture("_MainTex", bumpMapOrrange);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
	
	}else if(side == 4){//purple
		
		if(colorCode == 1){
		GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMapRed);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(247, 28, 1, 255);//red
		}else if(colorCode == 2){
			GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMapYellow);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255, 255, 0, 255);//yellow
		}else if(colorCode == 3){
			GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMapGreen);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(40,212,92, 255);//green
		}else if(colorCode == 4){
			GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMapPurple);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(198, 88, 198, 255);//purple
		}else if(colorCode == 5){
			GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMapBlue);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(0,194,255, 255);//blue
		}else if(colorCode == 6){
			GameObject.Find("purple").renderer.material.SetTexture("_MainTex", bumpMapOrrange);
			//GameObject.Find("blue").renderer.material.color = ConvertColor(255,152,46, 255);//orrange
		}
		
	}

}

function checkGameWiningCondition(){

	print("inputed color ^^^^ " + cubeType);
	print("expected color ^^^^ " + maincuberotate.level1Array[maincuberotate.sideToBeDetected-2]);
	if(cubeType != maincuberotate.level1Array[maincuberotate.sideToBeDetected-2]){
		print("you loose &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		Application.LoadLevel("loose");
	}else{
		print("you win &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		if(maincuberotate.applicationlevel == 1 && maincuberotate.sideToBeDetected == 7){
			Application.LoadLevel("win");
		}else if(maincuberotate.applicationlevel == 2 && maincuberotate.sideToBeDetected == 9){
			Application.LoadLevel("win");
		}
	}

	
}