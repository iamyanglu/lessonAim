import  router from 'vue-router'
import  vue from  'vue'
const mylog = ()=> import('@/views/logAndRe/login')
const re = ()=> import('@/views/logAndRe/re')
const manangeMess = ()=> import('@/views/mane/manageMess.vue')
const pushMess = ()=> import('@/views/putMessage/pushMess')
const showMess = ()=> import('@/views/showMessage/showMess')
const detail = ()=> import('@/views/detailMessage/detail')
const adminlog = ()=> import('@/views/logAndRe/adminlog')
vue.use(router)
const routes=[
    {
        path:'/',
        redirect:'/messList'
    },
    {
        path:'/messList',
        component:showMess
    },
    {
        path:'/messMange',
        component:manangeMess
    },
    {
        path:'/login',
        component:mylog
    },
    {
        path:'/reg',
        component:re
    },

    {
        path:'/pushMess',
        component:pushMess
    },
    {
        path:'/detail/:id',
        component:detail
    },
    {
        path:'/adminLog',
        component:adminlog
    },
]
const Router = new router(
    {
        routes,
      mode:'history'
    }

)

Router.beforeEach((to,from,next)=>{

    const needpath = ['/reg','/login']
    const needLog = ['/pushMess']
    const needAdmin = ['/messMange']
    if(needAdmin.indexOf(to.path) > -1 && !window.localStorage.getItem('isAdmin'))
    {

        next('/adminLog')
    }
    if(needpath.indexOf(to.path) > -1 )
    {
        to.meta.path = from.path
    }
    if(needLog.indexOf(to.path) > -1 && !window.localStorage.getItem('nick'))
    {
        next('/login')
    }
    else{
        next()
    }

})
export default  Router