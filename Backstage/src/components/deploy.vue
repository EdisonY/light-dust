<template>
    <div class="deploy">
        <div class="leftNav">
            <img src="../assets/img/logo.png" height="64" width="190">
            <Menu :theme="theme1" @on-select="change_sub_router" :active-name="subPath" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="md-settings" />
                        平台配置
                    </template>
                    <MenuItem name="common">Common 配置</MenuItem>
                    <MenuItem name="wifi">WIFI 配置</MenuItem>
                    <MenuItem name="video">视频 配置</MenuItem>
                </Submenu>
            </Menu>
            <div class="leftBottom">
                <Icon type="ios-contact" />Admin <a href="javascript:void(0)" @click="signout()">Sign out</a>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return{
            theme1:'dark',
            subPath:''
        }
    },
    created() {
        // console.log(this.$route.params.reload + 'c')
        // if(this.$route.params.reload){
        //     var box = document.getElementsByTagName("canvas")[0];
        //     if(box){
        //         box.parentNode.removeChild(box);
        //     }
        //     document.body.style.background = '#f4f3f5'
        // }      
          
    },
    mounted() {
        // var t = setInterval(function(){
        //     var box = document.getElementsByTagName("canvas")[0];
        //     if(box){
        //         box.parentNode.removeChild(box);
        //         console.log('a')
        //         clearInterval(t)
        //     }
        // })
        var myVar = setInterval(function(){ myTimer() }, 1000);
        function myTimer() {
            var box = document.getElementsByTagName("canvas")[0];
            if(box){
                box.parentNode.removeChild(box);
                myStopFunction()
            }
        }
        function myStopFunction() {
            clearInterval(myVar);
        }
        document.body.style.background = '#f4f3f5'
        this.subPath = this.$router.history.current.name          
    },
    methods:{
        change_sub_router(e){
            this.$router.push({name : e})
        },
        signout(){
            sessionStorage.removeItem('token')
            this.$router.push({name:'login',params:{reload:1}})
        }
    }
}
</script>
