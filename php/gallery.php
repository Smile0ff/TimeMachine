<?php
    sleep(1);

    $response = [
        "current"   => $_GET["totalCount"],
        "isLast"    => false,
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
                "link"          => "#",
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
                "link"          => "#",
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
                "link"          => "#",
                "linkTitle"     => "view"
            ]
        ]
    ];

    echo json_encode($response);
