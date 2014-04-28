#pragma strict
var orgin : Transform;
function Start () {
transform.position = orgin.position;
transform.eulerAngles.z = Random.Range(0, 360);
}

function Update () {

}