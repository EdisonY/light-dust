import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

const state = {
    mainState:true
}
const getters = {
    getMain(state){
        return state.mainState
    }
}
const mutations = {
    changeMain(state){
        state.mainState = !state.mainState
    }
}
const actions = {
    comMain(context){
        context.commit('true')
    }
}


const store = new Vuex.Store({
    state,getters,mutations
})

export default store;
