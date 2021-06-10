class Tool{
    constructor(canvas){
        this.canvas = canvas
        this.context = canvas.getContext('2d')
    }
    destroyEvents(){
        this.canvas.onMouseUp = null
        this.canvas.onMouseDown = null
        this.canvas.onMouseMove = null
    }
}

export default Tool