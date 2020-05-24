<template>
    <div >
        <div class="tit_d">{{tit}}</div>
        <div class="detail_content">
        {{detail}}
            <div class="date_d"> 时 间 : {{mdate}}</div>
            <div class="author_d">作 者 :{{author}}</div>
        </div>


    </div>
</template>

<script>
    import {getMessById} from "../../network/request";

    export default {
        name: "detail",
        data(){
            return{
                tit:'',
                detail:'',
                date:'',
                author:''
            }
        },
        computed:{
            mdate (){
                let date = new Date(this.date)
                return date.getFullYear() + '/'+ (date.getMonth() + 1) + '/'+ date.getDate()
            }
        },
        created() {
            getMessById(this.$route.params.id).then(res=>{
             this.detail=res.data.detail;
            this.tit = res.data.tit;
            this.date = res.data.date
                this.author = res.data.author
            })
        }
    }
</script>

<style scoped>
.detail_content{
    margin: 10px auto;
    width: 80%;
    position: relative;

}
    .tit_d
    {   width: 100%;
        line-height: 50px;
        text-align: center;
    }
    .date_d{
        position: absolute;
        left: 0;

    }
    .author_d{
        right: 0;
        position: absolute;
        font-size: 16px;
        font-weight: bold;
        display: inline-block;
        color: red;
    }

</style>