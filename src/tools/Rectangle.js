import Tool from "./Tool";

class Rectangle extends Tool{
    constructor(canvas){
        super(canvas)
        this.listen()
    }

    listen(){
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e){
        this.mouseDown = false 
    }
    mouseDownHandler(e){
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.mouseDown = true
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler(e){
        if(this.mouseDown){
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            let width = currentX - this.startX
            let height = currentY - this.startY
            this.draw(this.startX, this.startY, width, height)
        }
    }
    draw(x, y, w, h){
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.context.rect(x, y, w, h);
            this.context.fill()
            this.context.stroke()
            this.context.beginPath()
        }
    }
}

export default Rectangle