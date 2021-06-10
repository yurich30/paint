import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'   
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import '../styles/canvas.scss'
import Brush from '../tools.js/Brush'

const Canvas = observer( () => {

    const canvasRef = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return(
        <div className="canvas">
            <canvas ref={canvasRef} width={1000} height={500}/>
        </div>
    )
})

export default Canvas