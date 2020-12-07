<template>
  <div class="wedding-info has-text-centered">
    <div class="wedding-info__content">
      <p class="wedding-info__title">Buổi tiệc sẽ được diễn ra tại</p>
      <img src="@/assets/images/crow.png" alt />

      <h3>Trung tâm hội nghị tiệc cưới</h3>
      <p class="wedding-info__address">{{ info.location }}</p>
      <p class="wedding-info__address-detail" v-html="info.detail"></p>
      <img class="crow-2" src="@/assets/images/crow2.png" alt />
      <br />
      <p class="wedding-info__time">{{ info.time }}</p>
      <p class="wedding-info__date">{{ info.date }}</p>
      <div v-if="!info.isHappened">
        <span class="wedding-info__time-left-text">Chỉ còn</span>

        <div class="count-time">
          <div>
            <p>{{ days > 9 ? days : `0${days}` }}</p>
            <span>Ngày</span>
          </div>
          <div>
            <p>{{ hours > 9 ? hours : `0${hours}` }}</p>
            <span>Giờ</span>
          </div>
          <div>
            <p>{{ minutes > 9 ? minutes : `0${minutes}` }}</p>
            <span>Phút</span>
          </div>
          <div>
            <p>{{ seconds > 9 ? seconds : `0${seconds}` }}</p>
            <span>Giây</span>
          </div>
        </div>

        <span class="wedding-appriciate">
          Sự hiện diện của Quý khách
          <br />là niềm vinh hạnh cho gia đình chúng tôi
        </span>

        <div class="wedding-participate" v-if="!isJoined">
          <input
            v-model="name"
            type="text"
            class="participant-name"
            placeholder="Tên quý khách"
            @input="handleChangeName"
          />

          <select
            id="location"
            name="location"
            v-model="location"
            @input="handleChangeLocation"
          >
            <option value disabled selected hidden>
              Chọn địa điểm tham dự... 
            </option>
            <!-- <option value="Hanoi">Hà Nội</option> -->
            <option value="Saigon">Sài Gòn</option>
          </select>

          <p class="error" v-if="isError">
            Vui lòng nhập đầy đủ thông tin trước khi xác nhận!
          </p>

          <button @click="join">Tham dự</button>
        </div>

        <div class="wedding-thanksful" v-else>
          <div class="thanksful-title" id="confeti">
            <img src="@/assets/images/cracker.png" alt />
            <p>Cảm ơn bạn đã xác nhận sự tham dự</p>
          </div>
          <div class="add-to-calendar">
            <p>Thêm sự kiện này vào calendar của bạn</p>
            <button @click="addToCalendar">
              <img src="@/assets/images/calendar.png" alt />
              <p>Thêm ngay</p>
            </button>
          </div>
        </div>
      </div>
      <p class="happened" v-else>----- Đã diễn ra -----</p>
    </div>
  </div>
</template>

<script>
const IS_JOINED = "is_joined";
export default {
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    isHappened() {
      return this.days < 0 && this.hours < 0 && this.minutes < 0 && this.seconds < 0
    }
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
      location: "",
      name: null,
      isError: false,
      isJoined: false,
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

    estimateTime() {
      const countDownDate = new Date(this.info.timeToCountDown).getTime();
      this.timer = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },

    handleChangeLocation($e) {
      this.isError = false;
      this.location = $e.target.value;
    },

    handleChangeName($e) {
      this.isError = false;
      this.name = $e.target.value;
    },

    join() {
      if (!this.name && !this.location) {
        return (this.isError = true);
      }
      this.setCookie(IS_JOINED, true, 30);
      this.isJoined = true;
    },

    addToCalendar() {
      this.$emit("addToCalendar", this.location);
    },
  },

  watch : {
    isHappened(newVal) {
      if(newVal) {
        this.$emit('isHappened', this.info.id)
      }
    }
  },

  mounted() {
    this.estimateTime();

    let cookie = this.getCookie(IS_JOINED);
    if (cookie) {
      this.isJoined = true;
    }
  },

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="scss" scoped>
.wedding-info {

  .happened {
    font-size: 30px;
    color: #c0690a;
    margin: 20px 0;
  }

  .wedding-info__content {
    max-width: 435px;
    margin: 0 auto;

    .wedding-info__title {
      margin: 20px 0 15px 0;
      color: #7f828b;
    }

    h3 {
      margin: 10px 0;
      text-transform: uppercase;
      color: #0a1332;
      font-size: 16px;
    }

    .wedding-info__address {
      font-size: 36px;
      color: #c0690a;
    }
    .wedding-info__address-detail,
    .wedding-info__time-left-text {
      font-size: 16px;
      color: #0a1332;
    }

    .crow-2 {
      margin: 16px 0;
    }

    .wedding-info__time {
      margin-bottom: 16px;
    }

    .wedding-info__date {
      font-size: 24px;
      color: #c0690a;
      text-transform: uppercase;
      padding: 12px 0;
      border-top: 0.5px solid #c0690a;
      border-bottom: 0.5px solid #c0690a;
      margin-bottom: 16px;
    }

    .wedding-appriciate {
      font-size: 16px;
      color: #7f828b;
    }

    .wedding-participate {
      margin-top: 20px;

      .error {
        color: red;
        font-size: 12px;
        text-align: left;
        margin-top: 10px;
      }

      input {
        margin-bottom: 16px;
      }

      input,
      select {
        width: 100%;
        height: 56px;
        background-color: #f0f1f1;
        border-radius: 4px;
        font-size: 16px;
        line-height: 24px;
        border: none;
        outline: none;
        padding: 0 15px;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: "";
      }

      button {
        margin: 20px 0 30px 0;
        width: 100%;
        height: 56px;
        font-size: 18px;
        background-color: #dd902c;
        border-radius: 2px;
        border: none;
        outline: none;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .wedding-thanksful {
      margin: 20px 0;
      max-width: 430px;
      border: 1px solid #c0690a;
      border-radius: 2px;

      .thanksful-title {
        height: 65px;
        line-height: 65px;
        background: #fbf9ef;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          margin-right: 8px;
        }

        p {
          font-weight: 600;
        }
      }
      .add-to-calendar {
        display: flex;
        margin: 16px 0;
        padding: 0 16px;

        p {
          font-size: 14px;
        }
        p,
        button {
          width: 50%;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dd902c;
          border: none;
          outline: none;
          height: 40px;
          color: white;
          font-weight: 600;
          border-radius: 2px;
        }
      }
    }
  }
  .count-time {
    display: flex;
    margin-bottom: 20px;
    margin-top: 16px;
    div {
      width: 25%;

      p {
        color: #d74721;
        font-size: 24px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .wedding-info {
    .wedding-info__content {
      .wedding-thanksful {
        .add-to-calendar {
          p {
            font-size: 12px;
          }

          button {
            img {
              margin-right: 5px !important;
            }
          }

          
          padding: 0 10px;
        }

        .thanksful-title {
          p { 
            font-size: 12px;;
          }
        }
      }
    }
  }
}
</style>
