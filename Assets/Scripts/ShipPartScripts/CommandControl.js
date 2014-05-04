#pragma strict
static var throttle = 0; // throttle for engine
static var rollDir : float = 0;
public var Toughness : float = 4;
public var playerControlled : float =1;
var rWheelPwr : float = 2;

static var engSetting : float = 0;
var home : Transform;
var target : Transform;

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
if (playerControlled == 1){
	if (Input.GetAxis ("Horizontal")){
    	rigidbody.AddRelativeTorque(Vector3.forward * -rWheelPwr * Input.GetAxis ("Horizontal"));
   	}
   	
//Drag modifier for being aerodynamic

	rigidbody.drag = rigidbody.drag - (rigidbody.drag / 3);

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
else {
target = LookTo.LookTo;
if (target == null)
			return;
var D : Vector3 = target.position - transform.position;  
var rot : Quaternion = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(D), rWheelPwr * Time.deltaTime);
transform.rotation = rot; 
transform.eulerAngles = new Vector3(0, 0,transform.eulerAngles.z); 	
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
		Destroy (gameObject);
}
function OnMouseUp () {
	if (Launch.launch == 0){
		PartButton.cmdTrue = 0;
		Remove ();
		}
}
function Remove () {
	CamOrient.camPosition = home.gameObject;
	Destroy (gameObject);
}