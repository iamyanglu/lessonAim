<template>
    <div>
    <mess-item v-for="item in mess.messList" :item="item"></mess-item>
        <page_bot @toPage="toPage"></page_bot>
    </div>
</template>

<script>
    import MessItem from "../../components/content/messItem/messItem";
    import {getMess,getTotal} from "../../network/request";
    import page_bot from "../../components/content/page_bot/page_bot";
    export default {
        name: "showMess",
        components: {
            MessItem,
            page_bot
        },
        data(){
 return{
     mess:{
         page:0,
         messList:[],

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
            }
        },
        created() {
          this.getArt()
        }
    }
</script>

<style scoped>

</style>