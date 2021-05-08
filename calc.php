<?php 
function checkYearOnLofty($year){
    if ($year%4 != 0 || $year%100 == 0 && $year%400 != 0) {
       return 365;  
    }else{
        return 366;
    }
}
function getDaysInMounth($mounth){
    return 28 + ($mounth + floor($mounth/8)) % 2 + 2 % $mounth + 2 * floor(1/$mounth); 
}

function calculate(){
    $date = explode("/",$_POST['summ_date']);
    $mounth = $date[0];
    $daysn = $date[1];
    $year = $date[2];
    $summadd = $_POST['radio_contribution'] == 'true' ? $_POST['summadd'] : 0; 
    $summn = $_POST['summ'];
    $summ_time = $_POST['summ_time'];
    $daysy = checkYearOnLofty($year);
    $percent  = 0.1;

    for ($i=0; $i < $summ_time*12; $i++) { 
        if($mounth > 12){
            $mounth = 1;
        }
        $daysn  = getDaysInMounth($mounth);
        $summn = $summn +$summadd + ($summn+$summadd)*$daysn*($percent / $daysy);/*  */

        $mounth++;
    }
    echo json_encode($summn);
}
calculate();
?>