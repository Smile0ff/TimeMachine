"use strict";

import "../lib/raf";

import Vector from "./vector";
import Line from "./line";
import Circle from "./circle";

const LINE_COUNT = 180;
const LINE_WIDTH = 1;
const LINE_HEIGHT = 30;
const LINE_COLOR = "#141414";

const CIRCLE_RADIUS = 1;
const CIRCLE_COUNT = 180;
const CIRCLE_COLOR = "#141414";

let canvas = $("#visualizer");
let context = canvas[0].getContext("2d");

let [cx, cy] = [0, 0];

let linesTopLap = [];
let linesBottomLap = [];
let circles = [];

let invervalID = 0;

class Visualizer{

    constructor(options){
        this.radius = 0;

        this.analyzer = options.analyzer;
        this.frequencyDomain = options.frequencyDomain;
        this.timeDomain = options.timeDomain;

        this.setDimension();
        this.calcRadius();

        $(window).on("resize", (e) => { this.handleResize(e) });
    }
    start(){
        this.loop();
    }
    stop(){
        this.stopLoop();
    }
    handleResize(e){
        this.stopLoop();
        this.clear();
        this.setDimension();
        this.calcRadius();
        this.loop();

        return false;
    }
    setDimension(){
        cx = window.innerWidth / 2;
        cy = window.innerHeight / 2;

        canvas[0].width = window.innerWidth;
        canvas[0].height = window.innerHeight;
    }
    calcRadius(){
        this.radius = Math.round(window.innerWidth / 100 * 16.66666666666667);
    }
    clear(){
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    update(){
        this.analyzer.getByteFrequencyData(this.frequencyDomain);
        this.analyzer.getByteTimeDomainData(this.timeDomain);

        for(let i = 0; i < LINE_COUNT; i++){
            let angle = (360 / LINE_COUNT) * i;
            let freqPercent = this.frequencyDomain[i] / 256;

            let topPoint = Vector.getByAngle(angle + 90, (this.radius - LINE_HEIGHT * freqPercent));
            topPoint.add({x: cx, y: cy});

            let midPoint = Vector.getByAngle(angle + 90, this.radius - LINE_HEIGHT);
            midPoint.add({x: cx, y: cy});

            let botPoint = Vector.getByAngle(angle + 90, (this.radius - (LINE_HEIGHT * 2) + LINE_HEIGHT * freqPercent));
            botPoint.add({x: cx, y: cy});

            linesTopLap[i] = new Line(midPoint, topPoint, {
                width: LINE_WIDTH,
                height: LINE_HEIGHT,
                color: LINE_COLOR
            });
            linesBottomLap[i] = new Line(midPoint, botPoint, {
                width: LINE_WIDTH,
                height: LINE_HEIGHT,
                color: LINE_COLOR
            });
        }

        for(let i = 0; i < CIRCLE_COUNT; i++){
            let angle = (360 / CIRCLE_COUNT) * i;
            let timePercent = this.timeDomain[i] / 256;

            let vector = Vector.getByAngle(angle + 90, this.radius + (LINE_HEIGHT / 2 * timePercent));
            vector.add({x: cx, y: cy});

            circles[i] = new Circle(vector, {
                radius: CIRCLE_RADIUS,
                color: CIRCLE_COLOR
            });
        }
    }
    render(){
        for(let i = 0; i < LINE_COUNT; i++){
            linesTopLap[i].draw(context);
            linesBottomLap[i].draw(context);
        }
        for(let i = 0; i < CIRCLE_COUNT; i++){
            circles[i].draw(context);
        }
    }
    loop(){
        this.clear();
        this.update();
        this.render();
        invervalID = requestAnimationFrame(() => { this.loop() });
    }
    stopLoop(){
        cancelAnimationFrame(invervalID);
    }

}

export default Visualizer;