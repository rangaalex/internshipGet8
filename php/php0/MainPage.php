
<?php
$money = 222;
$money .= 38;
$contacts = array ( 
    "PhoneNuber" => array ( "WorkPhone" => "+7(888)-888-88-88"),
    "Email" => array ( "WorkEmail" => "test@test.xx" ),
    "Name" => array ( "FirstName" => "Сергей")

);
echo json_encode($money,$contacts);



?>

