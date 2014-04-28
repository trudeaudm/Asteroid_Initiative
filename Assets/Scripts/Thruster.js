#pragma strict
public var thrustPwr : float = 1;


function Start () {

}

function FixedUpdate () {

	   if (Input.GetAxis ("Horizontal")){
    	rigidbody.AddRelativeForce(Vector3.forward * thrustPwr * Input.GetAxis ("Horizontal"));
   }

}