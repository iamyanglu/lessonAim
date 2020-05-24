<template>
    <div class="navItem" @click="toPath">
        {{txt}}
    </div>
</template>

<script>
    export default {
        name: "navbar",
        props:{
            txt:{
                type:String,
                default:'未传入'
            },
            path:{
                type:String,
                default: '/'
            }
        },
        methods:{

            toPath(){

                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .navItem{
        flex: 1;
        font-size: 14px;
        display: inline-block;

    }
    .navItem:hover{
        color: darkred;
    }

</style>