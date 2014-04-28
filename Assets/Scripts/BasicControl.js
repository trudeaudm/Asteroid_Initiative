#pragma strict
static var throttle = 0; // throttle for engine
static var rollDir : float = 0;
public var Toughness : float = 4;

var rWheelPwr : float = 2;

static var engSetting : float = 0;


var Debris1 : Transform;
var Debris2 : Transform;
var Debris3 : Transform;
var Debris4 : Transform;
var Debris5 : Transform;

var deprisSpawn : Transform;

function Start () {

}

function FixedUpdate () {

if (Launch.launch == 1){
	rigidbody.isKinematic = false;
	}
	else {
	rigidbody.isKinematic = true;
	}

	rigidbody.drag = Gravity.aDrag/1.2;
	
	if (throttle < 100){
		if (Input.GetKey(KeyCode.W)){
			throttle = (throttle +2);
		}
	}
	if (throttle > 0){
		if (Input.GetKey(KeyCode.S)){
			throttle = (throttle -2);
		}
	}
	engSetting = throttle;
	
//Reaction Wheel control for command module
	if (Input.GetAxis ("Horizontal")){
    	rigidbody.AddRelativeTorque(Vector3.forward * -rWheelPwr * Input.GetAxis ("Horizontal"));
   	}
//Signals for turning controls fed to RCS and gimbal systems
	if (Input.GetKey(KeyCode.A)){
		rollDir = 1;
	}
	else if (Input.GetKey(KeyCode.D)){
		rollDir = 2;
	}
	else {
		rollDir = 0;
	}
	
	

}
function OnCollisionEnter(collision : Collision) {
		if (collision.relativeVelocity.magnitude > Toughness){
			Kill ();
			}
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
        var dbr = Instantiate(deprisSpawn, transform.position, transform.rotation);
        	dbr.rigidbody.velocity = gameObject.rigidbody.velocity;
		}
		gameObject.active = false;
}