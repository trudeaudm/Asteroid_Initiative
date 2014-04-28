
var partMain : Transform;


function Start () {


}
function Update (){
if (Launch.launch == 0){
	renderer.enabled = true;
	}
else if (Launch.launch == 1){
	renderer.enabled = false;
	}
}
function OnMouseEnter () {
	
	GetComponent(SpriteRenderer).color = Color.green;

}
function OnMouseExit () {
	
	GetComponent(SpriteRenderer).color = Color.white;
	
}

function OnMouseUp () {


	var addedPart = Instantiate(PartButton.placeMe, transform.position, transform.rotation);	
	addedPart.GetComponent(FixedJoint).connectedBody = partMain.rigidbody;
	//addedPart.fixedJoint.connectedBody = partMain;
}
