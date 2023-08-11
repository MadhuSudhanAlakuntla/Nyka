<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    /> -->

    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
      rel="stylesheet"
    />

    <title>Payment</title>
    <style>
      body {
        background-color: #f3f3f3;
      }
      .container {
        padding-top: 10px;
        width: 80%;
        height: 500px;
        background-color: #f3f3f3;
        margin: auto;
        margin-top: 40px;
      }
      .alert > p {
        text-align: left;
        margin: 10px;
        padding-top: 5px;
        vertical-align: top;
        overflow: hidden;
      }

      .alert > div > img {
        width: 20px;
        height: 20px;
        margin-top: 10px;
        margin-left: 15px;
        margin-top: 14px;
        /* margin-right: 30px; */
      }
      .alert {
        display: flex;
        /* margin-top: 10px; */
        /* margin-left: 30px; */
        margin-right: 30px;
        background-color: #e0edff;
        height: 46px;
        line-height: 20px;
        vertical-align: middle;
        margin-left: 30px;
        border-radius: 8px;
      }
      .choose {
        margin: 10px;
        margin-left: 50px;
      }
      .maincol {
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        padding-left: 24px;
        padding-right: 24px;
      }
      .col1 > div > p {
        margin: 0;
        padding-top: 15px;
        padding-left: 15px;
      }
      .col1 > div:hover {
        border-right: rgb(255, 173, 200) solid 4.5px;
        cursor: pointer;
      }
      .col1 > div {
        /* width: 50px; */
        height: 50px;
        margin: 0;
        border-bottom: rgb(218, 218, 218) solid 0.5px;
        border-right: rgb(255, 255, 255) solid 4.5px;
        /* padding-left: 20px; */
      }
      .col1 {
        width: 23%;
        min-width: 160px;
        margin-right: 10px;
        background-color: rgb(255, 255, 255);
        height: 355px;
        padding-left: 14px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px;
      }
      .col2 {
        padding: 10px;
        margin-right: 10px;
        width: 40.7%;
        min-width: 320px;
        /* height: ; */
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px;
        /* max-height: 335px; */
      }
      .col3 {
        width: 28%;
        /* min-width: 180px; */
        background-color: white;
        /* margin-left: 10px; */
        /* margin-right: 30px; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px;
        padding: 15px;
      }
      #itemcnt {
        font-weight: bolder;
        color: #fea838;
        display: flex;
        padding: 0;
        margin: 0;
        padding-bottom: 14px;
        margin-bottom: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      .vetalgn {
        /* vertical-align: top; */
        display: flex;
        padding: 0%;
        margin: 0;
      }
      #datacnt {
        margin: 0;
        padding: 0;
      }
      .placeEnd {
        color: #fc2779;
        margin-left: 37%;
        /* font-weight: bolder; */
      }
      #placeEndd {
        color: #fc2779;
        margin-left: 58%;
        font-weight: bolder;
        /* vertical-align: top; */
        /* padding-top: -5px; */
      }
      #gtotl {
        padding: 0;
        margin: 0;
        margin-bottom: 14px;
        display: flex;
        padding-bottom: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      #addr {
        display: flex;
        /* background-color: #f3f3f3; */
      }
      #change {
        margin-left: 33%;
        color: #fc2779;
        font-weight: bolder;
        font-size: 12px;
      }
      #itemdetails {
        width: 100%;
        height: 190px;
        background-color: rgb(255, 255, 255);
        margin-bottom: 14px;
        overflow: scroll;
        /* display: none; */
        display: flex;
      }
      #details > div {
        margin-bottom: 16px;
      }
      #details {
        margin-top: 38px;
        margin-left: 10px;
      }
      #imgid {
        width: 100%;
        height: 120px;
      }
      #imgdiv {
        margin-top: 10%;
        margin-left: 10px;
        width: 45%;
        height: 120px;
        background-color: greenyellow;
      }
      .ttyy {
        margin-top: -10;
        /* background-color: hotpink; */
      }
      .ckbox {
        display: flex;
        margin: 16px;
        padding-top: 0;
        vertical-align: top;
        margin-left: 16px;
        margin-top: 20px;
      }
      /* --------------------------------------------- */
      .col2 > div:nth-child(2) > input:focus {
        border: none;
        margin-bottom: 14px;
      }
      .col2 > div:nth-child(2) > input {
        border: none;
        width: 80%;
      }
      .col2 > div:nth-child(2) {
        padding: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      /* --------------------------------------------------- */
      /* --------------------------------------------- */
      .col2 > div:nth-child(3) > input:focus {
        border: none;
        margin-bottom: 14px;
      }
      .col2 > div:nth-child(3) > input {
        border: none;
        width: 80%;
      }
      .col2 > div:nth-child(3) {
        padding: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      /* --------------------------------------------------- */
      /* --------------------------------------------- */
      .col2 > div:nth-child(4) > input:focus {
        border: none;
        margin-bottom: 14px;
      }
      .col2 > div:nth-child(4) > input {
        border: none;
        width: 80%;
      }
      .col2 > div:nth-child(4) {
        padding: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      /* --------------------------------------------------- */
      /* --------------------------------------------- */
      .col2 > div:nth-child(5) > input:focus {
        border: none;
        margin-bottom: 14px;
      }
      .col2 > div:nth-child(5) > input {
        border: none;
        width: 80%;
      }
      .col2 > div:nth-child(5) {
        padding: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      /* --------------------------------------------------- */
      /* --------------------------------------------- */
      .col2 > div:nth-child(6) > input:focus {
        border: none;
        margin-bottom: 14px;
      }
      .col2 > div:nth-child(6) > input {
        border: none;
        height: 70px;
        width: 80%;
      }
      .col2 > div:nth-child(6) {
        padding: 14px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      /* --------------------------------------------------- */
      .col2 > div:nth-child(1) {
        padding: 11px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      #expiry {
        margin-top: 14px;
        margin-left: 20px;
        display: flex;
      }
      #crdinp > input {
        width: 120px;
        border: none;
        margin: 10px;
        margin-left: 0;
      }
      #crdinp {
        display: flex;
      }
      #paynow {
        width: 89%;
        height: 45px;
        background-color: #fc2779;
        font-size: 16px;
        font-weight: bolder;
        color: white;
        border: none;
        margin-left: 5%;
        margin-top: 3%;
      }
      #icon {
        width: 100px;
        height: 30px;
        margin-left: 200%;
        margin-top: 20px;
      }
      nav {
        margin-top: -1%;
        margin-left: -1%;
        padding: 0;
        display: flex;
        width: 102%;
        background-color: white;
        padding: 1%;
        /* justify-content: space-around; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px 0px;
      }
      #space {
        margin-left: 300px;
      }
      .topnav {
        padding-left: 20px;
        padding-right: 20px;
        margin-left: 80px;
        margin-top: 20px;
        border-left: thistle solid 0.5px;
        border-right: thistle solid 0.5px;
      }
      #mainn {
        border-bottom: #fc2779 solid 6px;
      }
      button:hover {
        cursor: pointer;
      }
      #subtotal {
        display: flex;
      }
      #Shipping {
        display: flex;
      }
      #discount {
        display: flex;
        color: rgb(62, 182, 62);
      }
      #totaldiv > div {
        margin-top: 14px;
        margin-bottom: 14px;
      }
      #totaldiv {
        margin-bottom: 5px;
        padding-bottom: 10px;
        border-bottom: solid rgb(202, 199, 199) 0.5px;
      }
      #subtotaldata {
        margin-left: 65%;
      }
      #shipdata {
        margin-left: 49%;
      }
      #disdataa {
        margin-left: 67.5%;
      }
      #fotter > img {
        margin-top: 30px;
        /* margin-left: -10%; */
        width: 100%;
      }
    </style>
  </head>
  <body>
    <nav>
      <div>
        <img
          id="icon"
          src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg"
          alt=""
        />
      </div>
      <div id="space"></div>
      <div class="topnav">1-Login</div>
      <div id="mainn" class="topnav">2-Address</div>
      <div class="topnav">3-Payment</div>
    </nav>
    <div class="container">
      <!-- <div class="alert">
        <div>
          <img
            src="https://cdn-icons.flaticon.com/png/512/5379/premium/5379443.png?token=exp=1639635712~hmac=7a1c69b2f0377be222186491cee7d310"
            alt=""
          />
        </div>
        <p>
          Please use a digital payment method & help us ensure contactless
          delivery for your safety
        </p>
      </div>
      <div class="choose">CHOOSE PAYMENT METHOD</div> -->
      <div class="maincol">
        <div class="col1">
          <div><p>Saved Address</p></div>
          <div><p>New Address</p></div>
          <!-- <div><p>GooglePay</p></div> -->
          <!-- <div><p>Net Banking</p></div>
          <div><p>Mobile Wallets</p></div>
          <div><p>Cash on Delivery</p></div>
          <div><p>Gift Card</p></div> -->
        </div>
        <div class="col2">
          <div>New Address</div>
          <div><input placeholder="COUNTRY" type="text" /></div>
          <div><input placeholder="NAME" type="text" /></div>
          <div><input placeholder="PHONE NUMBER" type="number" /></div>
          <div><input placeholder="PIN NUMBER" type="number" /></div>
          <div><input placeholder="ADDRESS" type="text" /></div>
          <!-- <div id="expiry">
            <div>
              <div>Expiry</div>
              <div id="crdinp">
                <input placeholder="MM____/ YY____" type="number" /><input
                  placeholder="CVV___"
                  type="number"
                />
              </div>
            </div>
            <div>
              <div><img src="" alt="" /></div>
              <div style="color: rgb(158, 158, 158)">
                last 3 Digits at the <br />
                back of the Card
              </div>
            </div>
          </div> -->
          <div class="ckbox">
            <input type="checkbox" />
            <div>Use this as my default Shipping Address</div>
          </div>
          <button onclick="pay()" id="paynow">SHIP TO THID ADDRESS ></button>
        </div>
        <div class="col3">
          <div id="itemcnt">
            <div class="vetalgn">
              <p id="datacnt">1</p>
              &nbsp items in the bag
            </div>
            <div class="placeEnd">Details</div>
            <div style="color: #fc2779" class="material-icons-outlined ttyy">
              expand_less
            </div>
          </div>
          <!-- ------------------------------------- -->
          <div id="itemdetails">
            <div id="imgdiv"><img id="imgid" src="" alt="" /></div>
            <div id="details">
              <div id="name">some Random text</div>
              <div id="weight">random weight</div>
              <div>Qty : 1</div>
            </div>
          </div>
          <div id="pricedetail"></div>
          <div id="totaldiv">
            <div id="subtotal">
              <div>Sub Total</div>
              <div id="subtotaldata">Sub Total</div>
            </div>
            <div id="Shipping">
              <div>Shipping Charges</div>
              <div id="shipdata">Free</div>
            </div>
            <div id="discount">
              <div id="disdata">Discount</div>
              <div id="disdataa">data</div>
            </div>
            <div></div>
          </div>
          <div id="gtotl">
            <div style="font-weight: bolder; padding-top: 5px">Grand Total</div>
            <div id="placeEndd">
              ₹1338
              <div class="material-icons-outlined ttyy">expand_less</div>
            </div>
          </div>

          <!-- <div id="addr">
            <div>SHIPPING ADDRESS</div>
            <div id="change">CHANGE</div>
          </div> -->
        </div>
      </div>
    </div>
    <div id="fotter">
      <img src="https://i.ibb.co/jfg3mD2/FOOTER.jpg" alt="" />
    </div>
  </body>
</html>
<script>
  let crtdata = JSON.parse(localStorage.getItem("CartItemnykaa")) || [];
  let count = JSON.parse(localStorage.getItem("datacount")) || 1;
  let img = document.getElementById("imgid");
  let name = document.getElementById("name");
  let weight = document.getElementById("weight");
  weight.textContent = crtdata.MRPcut;
  name.textContent = crtdata.product_name;
  img.setAttribute("src", crtdata.image_url);
  console.log(crtdata);
  let subtl = document.getElementById("subtotaldata");
  subtl.textContent = crtdata.MRPcut;
  let tl = document.getElementById("disdataa");
  tl.textContent = crtdata.discountsort + "%";
  let gtt = document.getElementById("placeEndd");
  gtt.textContent = crtdata.MRP;

  //   { item:1,
  //   trend:"FEATURED",
  //   product_name:"Beardo Hair Growth Oil",
  //   MRPcut:"₹750",
  //   MRP:"₹585",
  //   MRPsort:585,
  //   discount:"22% Off",
  //   discountsort:22,
  //   total:"(400)",
  //   image_urls:"img/star4.png",
  //   image_urlheart:"img/heart.png",
  //   image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo-hair-growth-oil.jpg",
  // },

  function pay() {
    // alert("Order Placed Successfully");
    window.location.href = "payment.html";
  }
</script>
