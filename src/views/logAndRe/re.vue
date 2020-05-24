<template>

        <div class="regCom">

            <div class="regBox">
                <div class="titReg">注册</div>
                <div class="inputGroup">
                    <span><img src="../../assets/img/user.png" /></span>  <input placeholder="nickName" v-model="nick">
                    <span><img src="../../assets/img/user.png" /></span> <input placeholder="user" v-model="user">
                    <span><img src="../../assets/img/password.png" /></span> <input placeholder="secret" v-model="pass">


                </div>
                <div class="reg"><a @click="reg">注册</a></div>
            </div>



        </div>

</template>

<script>
    import {regArt} from "../../network/request";

    export default {
        name: "re",
        methods:{
            reg(){
                let obj ={}
                obj.nick = this.nick
                obj.user = this.user
                obj.pass = this.pass
                regArt(obj).then(res=>{
                    console.log(res.data);
                })

            }
        },
        data(){
            return {
                nick:'',
                user:'',
                pass:''
            }
        }
    }
</script>

<style scoped>
    .titReg{
        font-weight: bold;
        width: 100%;
       height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid black;
    }
    .regCom{
        width: 100%;
    }
    .regBox{
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
    .reg{
        margin-top: 20px;
        width:100%;
        text-align: center;
        padding-bottom: 20px;
       cursor: pointer;
        border-bottom: 1px solid black;
    }
</style>