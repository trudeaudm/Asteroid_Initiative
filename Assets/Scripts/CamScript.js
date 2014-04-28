#pragma strict

var distanceMin = .5;
var distanceMax = 400.0;
var distanceInitial = 10;
private var scrollSpeed : float;
private var distanceCurrent = distanceInitial;

function Start () {

}

function FixedUpdate () {
		
 		var SizeSet = camera.orthographicSize - (Input.GetAxis("Mouse ScrollWheel") * scrollSpeed);
 		
		scrollSpeed = SizeSet * 2;
		
		camera.orthographicSize = Mathf.Clamp(SizeSet, distanceMin, distanceMax);

}