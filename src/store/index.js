
import Vue from "vue";
import Vuex from "vuex";


// import article from "./article.module";
// import profile from "./profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        orderDetail: {},
        cart: window.localStorage.getItem('cart') != null ? window.localStorage.getItem('cart') : [],
    },
    getters: {
        getOrderDetail: function (state) {
            return state.orderDetail;
        }
    },
    mutations: {
        setOrderDetail(state, orderDetail) {
            state.orderDetail = orderDetail;
        },
        addToCart(state, { item, quantity }) {
            let arrayItemCart = [];

            if (window.localStorage.getItem('cart') != null) {
                arrayItemCart = JSON.parse(window.localStorage.getItem('cart'));
            }

            let found = arrayItemCart.find(product => product.bid == item.bid);

            if (found) {
                for (let i = 0; i < arrayItemCart.length; i++) {
                    if (arrayItemCart[i]['bid'] == item.bid) {
                        arrayItemCart[i]['quantity'] += parseInt(quantity);
                    }
                }
            } else {
                let newItem = { bid: item.bid, title: item.titleBook, price: item.price, quantity: parseInt(quantity), image: item.imageList[0]['nameFile'] }
                arrayItemCart.push(newItem);
            }

            window.localStorage.setItem('cart', JSON.stringify(arrayItemCart));
        },
        removeItem(state, bid) {
            let arrayItemCart = JSON.parse(window.localStorage.getItem('cart'));
            arrayItemCart = arrayItemCart.filter(product => product.bid != bid);
            if (!arrayItemCart) {
                arrayItemCart = [];
            }
            window.localStorage.setItem('cart', JSON.stringify(arrayItemCart));
        },
        clearCart() {
            window.localStorage.removeItem('cart');
        },
        changeQuantity(state, { bid, quantity }) {
            let arrayItemCart = JSON.parse(window.localStorage.getItem('cart'));

            for (let i = 0; i < arrayItemCart.length; i++) {
                if (arrayItemCart[i]['bid'] == bid) {
                    arrayItemCart[i]['quantity'] = parseInt(quantity);
                }
            }
            window.localStorage.setItem('cart', JSON.stringify(arrayItemCart));
        },
    },
    actions: {
        changeOrderDetail(context, orderDetail) {
            console.log(orderDetail);
            context.commit('setOrderDetail', orderDetail)

        },
        // changeOrderDetail(){
        //     //context.commit('setOrderDetail',orderDetail)
        //     console.log("changeOrderDetail")
        // }
    }
});
