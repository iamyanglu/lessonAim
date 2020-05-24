import vuex from  'vuex'
import  Vue from  'vue'
Vue.use(vuex)
const store = new vuex.Store(
    {
        state:{
            nick:'',
            isLog:false
        },
        getters:{},
        mutations:{
            log(state,obj){
           state.isLog = true;
           state.nick = obj.nick
            }
        },
        actions:{

        }

    }
)
export  default  store