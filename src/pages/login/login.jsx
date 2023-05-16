import React,{useRef} from 'react'
import get from  '../../request/axious_get_post'
import './login.css'
import { useNavigate } from 'react-router-dom'
export default function Login(){
    const container = useRef()
    const container2 = useRef()
    const Navigate = useNavigate()
    const login = ()=>{
        let url
        url = 'http://127.0.0.1:3000/login'
        get(url,container.current.value,container2.current.value).then(
            res => {
                if(res.data === 1)  {
                    Navigate('/index',{
                        state :{user:container.current.value}
                    })
                }
                else alert(res.data)
            }
        )
        // console.log(container.current?.value)
    }
    const register = ()=>{
        // console.log(this.props)
        let url
        // console.log(this.container.current.value)
        url = 'http://127.0.0.1:3000/register'
        get(url,container.current.value,container2.current.value).then(
            res => {
                alert(res.data)
            }
        )
    }
    
        return (
        <div className='login_div1'>
            {/* <h1>this is a Login page</h1>
            用户名:<input ref={this.container} type="text"></input><br/>
            密码:<input ref={this.container2} type="password"></input><br/>
            <button  onClick={this.login}>
                登录
            </button>
            <button onClick={this.register}>
                注册
            </button> */}
            <h1>请登录！</h1>
            <input className='input1'  placeholder="请输入用户名" ref={container} type = 'test'></input>
            <input className='input2'  placeholder="请输入密码"  type="test" ref = {container2}></input>
            <div className='login_div2'>
                <button className='but1' onClick={login}>登录</button>
                <button className='but1' onClick={register}>注册</button>
            </div>
        </div>
        )
}
