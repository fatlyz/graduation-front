import React, { useEffect, useState } from "react";
import Videolist from '../videolist/videolist'
import './uplist.css'
export default function Uplist(props){
    const {uplist,user} = props
    const [currentup,setCurrentup] = useState()
    const [order,setOrder] = useState('update')
    const getvideolist = (e) => {
        setCurrentup(e.nativeEvent.target.firstChild.data)
    }    
    const getorder = (e) => {
        setOrder(e.nativeEvent.target.firstChild.data)
    }
    return (
        <div className="container">
            <div className="uplist">
                {
                    uplist?.map((name) => 
                        {
                            return(
                                <div className={name===currentup?'active':'showdom'} key = {name} onClick = {getvideolist}>{name}</div>
                            )
                        }       
                    )
                }
            </div>
            <div className="videocontainer">
                <div className="orderlist">
                    <div className="click" onClick={getorder}>click</div>
                    <div className="update" onClick={getorder}>update</div>
                </div>
                
                <Videolist up = {currentup} user = {user} order = {order}/>
            </div>
        </div>
        
    )
}