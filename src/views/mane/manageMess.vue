<template>
    <div>
        <div class="art" v-for="item in mess.messList"> <mess-item :item="item"></mess-item>
            <a @click="delOne(item._id)">删除</a></div>
        <page_bot @toPage="toPage" v-if="mess.total > 0"></page_bot>

    </div>
</template>

<script>
    import MessItem from "../../components/content/messItem/messItem";
    import {getMess,getTotal,delById} from "../../network/request";
    import page_bot from "../../components/content/page_bot/page_bot";
    export default {
        name: "manageMess",
        components: {
            MessItem,
            page_bot
        },
        data(){
            return{
                mess:{
                    page:0,
                    messList:[]

                },
                total:0
            }
        },
        methods:{
            toPage(cod,other){
                if(cod === 0)
                {
                    if(this.mess.page === 0){
                        window.alert('当前就是首页')
                    }
                    else{
                        this.mess.page = 0;
                        this.getArt()
                    }
                }
                else if(cod === 1){
                    if(this.mess.page > 0)
                    {
                        this.mess.page-=1;
                        this.getArt()
                    }
                    else{
                        window.alert('首页不能上一页')
                    }
                }
                else if(cod === 2){
                    if(this.mess.page  ===  this.total)
                    {
                        window.alert('抱歉已经到尾页了')
                    }
                    else {
                        this.mess.page+=1
                        this.getArt()
                    }

                }
                else if(cod === 3){
                    this.mess.page = this.total
                    this.getArt()

                }
                else if(cod === 4){
                    if(other > this.total)
                    {
                        window.alert('大于总数据')

                    }
                    else {
                        this.mess.page=other
                        this.getArt()
                    }


                }

            },
            getArt(){
                getMess(this.mess.page).then(
                    res=>{
                        this.mess.messList=res.data.list
                    }
                )
                getTotal().then((res)=>{
                    this.total = parseInt(res.data.lenth)/12 + 1
                })
            },
            delOne(id){
                delById(id).then((res)=>{
                    window.alert(res.data.message)
                })
                this.mess.messList.forEach((item,index)=>{
                    if(item._id===id){
                        this.mess.messList.splice(index,1)
                    }
                })

            }
        },
        created() {
            this.getArt()
        }
    }
</script>

<style scoped>
    .art{
        width: 100%;
        position: relative;
    }
    .art a{
        position: absolute;
        width: 100px;
        top:20px;
        right: 0;
        color: red;
        cursor: pointer;
    }
    .art a:hover{
        color: #eeeeee;
    }

</style>