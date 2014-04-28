var ship : Transform;
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
var shipDistance : float = -10000;
var GFX : Transform;
var GFXDistance : float = 1000;
static var aDrag : float = 0;
var dispDrag : float;


 

function FixedUpdate () {
	// Early out if we don't have a target
	if (!ship)
		return;

//Orbit around an object
	transform.RotateAround (orbitCenter.position, Vector3.forward, orbitSpeed * Time.deltaTime);
//Rotate around self
	transform.Rotate(Vector3.forward * Time.deltaTime * rotSpeed);
//Hide Graphics for planet when at a distance
	shipDistance = Vector3.Distance(ship.transform.position, transform.position);	
	if (shipDistance > 1000){
		GFX.active = false;
	}
	else if (shipDistance <= GFXDistance){
		GFX.active = true;
	}
//Set Atmosphere Ranges	
		atMid = (planetRadius + atmosMid);
		atRange = (planetRadius + atmosHigh);
	if (shipDistance <= atRange + 50){
		CalculateAtmosphere ();
	}

	dispDrag = aDrag;
	
//Write to the GUI
	//if (gameObject.tag == "World"){
	//	if (shipDistance <= range){
	//		GUIAlt.ALT = (shipDistance - planetRadius);
	//	}
	//	else if (shipDistance > range && shipDistance < range + 1000){
	//		GUIAlt.ALT = -10000;
	//	}
	//	else {
	//	}
	//}

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
		
				
		}
	}
	
}

function CalculateAtmosphere (){

					if (shipDistance <= atRange && shipDistance > atMid){
						aDrag = atmosDens - (atmosDens - (atmosDens * ((atRange - shipDistance)/(atRange-atMid))));
						}
					else if (shipDistance <= atMid){
						aDrag = atmosDens;
						}
					else {
						aDrag = 0;
					}




}



		

