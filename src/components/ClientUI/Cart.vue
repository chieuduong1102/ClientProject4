<template>
  <div>
    <HeaderHome />
    <div class="breadcrumbs-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcrumb-single blog_top_area">
              <ul id="breadcrumbs">
                <li>
                  <a href="HomePage"><i class="fa fa-home"></i>Home</a>
                </li>
                <li><span>Ι</span></li>
                <li>Shopping Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping_cart_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="shopping-cart-table">
              <table class="cart_items">
                <tr>
                  <th>Remove</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Edit</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                <tr>
                  <td>
                    <a href="#"
                      ><img
                        src="../../assets/css/img/arrow/btn_trash.gif"
                        alt=""
                    /></a>
                  </td>
                  <td>
                    <a href="#"
                      ><img src="../../assets/css/img/product/pr6.png" alt=""
                    /></a>
                  </td>
                  <td><a href="#">Pellentesque hendrerit</a></td>
                  <td><a href="#">Edit</a></td>
                  <td>$8.00</td>
                  <td>
                    <input
                      name="cart[390][qty]"
                      value="1"
                      size="4"
                      title="Qty"
                      class="input-text qty"
                    />
                  </td>
                  <td>$8.00</td>
                </tr>
                <tr>
                  <td>
                    <a href="#"
                      ><img
                        src="../../assets/css/img/arrow/btn_trash.gif"
                        alt=""
                    /></a>
                  </td>
                  <td>
                    <a href="#"
                      ><img src="../../assets/css/img/product/pr7.png" alt=""
                    /></a>
                  </td>
                  <td><a href="#">Pellentesque hendrerit</a></td>
                  <td><a href="#">Edit</a></td>
                  <td>$7.00</td>
                  <td>
                    <input
                      name="cart[390][qty]"
                      value="1"
                      size="4"
                      title="Qty"
                      class="input-text qty"
                    />
                  </td>
                  <td>$12.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row button_cart">
	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="shopping_button">
          <button type="button" title="shop">Continue Shopping</button>
        </div>
        <div class="shopping_button">
          <button type="button" title="shop">Clear Shopping Cart</button>
        </div>
      </div>
    </div>
    <!--End Shopping Cart top area -->
    <!--Start Estimate Shipping,Discount,Total checkout area -->
    <div class="cart-collaterals-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="shopping_details_des">
              <h2>Estimate Shipping and Tax</h2>
              <h3>Enter your destination to get shipping and tax.</h3>
              <div class="shopping_form">
                <h4>Country<span>*</span></h4>
                <select
                  name="country_id"
                  id="country"
                  class="validate-select"
                  title="Country"
                >
                  <option value="AF">Afghanistan</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                <h4>State/Province</h4>
                <select
                  id="region_id"
                  name="region_id"
                  title="State/Province"
                  class="required-entry validate-select"
                >
                  <option value="">
                    Please select region, state or province
                  </option>
                  <option value="1">Alabama</option>
                  <option value="2">Wyoming</option>
                </select>
                <h4>Zip/Postal Code</h4>
                <input
                  class="input-text validate-postcode"
                  type="text"
                  name="estimate_postcode"
                  value=""
                />
                <div class="review_button product_tag_add">
                  <button type="submit" title="Submit Review" class="button">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="total_price">
              <table class="total_rate">
                <tr>
                  <td>Subtotal</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <th>Grand Total</th>
                  <th>$19.00</th>
                </tr>
              </table>
            </div>
            <div class="check_out_simble review_button">
              <button type="submit" title="Submit Review" class="button">
                Checkout
              </button>
              <h2><a href="">Checkout with Multiple Addresses</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "../ClientComponents/HeaderHome.vue";
import FooterHome from "../ClientComponents/FooterHome.vue";

export default {
  setup() {
    return {};
  },
  components: {
    HeaderHome,
    FooterHome,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 20px;
}
.shopping_cart_area {
  margin-top: 0px;
}
.button_cart{
	margin-top: 20px;
	text-align: center;
}
</style>