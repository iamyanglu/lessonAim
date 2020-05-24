import axios from  'axios'
let request = axios.create({
    baseURL:'http://127.0.0.1:2020'
})
export function regArt(obj) {

    return request({
        method:'post',
        url:'/regUser',
        data:{
            nick:obj.nick,
            user:obj.user,
            pass:obj.pass
        }
    })

}
export function logIn(obj){
    return request({
        url:'/log',
        method:'post',
        data:{
            user:obj.user,
            pass:obj.pass
        }
    })
}
export function putMess(obj){
    return request({
        url:'/put',
        method:'post',
        data:{
         tit:obj.tit,
         content:obj.content,
            token:window.localStorage.getItem('token')
        }
    })
}
export function getMess(page){
    return request({
        url:'/getM',
        method:'get',
       params:{
            page:page
       }

    })
}
export function getMessById(id){
    return request({
        url:'/getDetail',
        method:'get',
        params:{
            id:id
        }

    })
}
export function adminLog(obj){
    return request({
        url:'/adminLog',
        method:'post',
        data:{

            user:obj.user,
            pass:obj.pass
        }
    })

}
export function getTotal(){
    return request({
        url:'/getTot',
        method:'get',
    })
}
export function delById(id){
    return request({
        url:'/delOne',
        method:'get',
        params:{
            id:id
        }

    })
}