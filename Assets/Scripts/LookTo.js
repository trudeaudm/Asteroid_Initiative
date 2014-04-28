#pragma strict
var LookTo : Transform;
var LookTo1 : Transform;
var LookTo2 : Transform;
var LookTo3 : Transform;
var Active : Transform;
var text1 : GameObject;
var tabNum	: float = 0;

function Start () {
tabNum = 0;
LookTo = LookTo1;
}

function FixedUpdate () {
	if (!LookTo){
		LookTo = LookTo1;
		}
if (AsteroidController.astSpawn == 0){
	LookTo3 = GameObject.FindWithTag ("Asteroid").transform;
}
var rotate = Quaternion.LookRotation(LookTo.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * 20);
	
if (Input.GetKeyDown(KeyCode.Tab)){

	if (tabNum == 0){
		Active.active = true;
		LookTo = LookTo1;
		tabNum = 1;
		}
	else if (tabNum == 1){
		LookTo = LookTo2;
		tabNum = 2;
		}
	else if (tabNum == 2){ 
		LookTo = LookTo3;
		tabNum = 3;
		}
	else if (tabNum == 3){
		tabNum = 0;
		Active.active = false;
		}	
		text1.GetComponent(TextMesh).text = LookTo.name;
}


	
	
		
			
					
}





