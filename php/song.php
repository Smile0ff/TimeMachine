<?php
    sleep(1);

    $response = [];

    if($_GET["songId"]){
        $response["data"] = "This happened to me [A]
                You sad me goodbye
                You did let me see
                Then you [em] let me bye
                So you let [F] me bye
                know this can be
                You know[em] I don't lie
                This happened to me
                
                Remember - we [D] knew
                I can't fit my mind
                I'm feeling [C] so blue
                Why you telling «bye»
                So you let me bye
                I know [F] this can be
                You know I don't lie
                This happened to me [A]
                
                This happened to me [A]
                You sad me [A] goodbye
                You did let me see
                Then you let me [A] bye
                So you let [EM] me bye
                I know this can be
                You know I don't lie
                This happened to me [A]";

        $response["data"] = preg_replace('/\h+/', ' ', $response["data"]);
        echo json_encode($response);
        
    } else{

        header("HTTP/1.1 500 Internal Server Error");

        $response = [
            "title" => "Oooppppps",
            "message" => "Something goes wrong!"
        ];
        echo json_encode($response);
    }
