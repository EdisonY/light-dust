<template>
    <div class="wifi subMain">
        1
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return{
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

    }
}
</script>
