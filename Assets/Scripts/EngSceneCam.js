#pragma strict

var speed : float = 5;
var x : float;
var y : float;
 
function FixedUpdate () {
     x = Input.GetAxis("Horizontal") * speed * Time.deltaTime; 
     y = Input.GetAxis("Vertical") * speed * Time.deltaTime; 
     transform.Translate(x, y, 0); 
}