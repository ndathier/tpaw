 
 
 
 
 function validation(){
    var x = document.getElementById("champ").value.length;
if( x> 0 && x<5 ) {
document.getElementById("error").innerHTML="Les champs doivent contenir au mois 5 caracteres";
}
else if(x==0){
   document.getElementById("error").innerHTML="La saisi du champs nom est oblgatoire";

}
else {
   document.getElementById("div1").style.backgroundColor="green";
document.getElementById("error").innerHTML="Bienvenue:"  + document.getElementById("champ").value;

       
}
}