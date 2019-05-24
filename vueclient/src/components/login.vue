<template>
    <div class="login">

        <Card>
            <form @submit.prevent="register()" class="clearfix">
                <Divider orientation="left">{{$t('login')}}</Divider>
                <Input v-model="id" size="large" placeholder="User Name" clearable />
                <Input v-model="pd" size="large" type="password" placeholder="Password" clearable />
                <Input v-model="captchaInp" size="large" placeholder="Captcha" clearable style="width:186px;" />
                <img :src="captcha" alt="captcha" @click="captcha = captcha + Math.floor(Math.random()*10 + 1)">
                <Button type="primary" long size="large" @click="register()">Register</Button>
            </form>
        </Card>
    </div>
</template>
<script>
export default {
  name: 'App',
  data(){
      return{
          loading:false,
          id: '',
          pd: '',
          captcha:'http://localhost:3000/captcha?',
          captchaInp:''
      }
  },
  created:function() {

  },
  methods:{
      register(){
            // this.$api.post('http://localhost:3000/register',{id:this.id,pd:this.pd}).then(function(res){
            //     console.log(res)
            // })

            let socket = io('http://localhost:80');
            // socket.emmit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
            socket.emmit('client message', {msg:'hi, server'});
            // socket.on()用于接收服务端发来的消息
            socket.on('connect',  ()=>{
                console.log('client connect server');
            });
            socket.on('disconnect', ()=>{
                console.log('client disconnect');
            });

      }
  }
}
</script>
