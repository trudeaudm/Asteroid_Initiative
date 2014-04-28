#pragma strict
public var engPower : float = 1;
public var burnTime : float = 5;
var GFX : Transform;
var engineThrust : float = 0;
var emit : Transform;
//var emitSmoke : Transform;

var aaudio : AudioSource;

public var flameRate : float = 70;
public var Toughness : float = 3;

public var engIgnite : float = 0;
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
	emit.active = true;

	
rigidbody.drag = Gravity.aDrag;

if (BasicControl.engSetting > 0){
	engIgnite = engIgnite + 1;
}
else if (engIgnite > 0){
	engIgnite = engIgnite + 1;
}
var burnC = burnTime * 50;
engineThrust = engPower * 100;
if (engIgnite > 1 && engIgnite < burnC){
	rigidbody.AddRelativeForce(Vector3.up * engineThrust);
	Effects ();
}
else{
	emit.particleSystem.emissionRate = 0;
	aaudio.volume = 0;
	}	
}
}

function Effects () {
	emit.particleSystem.emissionRate = flameRate;
	aaudio.volume = 1;
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