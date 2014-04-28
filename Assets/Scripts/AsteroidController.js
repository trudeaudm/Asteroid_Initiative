#pragma strict

var asteroidSpawn : Transform;

static var astSpawn : float = 1;

var maxPos:float = 3000;
var minPos:float = 1900;

var maxVel:float = 10;
var minVel:float = -10;

function Start () {
astSpawn = 1;
}

function FixedUpdate () {



if (astSpawn == 1) {
	SpawnAst ();
	astSpawn = 0;
}

}

function SpawnAst () {
var up = Random.Range(1, 4);
if (up >=3){
	var np = 1;
	}
else if (up <=2){
	np = -1;
	}
var up1 = Random.Range(1, 4);
if (up1 >=3){
	var np1 = 1;
	}
else if (up1 <=2){
	np1 = -1;
	}
var up2 = Random.Range(1, 4);
if (up2 >=3){
	var np2 = 1;
	}
else if (up2 <=2){
	np2 = -1;
	}
var up3 = Random.Range(1, 4);
if (up3 >=3){
	var np3 = 1;
	}
else if (up3 <=2){
	np3 = -1;
	}

var astVel = Vector3(Random.Range(minVel, maxVel), Random.Range(minVel, maxVel),0);
var astPos = Vector3(Random.Range((10000+(minPos*np)),(10000+(maxPos*np1))),Random.Range(minPos*np2,maxPos*np3), 0);
var Asteroid = Instantiate(asteroidSpawn, astPos, transform.rotation);
        	Asteroid.rigidbody.velocity = astVel;



}