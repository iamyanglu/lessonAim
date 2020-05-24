<template>

    <div class="logCom">

        <div class="logBox">
            <div class="titLog"> 管理员登录 </div>
            <div class="inputGroup">

                <span><img src="../../assets/img/user.png" /></span> <input placeholder="user" v-model="user">
                <span><img src="../../assets/img/password.png" /></span> <input placeholder="secret" v-model="pass">


            </div>
            <div class="log"><a @click="login">登录</a></div>
        </div>



    </div>
</template>

<script>
    import {adminLog} from "../../network/request";

    export default {
        name: "adminlog",
        methods:{
            login(){
                    adminLog({
                        user:this.user,
                        pass:this.pass
                    }).then(res=>{
                        let data = res.data
                        if(res.data.code  === 0){
                            window.alert(res.data.code.message)
                        }
                        else if(data.code === 1 ){
                            window.alert(data.message)
                        }
                        else  if(data.code === 2){

                            let token = data.token
                            window.localStorage.setItem('isAdmin',true);
                            window.localStorage.setItem('adminToken',token);
                            window.localStorage.setItem('nick','管理员')
                            this.$store.commit('log',{nick:'管理员'})
                            this.$router.replace('/messMange')

                        }
                    })
            }
        },
        data(){
            return{
                user:'',
                pass:'',
                fromPath:''
            }
        },
        created() {
          if(this.$route.meta.path)
          {
              this.fromPath = this.$route.meta.path
          }

        }
    }
</script>

<style scoped>
    .titLog{

        font-weight: bold;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid black;
    }
    .logCom{
        width: 100%;
    }
    .logBox{
        width: 400px;
        height: 500px;
        margin: 50px auto;

    }
    .inputGroup {
        width: 100%;
    }
    .inputGroup input{
        border: none;
        box-shadow: 0 0 2px #2c3e50;
        margin-top: 20px;
        width: 80%;
        height: 30px;
    }
    .inputGroup input:hover{
        box-shadow: 0 0 2px deepskyblue;

    }
    .inputGroup span img{
        margin-left: 10px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
    .log{
        margin-top: 20px;
        width:100%;
        text-align: center;
        padding-bottom: 20px;
        cursor: pointer;
        border-bottom: 1px solid black;
    }
</style>