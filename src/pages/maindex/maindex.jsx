import React, { useState ,useEffect,useRef} from 'react';
import {  useLocation,useNavigate} from 'react-router-dom'
import Head from '../../components/head/nav'
import {get_info} from  '../../request/axious_get_post'
import Linegram,{Histogram} from '../../components/echarts/echart';
import './maindex.css'
import Infolist from '../Infolist/Infolist';
export default function Maindex(){
    const uptext = useRef()
    const order = useRef()
    const [state,setState] = useState({data:'未收到数据'})
    const [name,setName] = useState('')
    // const [display,setDisplay] = useState('none')
    const Navigate = useNavigate()
    const loc = useLocation()
    const user = loc.state?.user
    const check = (user) =>{
        if(!user){
            alert('没有登录态，请返回登录页登录')
            Navigate('/')
        }
    }
    const get_oldinfo = ()=>{
        let url
        url = 'http://127.0.0.1:3000/getinfo'
        get_info(url,user,uptext.current.value,order.current.value).then(
            res => {
                console.log(res)
                if(res.data !== '数据库中没有信息，请先更新数据'){
                    // setDisplay('show')
                    // console.log(display)
                    setState({data:res.data})
                }
                else {
                    // setDisplay('none')
                    // alert(res.data)
                    setState({data:res.data})
                }
            }
        )
    }
    const updateupinfo = ()=>{
        let url
        url = 'http://127.0.0.1:3000/search'
        get_info(url,user,uptext.current.value,order.current.value).then(
            res => {
                setState({data:res.data})
            }
        )
    }
    useEffect(()=>{
        check(user)
    },[name])
    useEffect(()=>{
    },[state])
    return (
        <div>
            <Head user = {user}></Head>
            <div className='search'>
                <input className='inputinfo'  placeholder="请输入你要搜索的up主" ref={ uptext } type = 'test'></input>
                <input className='inputinfo'  placeholder="click or update" ref={ order } type = 'test'></input>
                <div className='but_contain'>
                    <button className='but3' onClick={get_oldinfo}>获取信息</button>
                    <button className='but4' onClick={updateupinfo}>更新信息</button>
                </div>
                
            </div>
            <div className='gram'>
                <div>
                {/* <Linegram datas = {state} display = {display}/> */}
                    <Linegram datas = {state}/>
                </div>
                <div className='gram'>
                    <Histogram datas = {state}></Histogram>
                </div>
            </div>
            {/* <div className='list' style={{display :'none'}}>
                <Infolist  list = {state.data} order = {order.current?.value}></Infolist>
            </div> */}
        </div>   
        )
    
}