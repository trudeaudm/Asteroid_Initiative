#pragma strict
var trash : GameObject[];
var player : Transform;
var spawn : Transform;
var menus : Transform;

var nodes : GameObject[];

function OnMouseEnter () {
	
	renderer.material.color = Color.green;

}
function OnMouseExit () {
	
	renderer.material.color = Color.white;
	
}

function OnMouseUp () {
menus.active = true;
Launch.launch = 0;
TankControl.fuelAmt = 0;
BasicControl.throttle = 0;



	trash =  GameObject.FindGameObjectsWithTag ("SPart");
 
    for(var i = 0 ; i < trash.length ; i ++)
        Destroy(trash[i]);
	player.active = true;
	player.position = spawn.position;
	player.rotation = spawn.rotation;

//Application.LoadLevel(0);	



	
}