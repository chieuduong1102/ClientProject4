import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      cart: window.localStorage.getItem('cart') != null ? window.localStorage.getItem('cart') : [],
      name : "HO BookStore"
   },
   getters: {
      getName: function(state){
         return state.name;
     }
   },
   mutations: {
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
         if(!arrayItemCart){
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