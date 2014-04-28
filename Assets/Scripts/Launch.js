

var nodes : GameObject[];
static var launch = 0;

function Start () {
renderer.material.color = Color.black;

}


function OnMouseEnter () {
	
	renderer.material.color = Color.green;

}
function OnMouseExit () {
	
	renderer.material.color = Color.black;
	
}
function OnMouseDown () {

	launch = 1;

	
}
function OnMouseUp () {


       
     gameObject.active = false;
	
}
