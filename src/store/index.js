
import Vue from "vue";
import Vuex from "vuex";


// import article from "./article.module";
// import profile from "./profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        orderDetail : {}
    },
    getters : {
        getOrderDetail: function(state){
            return state.orderDetail;
        }
    },
    mutations: {
        setOrderDetail(state, orderDetail){
            state.orderDetail = orderDetail;
        }
    },
    actions: {
        changeOrderDetail(context, orderDetail){
            console.log(orderDetail);
            context.commit('setOrderDetail',orderDetail)
            
        },
        // changeOrderDetail(){
        //     //context.commit('setOrderDetail',orderDetail)
        //     console.log("changeOrderDetail")
        // }
    }
});