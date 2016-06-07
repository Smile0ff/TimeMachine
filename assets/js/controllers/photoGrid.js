"use strict";

let el = $("#photo-list-holder");
let items = el.find(".photo-item");
let itemCount = items.length;

let perRow = 3;
let gap = 40;
let rowCount = itemCount / perRow;

let measurements = {};
let positions = {};

class PhotoGrid{
    
    constructor(){
        this.setTemporaryExtraHeight();
        this.calcMeasurements();
        this.calcPositions();


    }
    setTemporaryExtraHeight(){
        el.height(10000);
    }
    calcMeasurements(){
        measurements.elWidth = el.width();
        measurements.itemWidth = (measurements.elWidth - (gap * 2)) / perRow;
    }
    calcPositions(){
        let largestHeight = 0;
        let largestTop = 0;
        let totalHeight = 0;
        let currentRow = 0;
        let currentCell = 0;

        items.css({ width: measurements.itemWidth +"px" });

        for(let i = 0; i < itemCount; i++){
            let item = items.eq(i);
            let itemHeight = item.height();
            let itemPosTop = 0;
            let upperItem = null;
            let upperItemHeight = 0;
            let upperItemOffsetTop = 0;

            if(i % perRow === 0) currentRow++;
            currentCell = i % perRow;

            if(currentRow > 1){
                upperItem = items.eq(i - perRow);
                upperItemHeight = upperItem.height();
                upperItemOffsetTop = upperItem.position().top;
            }

            let topPosition = (currentRow <= 1) ? (upperItemHeight + upperItemOffsetTop) : (upperItemHeight + upperItemOffsetTop + gap);

            

            let leftPosition = (i % perRow > 0) ? ((measurements.itemWidth * currentCell) + gap) : (measurements.itemWidth * currentCell);

            item.css({
                width: measurements.itemWidth +"px",
                height: itemHeight +"px",
                top: topPosition +"px",
                left: leftPosition + "px"
            });

            if(i >= itemCount - perRow){
                itemPosTop = item.position().top;

                if(itemHeight > largestHeight) largestHeight = itemHeight;
                if(itemPosTop > largestTop) largestTop = itemPosTop;

                totalHeight = largestHeight + largestTop;   
            }

        }

        el.css({ height: totalHeight +"px" });

    }
}

export default PhotoGrid;