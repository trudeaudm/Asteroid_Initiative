#pragma strict
public var Toughness : float = 25;

var Debris1 : Transform;
var Debris2 : Transform;
var Debris3 : Transform;
var Debris4 : Transform;
var Debris5 : Transform;

var deprisSpawn : Transform;

function Start () {
}

function FixedUpdate () {
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
		AsteroidController.astSpawn = 1;
		Destroy (gameObject);
}



function OnCollisionEnter(collision : Collision) {
		if (collision.relativeVelocity.magnitude > Toughness){
			Kill ();
			}
}

