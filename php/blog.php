<?php
    sleep(1);

    $response = [
        "current"   => $_GET["totalCount"],
        "isLast"    => false,
        "posts"  => [
            [
                "photo"         => "build/images/blog/1.jpg",
                "photoTitle"    => "some short title",
                "year"          => "2016",
                "machineDate"   => "2016-03-22",
                "humanDate"     => "22 марта",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "#",
                "linkTitle"     => "read more"
            ],
            [
                "photo"         => "build/images/blog/1.jpg",
                "photoTitle"    => "some short title",
                "year"          => "2016",
                "machineDate"   => "2016-03-22",
                "humanDate"     => "22 марта",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "#",
                "linkTitle"     => "read more"
            ],
            [
                "photo"         => "build/images/blog/1.jpg",
                "photoTitle"    => "some short title",
                "year"          => "2016",
                "machineDate"   => "2016-03-22",
                "humanDate"     => "22 марта",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "#",
                "linkTitle"     => "read more"
            ]
        ]
    ];

    echo json_encode($response);
