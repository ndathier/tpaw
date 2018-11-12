$(document).ready(function () {

    $("#valider").click(function (event) {
        event.preventDefault();
        console.log("click");
        var isError = false;
        var divs = $('input.champ');

        divs.each(function () {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            // do whatever
            if ($(this).val().length== 0) {
                $(".modal-title").html("message modal");
                $(".modal-body").html("veuillez remplir les caracteres s'il vous plait");
                isError = true;
                $('#myModal').modal("show");
            }


            else if  ($(this).val().length<5){
                $("h5").html("message modal");
                $("p").html("veuillez remplir les caracteres s'il vous plait infeieurs a 5");
                isError = true;
                $('#myModal').modal("show");
                
            }
        });
        if (isError == false) {
            $(".modal-title").html("Bienvenu") + +$("#inputName").val();
            $(".modal-body.maps").attr("href","http://maps.google.com/maps?q=Paris" )
            ; 
            $(".modal-body.maps").attr("src","https://maps.googleapis.com/maps/api/staticmap?markers="+$("#inputAdresse").val()+
            "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
           
                +
                $(".modal-body").html('<img src="map.jpg"/>');
            $('#myModal').modal("show");
        } else {
            $('#myModal').modal("show");
        }




    });

});
