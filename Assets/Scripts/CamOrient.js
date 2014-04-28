#pragma strict
var Player : Transform;
var World : Transform;
var Cam : Transform;
var Orient : Transform;
var camPosition : Transform;
var camStyle : float = 1;
function Start () {

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
	if (!Cam)
		return;	
	if (!camPosition)
		return;		
Cam.position = camPosition.position;


	if (camStyle == 2){
		Cam.rotation = camPosition.rotation;
	}
	else if (camStyle == 3){
			var rotate = Quaternion.LookRotation(Player.position - World.position);
			rotate.eulerAngles = Vector3(0, 0, -rotate.eulerAngles.x);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * 4);
		Cam.rotation = Orient.rotation;
	}
	else 
	{
		Cam.rotation = World.rotation;
	}
	
	
	

}