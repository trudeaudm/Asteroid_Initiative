var target : Transform;
var distanceMin = 2.0;
var distanceMax = 300.0;
var distanceInitial = 12.5;
var scrollSpeed = 20.0;

//var moveDamping = 3.0;


var xSpeed = 160.0;
var ySpeed = 160.0;

var yMinLimit = -360;
var yMaxLimit = 360;

private var x = 0.0;
private var y = 0.0;
private var distanceCurrent = distanceInitial;

@AddComponentMenu("Camera-Control/Mouse Orbit")
partial class MouseOrbitDynamic { }

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;

	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = false;
}

function Update () {

}

function LateUpdate () {
    if (target) {

    	
        x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
        y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02;
 		distanceCurrent -= Input.GetAxis("Mouse ScrollWheel") * scrollSpeed;
		
		distanceCurrent = Mathf.Clamp(distanceCurrent, distanceMin, distanceMax);
 		//y = ClampAngle(y, yMinLimit, yMaxLimit);
 		       
        var rotation = (target.rotation * Quaternion.Euler(y, x, 0));
        var position = rotation * Vector3(0.0, 0.0, -distanceCurrent) + target.position;
        
        transform.rotation = rotation;
        transform.position = position;
       // transform.position = Vector3.Lerp(transform.position, position, moveDamping * Time.deltaTime);
    }
    
}

static function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}