<?php
    sleep(1);

    $response = [
        "data"  => [
            [
                "photo"         => "build/images/gallery/covers/1.jpg",
                "year"          => "2016",
                "machineDate"   => "2016-05-19",
                "humanDate"     => "22 марта",
                "photoCount"     => "23 фотографии",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "photos.html",
                "linkTitle"     => "view"
            ],
            [
                "photo"         => "build/images/gallery/covers/1.jpg",
                "year"          => "2016",
                "machineDate"   => "2016-05-19",
                "humanDate"     => "22 марта",
                "photoCount"     => "23 фотографии",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "photos.html",
                "linkTitle"     => "view"
            ],
            [
                "photo"         => "build/images/gallery/covers/1.jpg",
                "year"          => "2016",
                "machineDate"   => "2016-05-19",
                "humanDate"     => "22 марта",
                "photoCount"     => "23 фотографии",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "photos.html",
                "linkTitle"     => "view"
            ]
        ]
    ];

    /*$response = [
        "data" => [
            "noContent" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit"
        ]
    ];*/


    if( !empty($_GET["tagId"]) ){

        $response["whatIsIt"] = "tags";

    } elseif( !empty($_GET["year"]) ){
        
        $response["whatIsIt"] = "timeline";

    } elseif( !empty($_GET["totalCount"]) ){
        
        $response["totalCount"] = $_GET["totalCount"];
        $response["whatIsIt"] = "lift";
        $response["isLast"] = false;

    } else{

        header("HTTP/1.1 500 Internal Server Error");

        $response = [
            "title" => "Oooppppps",
            "message" => "Something goes wrong!"
        ];
    }

    echo json_encode($response);
