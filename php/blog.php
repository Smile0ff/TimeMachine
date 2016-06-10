<?php
    sleep(1);

    $response = [
        "current"   => $_GET["totalCount"],
        "isLast"    => false,
        "data"  => [
            [
                "photo"         => "build/images/blog/1.jpg",
                "photoTitle"    => "some short title",
                "year"          => "2016",
                "machineDate"   => "2016-03-22",
                "humanDate"     => "22 марта",
                "viewCount"     => "100 просмотров",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "post.html",
                "linkTitle"     => "read more"
            ],
            [
                "photo"         => "build/images/blog/1.jpg",
                "photoTitle"    => "some short title",
                "year"          => "2016",
                "machineDate"   => "2016-03-22",
                "humanDate"     => "22 марта",
                "viewCount"     => "100 просмотров",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "post.html",
                "linkTitle"     => "read more"
            ],
            [
                "photo"         => "build/images/blog/1.jpg",
                "photoTitle"    => "some short title",
                "year"          => "2016",
                "machineDate"   => "2016-03-22",
                "humanDate"     => "22 марта",
                "viewCount"     => "100 просмотров",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "post.html",
                "linkTitle"     => "read more"
            ]
        ]
    ];

    echo json_encode($response);
