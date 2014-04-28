#pragma strict
var GFX : Transform;
var ThrustTL : Transform;
var ThrustTR : Transform;
var ThrustBR : Transform;
var ThrustBL : Transform;

var Debris1 : Transform;
var Debris2 : Transform;
var Debris3 : Transform;
var Debris4 : Transform;
var Debris5 : Transform;

var deprisSpawn : Transform;

public var Toughness : float = 2.7;
public var thrustForce : float = 10;
public var thrustFuel : float = 240;
public var emptyMass : float = 3;
private var rollFeed : float = 0;

function Start () {
ThrustTL.active = false;
ThrustTR.active = false;
ThrustBR.active = false;
ThrustBL.active = false;

ThrustTL.constantForce.relativeForce.z = -thrustForce;
ThrustTR.constantForce.relativeForce.z = -thrustForce;
ThrustBR.constantForce.relativeForce.z = -thrustForce;
ThrustBL.constantForce.relativeForce.z = -thrustForce;
}

function FixedUpdate () {

if (Launch.launch == 1){
	rigidbody.isKinematic = false;
	}
rigidbody.drag = Gravity.aDrag;
rigidbody.mass = ((thrustFuel / 60) + emptyMass);	

if (thrustFuel > 0){

	rollFeed = BasicControl.rollDir;
	
	if (rollFeed == 1){
		thrustFuel = (thrustFuel - .04);
		ThrustTL.active = true;
		ThrustBR.active = true;
		ThrustBL.active = false;
		ThrustTR.active = false;
		}
	else if (rollFeed == 2){
		thrustFuel = (thrustFuel - .04);
		ThrustTR.active = true;
		ThrustBL.active = true;
		ThrustBR.active = false;
		ThrustTL.active = false;
		}
	}
else {
	rollFeed = 0;
	}
	
	if (rollFeed == 0){
		ThrustTL.active = false;
		ThrustTR.active = false;
		ThrustBR.active = false;
		ThrustBL.active = false;
		}



}
function OnMouseEnter () {
	
	GFX.GetComponent(SpriteRenderer).color = Color.cyan;

}
function OnMouseExit () {
	
	GFX.GetComponent(SpriteRenderer).color = Color.white;
	
}

function OnMouseUp () {
	if (Launch.launch == 0){
		Remove ();
		}
}

function Remove () {
	Destroy (gameObject);
}
function Kill (){
	var debrisNum = Random.Range(2, 5);

	for (var i = 0; i < debrisNum; i++){
		var debrisType = Random.Range(1, 5);
			if (debrisType == 1){
				deprisSpawn = Debris1;
				}
			else if (debrisType == 2){
				deprisSpawn = Debris2;
				}
			else if (debrisType == 3){
				deprisSpawn = Debris3;
				}
			else if (debrisType == 4){
				deprisSpawn = Debris4;
				}
			else if (debrisType == 5){
				deprisSpawn = Debris5;
				}	
        Instantiate(deprisSpawn, transform.position, transform.rotation);
        var dbr = Instantiate(deprisSpawn, transform.position, transform.rotation);
        	dbr.rigidbody.velocity = gameObject.rigidbody.velocity;
		}
		Destroy (gameObject);
}

function OnCollisionEnter(collision : Collision) {
		if (collision.relativeVelocity.magnitude > Toughness){
			Kill ();
			}
}