<template>
    <div class="part">
        <div class="art_tit"><input v-model="tit" placeholder="文章标题">

        </div>
        <mavon-editor ref=md   v-model="handbook"/>

        <input type="button" value="提交" class="putart" @click="put">
    </div>
</template>

<script>
    import {putMess} from "../../network/request";

    export default {
        name: "pushMess",
        data(){
            return {
                tit:'',
                handbook: ''
            }
        },
        methods:{
            put(){
                putMess({
                    tit:this.tit,
                    content:this.handbook
                }).then(res=>{


                })

            }
        }
    }
</script>

<style scoped>
    div.part{
        width: 100%;

    }
    .art_tit{
        margin: 0 auto;
        width: 100%;
        height: 80px;
    }

    .art_tit input{
        margin-left: 20px;
        margin-top: 20px;
        width: 200px;
        height: 30px;
        border-bottom: 1px solid black;

    }
    input.putart{
        text-align: center;
        width: 70px;
        height: 50px;
        background-color:greenyellow ;
        margin-top: 30px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>