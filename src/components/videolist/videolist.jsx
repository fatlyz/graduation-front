import React, { useEffect, useState } from "react";
import { get_info } from "../../request/axious_get_post";
import './videolist.css'

export default function Videolist(props){
    const {up,user,order} = props
    const [data,setData] = useState()
    const get_oldinfo = (user,uptext,order)=>{
        
        let url
        url = 'http://127.0.0.1:3000/getinfo'
        get_info(url,user,uptext,order).then(
            res => {
                    // setDisplay('none')
                    // alert(res.data)
                    setData({data:res.data})
            }
        )
    }
    useEffect(() => {
        if(up){
            get_oldinfo(user,up,order)
        }
        
    },[up,order])
    
    return (
        
        <div className="videolist">{data?.data.videoinfo.map((items) => {
            return(
            <a href = {items.url}>
                <div key={items.like} className='videoitems'>
                    <div className="videotitle">{items.title}</div>
                    <div className="otherinfo">
                        <div className="videoplay">播放:{items.play}</div>
                        <div className="videolike">点赞:{items.like}</div>
                        <div className="videocoin">投币:{items.coin}</div>
                        <div className="videofavorite">收藏:{items.favorite}</div>
                    </div>
                </div>
            </a>)})}</div>
    )
}