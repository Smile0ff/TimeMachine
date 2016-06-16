<?php
    sleep(1);
    
    $email = $_POST["subscribition"]["email"];
    $response = [];

    if(!empty($email) && strlen($email) >= 5){

        $response = [
            "title" => "Success",
            "message" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis dolorum voluptatibus quasi dicta, laborum ipsam, similique eius, ut inventore eos debitis ea maiores iusto aspernatur laudantium placeat tempore omnis!"
        ];

        echo json_encode($response);

    } else {

        header("HTTP/1.1 500 Internal Server Error");

        $response = [
            "title" => "Oooppppps",
            "message" => "Something goes wrong!"
        ];
        echo json_encode($response);

    }



