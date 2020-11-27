<template>
  <div class="wedding-card__wishes">
    <div class="wedding-card__image">
      <img src="@/assets/images/baotran-rotate.png" alt="" />
    </div>
    <div class="wedding-card__wish-form">
      <div class="wish-form">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      message: "",
      isError: false,
    };
  },
  methods: {
    async submit() {
      if (!this.name || !this.phone || !this.message) {
        return (this.isError = true);
      }

      let data = {
        name: this.name,
        phone: this.phone,
        message: this.message,
      };

      let response = await fetch(
        "https://apistg.ahamove.com/web/wedding/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        }
      );

      let result = await response.json();
      console.log("result", result);
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
};
</script>

<style lang="scss" scoped>
.wedding-card__wishes {
  display: flex;
  height: 680px;
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

  .wish-form {
    max-width: 500px;
    background-color: white;
    padding: 25px;
    margin: 0 auto;
    h3 {
      text-align: center;
      margin-bottom: 20px;
      color: #c0690a;
      font-size: 24px;
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
}

@media screen and (max-width: 480px) {
  .wedding-card__wishes {
    display: inline-block;
    padding-left: 12px;
    padding-right: 12px;
    height: 980px;
    padding: 50px 0;

    .wedding-card__wish-form,
    .wedding-card__image {
      width: 100%;

      .wish-form {
        max-width: 100%;
      }
    }
  }
}
</style>
