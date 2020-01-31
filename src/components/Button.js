import React from 'react'
import '../App.css'



function Button(props) {
    console.log(props)
    return (<div className="button-bar">
        <button className="button" onClick={props.handlePreviousClick} >  {'< Previous '}</button>
        <button className="button" onClick={props.handleNextClick} > {'Next >'}</button>
    </div>

    )
}










export default Button