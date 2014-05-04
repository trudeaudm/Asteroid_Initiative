#pragma strict
public var isControlPart : float = 0;
public var test : float;
var part : Transform;
static var placeMe : Transform;
static var controlPartActive : float;
static var cmdTrue : float = 0;

function Start () {
renderer.material.color = Color.black;
}
function update (){
test = controlPartActive;
}
function OnMouseEnter () {
	
	renderer.material.color = Color.green;

}
function OnMouseExit () {
	
	renderer.material.color = Color.black;
	
}

function OnMouseUp () {

placeMe = part;	
if (isControlPart == 1){
controlPartActive = 1;
	if (cmdTrue == 0){
		var addedCMD = Instantiate(PartButton.placeMe, transform.position, transform.rotation);
		addedCMD.position.x = transform.position.x + 1;
		cmdTrue = 1;
		CamOrient.camPosition = addedCMD.gameObject;
		}
}
else {
controlPartActive = 0;
}


	
}



