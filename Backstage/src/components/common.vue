<template>
    <div class="common subMain">
        <ul>
            <li class="clearfix">
                <strong>IP地址：</strong>
                <div class="editDiv">
                    <p v-if="edit">192.168.0.0</p>
                    <Input v-if="!edit" size="large" placeholder="Enter something..." clearable />
                    <Icon v-if="!edit" type="md-add-circle" @click="addSingItem()" />   
                    <Icon v-if="!edit" type="md-remove-circle" @click="removeSingItem()" />
                </div>
            </li>
            <li class="clearfix">
                <strong>MAC地址：</strong>
                <div class="editDiv">
                    <p v-if="edit">98:5a:eb:d8:10:1e</p>
                    <Input v-if="!edit" size="large" placeholder="Enter something..." clearable />
                </div>
            </li>
            <li class="clearfix">
                <strong>质保到期：</strong>
                <div class="editDiv">
                    <p v-if="edit">2019-12-30</p>
                    <Input v-if="!edit" size="large" placeholder="Enter something..." clearable />
                </div>
            </li>
            <li class="clearfix">
                <strong>产地：</strong>
                <div class="editDiv">
                    <p v-if="edit">内蒙古</p>
                    <Input v-if="!edit" size="large" placeholder="Enter something..." clearable />
                </div>
            </li>            
            <li class="clearfix">
                <strong>维修记录：</strong>
                <div class="editDiv">
                    <p v-if="edit">无</p>
                    <Input v-if="!edit" size="large" placeholder="Enter something..." clearable />
                </div>
            </li>
            <li class="clearfix">
                <strong>&nbsp;</strong>
                <div class="editDiv">
                    <Button v-if="edit" :size="buttonSize" icon="md-create" type="primary" @click=" edit = !edit ">编辑</Button>
                    
                    <Button v-if="!edit" :size="buttonSize" type="error" @click=" edit = !edit ">取消</Button>
                    <Button v-if="!edit" :size="buttonSize" type="success" @click=" modal2 = !modal2">保存</Button>
                </div>
            </li>                               
        </ul>
        <Modal v-model="modal2" width="400">
            <p slot="header" style="color:#19be6b;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>编辑确认！</span>
            </p>
            <div style="text-align:center">
                <p>此任务提交编辑后，将覆盖原有数据</p>
                <p>确认保存?</p>
            </div>
            <div slot="footer">
                <Button type="success" size="large" long :loading="modal_loading" >保存</Button>
            </div>
        </Modal>        
    </div>
    
</template>
<script>
export default {
    name: 'App',
    data(){
        return{
            buttonSize:'large',
            edit:true,
            modal2:false,
            modal_loading:false
        }
    },
    created:function() {
        this.$Spin.show({
            render: (h) => {
                return h('div',{ 'class': 'loadinger'},[
                    h('div','L'),
                    h('div','O'),
                    h('div','A'),
                    h('div','D'),
                    h('div','I'),
                    h('div','N'),
                    h('div','G'),
                    h('div',''),
                    h('div',''),
                    h('div','')
                ])
            }
        });
        setTimeout(() => {
            this.$Spin.hide();
        }, 3000);        
    },
    mounted:function() {
        this.$nextTick(function(){
            //var box=document.getElementsByTagName("canvas")[0];
            //box.parentNode.removeChild(box);
            //box.style.opacity = '0'
            //document.body.style.background = '#fff'
        })
    },
    methods:{
        submit(){
            console.log('a')
        },
        addSingItem(){

        },
        removeSingItem(){
            
        }
    }
}
</script>
