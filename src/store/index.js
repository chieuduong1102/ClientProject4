
import Vue from "vue";
import Vuex from "vuex";


// import article from "./article.module";
// import profile from "./profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        name : "HO BookStore"
    },
    getters : {
        getName: function(state){
            return state.name;
        }
    },
    mutations: {
        setName(state, name){
            state.name = name;
        }
    },
    actions: {
        updateName(context){
            context.commit('setName','Cửa hàng sách')
        }
    }
});