<?php
    sleep(1);

    if($_POST["feedback"]["theme"]){

        $response = ["message" => "Ваше сообщение успешно отправлено"];
    }
    else{
        
        header("HTTP/1.1 500 Internal Server Error");

        $response = [
            "title" => "Oooppppps",
            "message" => "Something goes wrong!"
        ];
    }

    echo json_encode($response);
