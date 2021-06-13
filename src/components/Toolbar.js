import React from 'react'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import '../styles/toolbar.scss'
import Brush from '../tools/Brush'
import Rectangle from '../tools/Rectangle'

const Toolbar = () => {
    return(
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => toolState.setTool( new Brush(canvasState.canvas))}></button>
            <button className="toolbar__btn rectangle" onClick={() => toolState.setTool( new Rectangle(canvasState.canvas))}></button>
            <button className="toolbar__btn circle"></button>
            <button className="toolbar__btn eraser"></button>
            <button className="toolbar__btn line"></button>
            <input type="color" style={{marginLeft: 10}}/>
            <button className="toolbar__btn undo"></button>
            <button className="toolbar__btn redo"></button>
            <button className="toolbar__btn save"></button>
        </div>
    )
}

export default Toolbar