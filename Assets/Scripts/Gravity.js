var pCamera : Transform;
var orbitCenter : Transform;
var orbitSpeed : float;
var rotSpeed : float;
var range : float = 10000.0;
var atmosDens : float = 0.5;
var atmosMid : float = 200;
var atmosHigh : float = 400;
var planetRadius : float = 3000;
var atMid : float;
var atRange : float;
var camDistance : float = -10000;
var GFX : Transform;
var GFXDistance : float = 1000;
static var aDrag : float = 0;
var dispDrag : float;


 function start (){
 
 }

function FixedUpdate () {
	// Early out if we don't have a target
	if (!pCamera){
		pCamera = CamOrient.camPosition.transform;
}
//Orbit around an object
	transform.RotateAround (orbitCenter.position, Vector3.forward, orbitSpeed * Time.deltaTime);
//Rotate around self
	transform.Rotate(Vector3.forward * Time.deltaTime * rotSpeed);
//Hide Graphics for planet when at a distance
	camDistance = Vector3.Distance(pCamera.transform.position, transform.position);	
	if (camDistance > 1000){
		GFX.active = false;
	}
	else if (camDistance <= GFXDistance){
		GFX.active = true;
	}
//Set Atmosphere Ranges	
		atMid = (planetRadius + atmosMid);
		atRange = (planetRadius + atmosHigh);

//Gravity applied to all non-kinematic rigidbodies within range

	var cols : Collider[] = Physics.OverlapSphere(transform.position, range);
	var rbs : Array = new Array();
	for (var c = 0; c<cols.length;c++) {
		if (cols[c].attachedRigidbody && cols[c].attachedRigidbody != rigidbody) {
			var breaking :boolean = false;
			for (var r = 0;r<rbs.length;r++) {
				if (cols[c].attachedRigidbody == rbs[r]) {
					breaking=true;
					break;
				}
			}
			if (breaking) continue;
			rbs.Add(cols[c].attachedRigidbody);
			var offset : Vector3 = (transform.position - cols[c].transform.position);
			var mag: float = offset.magnitude;
			
			cols[c].attachedRigidbody.AddForce(offset/mag/mag * rigidbody.mass * cols[c].attachedRigidbody.mass);
					
				if (mag <= atRange && mag > atMid){
					cols[c].attachedRigidbody.drag = atmosDens - (atmosDens - (atmosDens * ((atRange - mag)/(atRange-atMid))));
					}
				else if (mag <= atMid){
					cols[c].attachedRigidbody.drag = atmosDens;
					}
				else {
					cols[c].attachedRigidbody.drag = 0;
				}	
		}
	}	
}





		

