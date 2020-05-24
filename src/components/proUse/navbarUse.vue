<template>
    <div class="navbarUse">
    <navbar>
<navbaritem  v-for="item in linkList" :txt="item.txt" :path="item.path" slot="center"/>
        <navbaritem v-show="!isLog" v-for="item in logAndReg" :txt="item.txt" :path="item.path" slot="center"/>
        <div class="nick" v-show="isLog" slot="center" >Hello : {{nick}}</div>

    </navbar>

    </div>
</template>

<script>
    import navbar from "../content/navbar/navbar";
    import navbaritem from "../content/navbar/navbaritem";

    export default {
        name: "navbarUse",

        components:{
            navbar,
            navbaritem
        },
        data(){
            return{
                linkList:[
                    {txt:'留言列表',path:'/messList'},
                    {txt:'留言管理',path:'/messMange'},
                    {txt:'留言发表',path:'/pushMess'},

                ],
                logAndReg:[ {txt:'登录',path:'/login'},
                             {txt:'注册',path:'/reg'}],
                isLog:false,
                nick:''
            }
        },
   computed:{
            listenIsLog(){

                return {
                    isLog:this.$store.state.isLog,
                    nick: this.$store.state.nick

                }
            }
   },
created() {
    console.log(window.localStorage.getItem('token'));
    if(window.localStorage.getItem('token'))
    {

        this.$store.commit('log',{
            nick:window.localStorage.getItem('nick')
        })
        this.isLog = this.$store.state.isLog
        this.nick = this.$store.state.nick
    }
},
        watch:{
            listenIsLog:function (old,val) {

                this.isLog = old.isLog,
                        this.nick = old.nick


            }
        }
    }
</script>

<style scoped>
.navbarUse{

    height: 49px;
}
    .nick{
        height: 49px;
        line-height: 49px;
    }

</style>