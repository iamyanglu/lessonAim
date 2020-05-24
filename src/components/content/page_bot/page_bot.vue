<template>
    <div class="pageItem">
    <div  class="page">

        <div @click="toIndex">首页</div>
        <div @click="toPre">上一页</div>

        <div @click="toNext">下一页</div>
        <div @click="toTail">尾页</div>
        <div class="input">跳转到</div><input v-model="page"/><a type="button" class="button" @click="toPage">跳转</a>
    </div>
    </div>
</template>

<script>
    export default {
        name: "page_bot",
        data(){
            return{
                page:0
            }
        },
        methods:{
            toIndex(){
                this.$emit('toPage',0)
            },
            toPre(){
                this.$emit('toPage',1)
            },
            toNext(){
                this.$emit('toPage',2)
            },
            toTail(){
                this.$emit('toPage',3)
            },
            toPage(){
                this.$emit('toPage',4,this.page)
            }
        }
    }
</script>

<style scoped>
.page {
    position: relative;
}
.page div{
    display: inline-block;
    margin-left: 30px;
    font-size: 10px;
    width: 50px;
    line-height: 20px;
    text-align: center;
    height: 20px;
    background-color: #2c3e50;
    cursor: pointer;
}
.page button{
    width: 40px;
    height: 20px;
}
.page input{
    margin-left: 30px;
    margin-right: 20px;
    width: 20px;
    height: 20px;
}
    .input{
        width: 100px;
    }
    .button{
        display: inline-block;
        line-height: 20px;
        width: 40px;
        height: 20px;
        font-size: 14px;
        text-align: center;
        background-color: red;
    }
    .pageItem{
        display: flex;
       justify-content: center;
    }
</style>