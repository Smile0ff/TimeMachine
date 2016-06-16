<?php
    sleep(1);

    $response = [
        "current"   => $_GET["totalCount"],
        "isLast"    => false,
        "data"  => [
            [
                "photo"         => "build/images/affiche/1.jpg",
                "photoTitle"    => "name of the city",
                "location"      => "ukraine, kiev",
                "street"        => "ул. Владимира Антоновича 64",
                "machineDate"   => "2016-05-19",
                "humanDate"     => "19 мая 2016",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "#",
                "linkTitle"     => "tickets",
                "noLinkTitle"   => "билетов нет"
            ],
            [
                "photo"         => "build/images/affiche/2.jpg",
                "photoTitle"    => "name of the city",
                "location"      => "ukraine, kiev",
                "street"        => "ул. Владимира Антоновича 64",
                "machineDate"   => "2016-05-19",
                "humanDate"     => "19 мая 2016",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "",
                "linkTitle"     => "tickets",
                "noLinkTitle"   => "билетов нет"
            ],
            [
                "photo"         => "build/images/affiche/1.jpg",
                "photoTitle"    => "name of the city",
                "location"      => "ukraine, kiev",
                "street"        => "ул. Владимира Антоновича 64",
                "machineDate"   => "2016-05-19",
                "humanDate"     => "19 мая 2016",
                "title"         => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "description"   => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Harum eius nulla veritatis vitae,psaperspiciatis error ea voluptatem expedita!
                                    Perferendis quis nisi ad odit tempore error atque dolor aspernatur porro!",
                "link"          => "#",
                "linkTitle"     => "tickets",
                "noLinkTitle"   => "билетов нет"
            ]
        ]
    ];

    echo json_encode($response);
