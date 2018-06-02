
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("P"));
}

function changeBackground() {
    document.getElementById('block1').style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize="50px";
}

function changeFontColor() {
    document.getElementById('block3').style.color="green";
}

function revertColor() {
    document.getElementById('block3').style.color="black";
}

function hide() {
    document.getElementById('block4').style.visibility="hidden";
}

function changeBackColor() {
    document.getElementsByClassName('box1')[0].style.backgroundColor="green";
    document.getElementsByClassName('box1')[1].style.backgroundColor="green";
    document.getElementsByClassName('box1')[2].style.backgroundColor="green";
    document.getElementsByClassName('box2')[0].style.backgroundColor="blue";
    document.getElementsByClassName('box2')[1].style.backgroundColor="blue";
    document.getElementsByClassName('box2')[2].style.backgroundColor="blue";
}
function numbersOnly(){
    
}

function addAdjacent() {
    var node = document.createElement("P");                 
    var textnode = document.createTextNode("I got generated on the fly...");         
    node.appendChild(textnode);                              
    document.getElementById("para2").appendChild(node);    
}

function removePara() {
    var node=document.getElementById("para4");
    node.parentNode.removeChild(node);
}

function animatePara()
{
    myMove();
}

function myMove() {
   document.getElementById('box5').style.position = "relative";
   document.getElementById('box5').style.animationName = "myanimation";
   document.getElementById('box5').style.animationDuration = "2s";

}
function upperCase(){
    var x= document.getElementById("inputBox1");
    var y= document.getElementById("inputBox2");
    y.value=x.value.toUpperCase();
}

function CamelCase() {
    var str = document.getElementById("inputBox3");
    str.value= str.value.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
}

function numbersOnly(evt)
{
   
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;

}
function myFocusFunction() {
    console.log(document.getElementById("myinput").style.backgroundColor = "yellow"); 
}

function option()
{
    console.log(document.getElementById('browsers').value);
}
