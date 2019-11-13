import React,{Component} from 'react'
import Video from './Video' 
import "../utils/list.scss"
export default function ActiveItem(props){
return(
    <div className="row pt-4 pb-4">
        <div className="col-md-10    setoff-md-1">
            <div className= "card px-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <Video/>
                
                   
                    <div className= "pt-4 pb-4">
                         <h4>{props.slnum} {props.title}</h4>
                         <p>{props.description}</p>
                         <div className="cta-wrapper">
                             <a onClick = {props.status} className="btn cta-btn">Watch Videos</a>
                         </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
)
}