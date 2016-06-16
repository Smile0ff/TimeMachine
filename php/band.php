<?php
    sleep(1);

    $response = [
        "current"   => $_GET["totalCount"],
        "isLast"    => false,
        "data"  => [
            [
                "photo"         => "build/images/band/1.jpg",
                "photoTitle"    => "participant name",
                "entryYear"     => "1968",
                "yearsInGroup"  => "5 лет в группе",
                "role"          => "гитарист",
                "title"         => "Lorem ipsum dolor sit amet",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "#",
                "linkTitle"     => "подробнее"
            ],
            [
                "photo"         => "build/images/band/1.jpg",
                "photoTitle"    => "participant name",
                "entryYear"     => "1968",
                "yearsInGroup"  => "5 лет в группе",
                "role"          => "гитарист",
                "title"         => "Lorem ipsum dolor sit amet",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "",
                "linkTitle"     => "подробнее"
            ],
            [
                "photo"         => "build/images/band/1.jpg",
                "photoTitle"    => "participant name",
                "entryYear"     => "1968",
                "yearsInGroup"  => "5 лет в группе",
                "role"          => "гитарист",
                "title"         => "Lorem ipsum dolor sit amet",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "",
                "linkTitle"     => "подробнее"
            ]
        ]
    ];

    echo json_encode($response);


