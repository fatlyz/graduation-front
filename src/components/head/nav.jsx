import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import './nav.css'


export default function Head(props){
    const loc = useLocation()
    const user = loc.state?.user
    const Navigate = useNavigate()
    const changeurl1 = () => {
        
        Navigate('/List',{
            state :{user:user}
        })
    }
    const changeurl2 = () => {
        Navigate('/index',{
            state :{user:user}
        })
    }
    return(     
         <div className='head'>
             <div className='chongliang'></div>
             <div className='mohu'  onClick={changeurl2}><h2>   up信息搜索与更新</h2></div>
             <div className='yonghu' onClick={changeurl1}><h5>用户:{user}</h5></div>
         </div>   
    )
}