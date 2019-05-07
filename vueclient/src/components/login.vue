<template>
    <div class="login">
        <Card>
            <Divider orientation="left">{{$t('login')}}</Divider>
            <Input v-model="id" placeholder="User Name" clearable />
            <Input v-model="pd" type="password" placeholder="Password" clearable  />
            <Button size="large" type="primary" :loading="loading" @click="login()">Submit</Button>
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
          buttonSize: 'large'
      }
  },
  methods:{
      login(){
          this.$api.post('http://localhost:3000/users',{user:this.id,userPd:this.pd}).then(function(res){
              console.log(res)
          })
      }
  }
}
</script>
