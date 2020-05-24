<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        width: 100%;
        height: 49px;
        box-shadow: 0px 1px #2c3e50;
        }
    .left,.center,.right{
        font-size: 14px;
        height: 49px;
    }
    .left{
            width: 40%;

        }
    .center{
        line-height: 49px;
        width:50%;
        display: flex;
        cursor: pointer;

    }
    .right{

        width: 10%;

    }
</style>