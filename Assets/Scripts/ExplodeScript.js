#pragma strict
var rate : float = 2;
var size : float = 3;
var time : float = 4;

function Awake () {
Destroy (gameObject.collider, size);
Destroy (gameObject, time);
}

function FixedUpdate () {

transform.localScale += Vector3(rate, rate, rate);

}