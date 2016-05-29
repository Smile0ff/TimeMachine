"use strict";

import Loader from "./loader";
import Audio from "./audio";
import Visualizer from "./visualizer";

let visualizeHolder = $("#visualize-holder");
let playButton = $("#play-button");
let isPlay = true;

class Player extends Audio{

    constructor(){
        super();
        this._events();

        let songUrl = visualizeHolder.data("song");

        this.loader = new Loader(songUrl);
        this.visualizer = new Visualizer({
            analyzer: this.analyzer,
            frequencyDomain: this.frequencyDomain,
            timeDomain: this.timeDomain
        });

        this.loader
            .load()
            .then(super.decode.bind(this))
            .then((buffer) => {
                this.buffer = buffer;
                this.play();
                playButton.addClass("active");
            });
    }
    _events(){
        playButton.on("click", (e) => { this._handlePlay(e) });
    }
    _handlePlay(e){
        isPlay ? this.stop() : this.play();
        isPlay ? playButton.removeClass("active") : playButton.addClass("active");
        isPlay = !isPlay;

        return false;
    }
    play(){
        this.startTime = this.audioContext.currentTime;
        super.connect();
        this.source.start(0, this.offsetTime % this.buffer.duration);
        this.visualizer.start();
    }
    stop(){
        this.source.stop();
        this.visualizer.stop();
        this.offsetTime += this.audioContext.currentTime - this.startTime;
    }

}

export default Player;