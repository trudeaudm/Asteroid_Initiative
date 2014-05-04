#pragma strict
//var Player : Transform;
var World : Transform;
var Cam : Transform;
var Orient : Transform;
var home : GameObject;
static var camPosition : GameObject;
var camStyle : float = 1;
function Start () {
camPosition = home;
}

function Update () {

		if (Input.GetKeyDown(KeyCode.V)){
			if (camStyle == 1){
				camStyle = 2;
				}
			else if (camStyle == 2){
				camStyle = 3;
				}
			else if (camStyle == 3){
				camStyle = 1;
				}
		}
	// Early out if we don't have a target
	if (!camPosition){
		camPosition = home;
	}
var camloc = camPosition.GetComponent(Transform);
Cam.position = camloc.position;
Cam.position.z = -10;


	if (camStyle == 2){
		Cam.rotation = camloc.rotation;
	}
	else if (camStyle == 3){
			var rotate = Quaternion.LookRotation(camloc.position - World.position);
			rotate.eulerAngles = Vector3(0, 0, -rotate.eulerAngles.x);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * 4);
		Cam.rotation = Orient.rotation;
	}
	else 
	{
		Cam.rotation = World.rotation;
	}
	
	
	

}