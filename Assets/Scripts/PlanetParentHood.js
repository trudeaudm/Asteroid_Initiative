#pragma strict

//var Player : Transform;

var radius : float = 500;

function Start () {
//InvokeRepeating("CheckRigidbodies", 1, 1);
}

function FixedUpdate () {

}

function CheckRigidbodies() {
//	if (!Player)
//		return;	
//var inGrav = GameObject.FindGameObjectsWithTag ("SPart");

//var Distance = Vector3.Distance(inGrav.position, transform.position);
//if (Distance < radius){
//	inGrav.parent = gameObject.transform;
//	}
//else if (Distance > radius){
//	inGrav.parent = null;
//	}
}

function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag == "SPart"){
			other.transform.parent = gameObject.transform;
			}
		if(other.gameObject.tag == "Player"){
			other.transform.parent = gameObject.transform;
			}
}
function OnTriggerExit (other : Collider) {
		if(other.gameObject.tag == "SPart"){
			other.transform.parent = null;
			}
		if(other.gameObject.tag == "Player"){
			other.transform.parent = null;
			}
}