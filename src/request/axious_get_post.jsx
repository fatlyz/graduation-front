import axios from 'axios'
export default function get(url,username,password){
    
    return axios.get(url,{
            params:{
                username : username,
                password : password
            }
        }) 
    
}
export  function get_info(url,username,uptext,order){
    
    return axios.get(url,{
            params:{
                username : username,
                uptest : uptext,
                order : order
            }
        }) 
    
}
export  function get_uplist(url,username){
    
    return axios.get(url,{
            params:{
                username : username,
            }
        }) 
    
}