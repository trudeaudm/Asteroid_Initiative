
var size : float = 10;

function Awake () {
Destroy (gameObject, size);
}

function FixedUpdate () {
	rigidbody.drag = Gravity.aDrag;
}