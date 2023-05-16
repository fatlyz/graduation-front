import './Infolist.css'
import React, { useEffect, useState } from 'react'
import Uplist from '../../components/uplist/uplist'
import { useLocation } from 'react-router'
import { get_uplist } from '../../request/axious_get_post'
import Head from '../../components/head/nav'

export default function Infolist(props){
    const[uplist,setUplist]=useState()
    const loc = useLocation()
    const user = loc.state.user
    useEffect(() => {
        get_uplist('http://127.0.0.1:3000/getuplist',user).then(
            res =>{
                setUplist(res.data)
            }
        )
    },[])
    return (
    <div>
        <Head user = {user}/>
        <div className='infolistshow'>
            <Uplist uplist = {uplist} user = {user}/>
        </div>
        
    </div>
    
    )
}