//copyright Graham Hammond 2024
function makestory(){
var person=document.getElementById("name").value
var colour=document.getElementById("colour").value
var animal=document.getElementById("animal").value;
var time=document.getElementById("time").value;
var mf=document.getElementById("mf").value;
var activity=document.getElementById("activity").value;
var ranthing=document.getElementById("ranthing");
var story=("There was a person named "+person+". "+mf+" loved to play "+activity+". "+mf+" also loved "+animal+"s a lot. One time at "+time+" "+mf+" saw a "+colour+" "+animal+" jumping at the ground."+mf+" was very happy to see the "+colour+" "+animal+". "+mf+" liked the "+animal+" a lot and "+mf+" brought the "+animal+" home. "+mf+" brought it home and had a lot of fun with the "+animal+". "+mf+" had so much fun and "+ranthing+" a lot. ")
  document.getElementById("story").value = story;
}
