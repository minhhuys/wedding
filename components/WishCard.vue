<template>
  <div class="wedding-card__wishes">
    <div
      class="wedding-card__image"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <img src="@/assets/images/baotran-rotate.png" alt />
    </div>
    <div class="wedding-card__wish-form">
      <div class="wish-form" v-if="!isMessaged">
        <h3>Gửi lời chúc</h3>

        <input
          type="text"
          name="participant-name"
          placeholder="Tên của quý khách"
          v-model="name"
          @input="onChangeName"
        />
        <input
          type="number"
          name="participant-phone"
          placeholder="Số điện thoại"
          v-model="phone"
          @input="onChangePhone"
        />
        <textarea
          name="participant-wish"
          cols="30"
          rows="8"
          placeholder="Lời chúc"
          v-model="message"
          @input="onChangeMessage"
        ></textarea>

        <p v-if="isError" class="note">
          Vui lòng điền đủ thông tin để nhận quà bất ngờ từ chúng tôi
        </p>

        <button @click="submit">Gửi ngay</button>
      </div>

      <div class="promotion" v-else>
        <h3>Chân thành cảm ơn bạn đã gửi lời chúc</h3>

        <div class="code">
          <div class="ticket">
            <div>
              <img src="@/assets/images/box.gif" width="90" height="90" alt />
            </div>
            <div class="code-description">
              <p>Nhập mã <b>"BAOTRINH"</b></p>
              <span>AhaMove: Giảm 30K cho 3 chuyến giao hàng</span>
              <br>
              <span>#be: Giảm 30% tối đa 30K cho 5 chuyến đi beCar hoặc beBike</span>
            </div>
          </div>
        </div>

        <p class="download-text">Tải app để sử dụng mã</p>

        <div class="onelink">
          <div class="ahamove">
            <p>AhaMove</p>
            <div class="google-play">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ahamove.user">
                <img
                  src="@/assets/images/gg-play.png"
                  width="135"
                  height="40"
                  alt
                />
              </a>
            </div>
            <div class="appstore">
              <a href="https://apps.apple.com/vn/app/ahamove/id987325355" target="_blank">
                <img
                  src="@/assets/images/appstore.png"
                  width="135"
                  height="40"
                  alt
                />
              </a>
            </div>
          </div>
          <div class="be">
            <p>#be</p>

            <div class="google-play">
              <a href="https://play.google.com/store/apps/details?id=xyz.be.customer" target="_blank">
                <img
                  src="@/assets/images/gg-play.png"
                  width="135"
                  height="40"
                  alt
                />
              </a>
            </div>
            <div class="appstore">
              <a href="https://apps.apple.com/vn/app/be-vietnamese-ride-hailing/id1440565902" target="_blank">
                <img
                  src="@/assets/images/appstore.png"
                  width="135"
                  height="40"
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const TOKEN_CNAME = "is_wished";
import useMedia from "@/mixins/useMedia";
const TOKEN_HYPE_AF_BOT = `1426025102:AAESBLMaHw7OE7szE_n54VgxRKd_yh7Mzz8`
const GROUP_ID = `-415110372`

export default {
  data() {
    return {
      name: "",
      phone: "",
      message: "",
      isError: false,
      isMessaged: false,
    };
  },
  methods: {
    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },

    async submit() {
      if (!this.name || !this.phone || !this.message) {
        return (this.isError = true);
      }

      let data = {
        name: this.name,
        phone: this.phone,
        email : this.useMedia_isMobile ? `Gửi từ mobile` : `Gửi từ PC`,
        message: this.message,
      };

      let response = await fetch(
        "https://apistg.ahamove.com/web/wedding/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      let result = await response.json();

      if (result.success) {
        this.setCookie(TOKEN_CNAME, true, 30);
        this.isMessaged = true;
      }
      // const template = 
      // `<div>User: ${data.name}</div>
      // <div>Phone: ${data.phone}</div>
      // <div>Mess: ${data.message}</div>`

      // const url = `https://api.telegram.org/bot${TOKEN_HYPE_AF_BOT}/sendMessage`; 

      // const body = JSON.stringify({
      //   chat_id: GROUP_ID,
      //   text: template,
      // });

      // let responseTelegram = await fetch(url,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       'Content-Length': body.length
      //     },
      //     data: body
      //   })
      //   .then(res => res.json())
      //   .then(response => console.log('Success:', JSON.stringify(response)))

    },
    onChangeName($e) {
      this.isError = false;
      this.name = $e.target.value;
    },
    onChangePhone($e) {
      this.isError = false;
      this.phone = $e.target.value;
    },
    onChangeMessage($e) {
      this.isError = false;
      this.message = $e.target.value;
    },
  },

  mounted() {
    let cookie = this.getCookie(TOKEN_CNAME);
    if (cookie) {
      this.isMessaged = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.wedding-card__wishes {
  display: flex;
  padding: 70px 0;
  background-color: #29365c;

  .wedding-card__wish-form,
  .wedding-card__image {
    width: 50%;
  }

  .wedding-card__image {
    text-align: center;
    img {
      max-width: 100%;
    }
  }

  .wish-form,
  .promotion {
    max-width: 500px;
    background-color: white;
    padding: 25px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;

    h3 {
      text-align: center;
      margin-bottom: 20px;
      color: #c0690a;
      font-size: 24px;
      font-family: "Prata", serif;
      font-weight: 500;
    }

    .note {
      color: red;
      font-size: 12px;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 56px;
      background-color: #f0f1f1;
      border-radius: 4px;
      font-size: 16px;
      padding-left: 15px;
      border: none;
      outline: none;
      margin-bottom: 15px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    textarea {
      width: 100%;
      resize: none;
      background-color: #f0f1f1;
      border-radius: 4px;
      font-size: 16px;
      padding: 15px;
      border: none;
      outline: none;
      margin-bottom: 15px;
    }

    button {
      width: 100%;
      height: 56px;
      background-color: #d79c4d;
      border-radius: 2px;
      color: white;
      border: none;
      font-weight: 600;
      font-size: 18px;
      font-weight: 700;
      outline: none;
      cursor: pointer;
    }
  }

  .promotion {
    height: 450px;

    h3 {
      max-width: 250px;
      margin: 0 auto;
      font-size: 20px !important;
    }
    .code {
      background-color: #fef1d9;
      padding: 5px;
      margin-top: 15px;

      .ticket {
        border: 1px solid white;
        display: flex;
        align-items: center;
        padding: 8px;

        p {
          color: #0a1332;
          font-weight: 500;
          font-size: 18px;
        }
        // span {
        //   color: #7f828b;
        //   font-size: 16px;
        // }

        .code-description {
          span {
            font-size: 13px;
            color: #7A8189;
          }
        }
      }
    }

    .download-text {
      margin: 15px 0;
      text-align: center;
      color: #0a1332;
    }

    .onelink {
      display: flex;
      text-align: center;

      .ahamove,
      .be {
        width: 50%;

        p,
        .appstore,
        .google-play {
          margin-bottom: 8px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .wedding-card__wishes {
    display: inline-block;
    padding-left: 12px;
    padding-right: 12px;
    padding: 50px 15px;

    .wedding-card__image {
      margin-bottom: 16px;
    }

    .wedding-card__wish-form,
    .wedding-card__image {
      width: 100%;

      .wish-form {
        max-width: 100%;
      }
    }

    .promotion {
      .code {
        .ticket {
          padding: 5px;
          p {
            font-size: 16px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
