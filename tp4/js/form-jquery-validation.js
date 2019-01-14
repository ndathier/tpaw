$(document).ready(function () {

    var xTriggered = 0;
$( '#name' ).keyup(function( event ) {
    xTriggered++;
 $('p.test1').html($( '#name' ).val().length +  " caract");
$.print( event );
}).keydown(function( event ) {
  if ( event.which == 0) {
    event.preventDefault();
  }
});
 
var yTriggered = 0;
$( '#prenom' ).keyup(function( event ) {
    yTriggered++;
 $('p.test2').html($( '#prenom' ).val().length +  " caract");
$.print( event );
}).keydown(function( event ) {
  if ( event.which == 0) {
    event.preventDefault();
  }
});

var zTriggered = 0;
$( '#adresse' ).keyup(function( event ) {
    zTriggered++;
 $('p.test3').html($( '#adresse' ).val().length +  " caract");
$.print( event );
}).keydown(function( event ) {
  if ( event.which == 0) {
    event.preventDefault();
  }
});
var vTriggered = 0;
$( '#mail' ).keyup(function( event ) {
    vTriggered++;
 $('p.test4').html($( '#mail' ).val().length +  " caract");
$.print( event );
}).keydown(function( event ) {
  if ( event.which == 0) {
    event.preventDefault();
  }
});


$("#valider").click(function (event) {
    event.preventDefault();
      if ($("#name").val().length < 5 || $("#prenom").val().length < 5 || $("#birth").val().length < 5 || $("#adresse").val().length < 5 || $("#mail").val().length < 5)
  {
          $(this).css("border-color","red");
          $("h5").html("message modal");

          $("p").html("tous les champs doivent être supérieurs à 5 caractères");
          isError = true;
          $('#myModal').html("show");
          
     
  }

  else
  {
  
      contactStore.add($("#name").val(),$("#prenom").val(),$("#adresse").val(),$("#birth").val(),$("#mail").val());
      contactList = contactStore.getList();
      $("tbody").html('');
      for(var index in contactList){
          $("tbody").append('<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>');
       }
  }
      
       
        
      
  });
  







$("#gps").click(function (event) {
  event.preventDefault();
  console.log("click");
  getLocation()
 
});



});