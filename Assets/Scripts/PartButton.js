#pragma strict

var part : Transform;
static var placeMe : Transform;

function Start () {
renderer.material.color = Color.black;
}

function OnMouseEnter () {
	
	renderer.material.color = Color.green;

}
function OnMouseExit () {
	
	renderer.material.color = Color.black;
	
}

function OnMouseUp () {

placeMe = part;	



	
}



