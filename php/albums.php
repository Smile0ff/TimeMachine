<?php
    sleep(1);

    $response = [
        "current"   => $_GET["totalCount"],
        "isLast"    => false,
        "data"  => [
            [
                "cover"         => "build/images/covers/1.jpg",
                "year"          => "1976",
                "songCount"     => "27 песен",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "album.html",
                "linkTitle"     => "detailed"
            ],
            [
                "cover"         => "build/images/covers/1.jpg",
                "year"          => "1976",
                "songCount"     => "27 песен",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "album.html",
                "linkTitle"     => "detailed"
            ],
            [
                "cover"         => "build/images/covers/1.jpg",
                "year"          => "1976",
                "songCount"     => "27 песен",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "album.html",
                "linkTitle"     => "detailed"
            ],
        ]
    ];

    echo json_encode($response);
