#pragma strict

private var ray : Ray;
private var hit : RaycastHit;


function Start () {

}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray,hit)){
			if(hit.transform.name == "PLAY_GAME"){
				Application.LoadLevel("planecubescene");
			}else if(hit.transform.name == "playAgain"){
				Application.LoadLevel("planecubescene");
			}else if(hit.transform.name == "mainMenue"){
				Application.LoadLevel("start");
			}else if(hit.transform.name == "MainMenue"){
				Application.LoadLevel("start");
			}else if(hit.transform.name == "NextLevel"){
			
				Application.LoadLevel("planecubescene");
				
			}
		}
	}
}