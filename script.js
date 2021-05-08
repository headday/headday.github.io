$(function(){
    $( '#datepicker' ).datepicker();
    
    $('.calc_form').submit(function(event){
        event.preventDefault();
        $.ajax({
            url:     'https://headday.github.io/calc.php',
            type:     'POST',
            dataType: 'html',
            data: $('.calc_form').serialize(),
            success: function(response) { 
                console.log($.parseJSON(response));
            },
            error: function(response) {
                console.log('error');
            }
         });
    })
   /*  if($('#contribution_add').is(':checked')){
        console.log('asdasd');
        $('#summ_add').addClass('active_block');
    }else{
        $('#summ_add').hide();
    } */
})


