<template>
    <div class="art_item">
        <div class="tit" @click="toDetail">{{item.tit}}</div> <div class="date">{{date}}</div> <div class="content">{{item.content}}</div>
        <div class="author">Author:{{item.author}}</div>

    </div>
</template>

<script>
    export default {
        name: "messItem",
        props:['item'],
        computed:{
            date:function () {
                let date = new Date(this.item.date)
                return date.getFullYear() + '/'+ (date.getMonth()+1) + '/'+date.getDate()

            }
        },
        methods:{
            toDetail(){
                this.$router.push('/detail/'+this.item._id)
            }
        }
    }
</script>

<style scoped>
.art_item{
    border-top: 1px solid;
    margin-left: 50px;
    cursor: pointer;
    width:80%;
    height: 100px;

    margin-top: 20px;
    position: relative;

}
.art_item div{


}
.art_item  .tit{
    font-size: 20px;
    transition: all 0.5s;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.art_item .date{
    position: absolute;
    right: 2px;
    top:1px;
    width: 90px;
    height: 20px;
    font-size: 8px;

}
.art_item .author{

    position: absolute;
    right: 2px;
    bottom:5px;
    width: 90px;
    height: 20px;
    font-size: 10px;

}
.art_item .content{
    font-size: 14px;
    width: 100%;
    height: 50%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

}
.art_item  .tit:hover{
    color: red;
}
</style>