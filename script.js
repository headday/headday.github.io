$(function(){
    $( '#datepicker' ).datepicker();
    
    $('.calc_form').submit(function(event){
        event.preventDefault();
        $.ajax({
            // url:     'https://headday.github.io/calc.php',
            url:     'http://testtast1//calc.php',
            type:     'POST',
            dataType: 'html',
            data: $('.calc_form').serialize(),
            success: function(response) { 
                let res = $.parseJSON(response)
                $('.result_span').text(res)
                $('.result_block').css('display','inline-block');
                
            },
            error: function(response) {
                console.log('error');
            }
         });
    })

    $('#summ_add').css('display','none');

    $('#contribution_add').change(function(){
        $('#summ_add').css('display','flex');
    })
    $('#contribution_remove').change(function(){
        $('#summ_add').css('display','none');
    })


    $('.range_block_on_summ').on('input',function(e){
        $('#summ').val(e.target.value)
    })
    $('.range_block_on_summadd').on('input',function(e){
        $('#summadd').val(e.target.value)
    })
})


