"use strict";

let el = $("#photo-list-holder");
let items = el.find(".photo-item");

let elWidth = 0;
let itemWidth = 0;
let itemCount = items.length;

class PhotoGrid{
    
    constructor(perRow = 3, gap = 40){
        this.perRow = perRow;
        this.gap = gap;

        this._events();

        this.setTemporaryHeight();
        this.calcWidth();
        this.setupGrid();
    }
    _events(){
        $(window).on("resize", (e) => { this._handleResize(e) });
    }
    _handleResize(e){
        this.setTemporaryHeight();
        this.calcWidth();
        this.setupGrid();

        return false;
    }
    setTemporaryHeight(){
        el.height(10000);
    }
    calcWidth(){
        elWidth = el.width();
        itemWidth = (elWidth - this.gap * (this.perRow - 1)) / this.perRow;
    }
    setupGrid(){
        let largestHeight = 0;
        let largestOffsetTop = 0;
        let totalHeight = 0;

        let row = 0;
        let cell = 0;

        items.css({ width: itemWidth +"px" });

        for(let i = 0; i < itemCount; i++){
            let item = items.eq(i);
            let height = item.height();
            let offsetTop = 0;
            let upperItem = null;
            let upperHeight = 0;
            let upperOffsetTop = 0;

            let top = 0;
            let left = 0;

            cell = i % this.perRow;
            if(cell === 0) row++;

            if(row > 1){
                upperItem = items.eq(i - this.perRow);
                upperHeight = upperItem.height();
                upperOffsetTop = upperItem.position().top;
            }

            top = (row <= 1) ? (upperHeight + upperOffsetTop) : (upperHeight + upperOffsetTop + this.gap);
            left = itemWidth * cell + (cell * this.gap);

            item.css({
                width: itemWidth +"px",
                top: top +"px",
                left: left +"px"
            });

            if(i >= itemCount - this.perRow){
                offsetTop = item.position().top;

                if(height > largestHeight) largestHeight = height;
                if(offsetTop > largestOffsetTop) largestOffsetTop = offsetTop;

                totalHeight = largestHeight + largestOffsetTop;   
            }

        }

        el.css({ height: totalHeight +"px" });
    }

}

export default PhotoGrid;