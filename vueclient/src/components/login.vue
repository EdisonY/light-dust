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
          this.$api.post('http://localhost:3000/register',{id:this.id,pd:this.pd}).then(function(res){
              console.log(res)
          })

      }
  }
}
</script>
