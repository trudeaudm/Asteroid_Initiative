#pragma strict
var GFX : Transform;
public var emptyMass : float = 10;
static var fuelAmt : float;
public var fAmt : float = 157;
public var dispFuel : float;
public var Toughness : float = 2.7;

public var crashBChance = 40;
var bomb : Transform;
var Debris1 : Transform;
var Debris2 : Transform;
var Debris3 : Transform;
var Debris4 : Transform;
var Debris5 : Transform;

var deprisSpawn : Transform;

function Start () {
fuelAmt = fuelAmt + fAmt;
}

function FixedUpdate () {
if (Launch.launch == 1){
	rigidbody.isKinematic = false;
	}

rigidbody.drag = Gravity.aDrag;
dispFuel = fuelAmt;
rigidbody.mass = ((fuelAmt / 10) + emptyMass);


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
	var debrisNum = Random.Range(2, 4);

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
		var chance = Random.Range(1, 100);
		if (chance < crashBChance){
			Instantiate(bomb, transform.position, transform.rotation);	
			}
		Destroy (gameObject);
}

function OnCollisionEnter(collision : Collision) {
		if (collision.relativeVelocity.magnitude > Toughness){
			Kill ();
			}
}
