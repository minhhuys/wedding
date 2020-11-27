<template>
  <div class="wedding-info has-text-centered">
    <div class="wedding-info__content">
      <p class="wedding-info__title">Hôn lẽ sẽ được cử hành tại tư gia</p>
      <img src="@/assets/images/crow.png" alt="" />

      <h3>Trung tâm hội nghị tiệc cưới</h3>
      <p class="wedding-info__address">{{ info.location }}</p>
      <p class="wedding-info__address-detail" v-html="info.detail"></p>
      <img class="crow-2" src="@/assets/images/crow2.png" alt="" />
      <br />
      <p class="wedding-info__time">{{ info.time }}</p>
      <p class="wedding-info__date">{{ info.date }}</p>
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

      <span class="wedding-appriciate"
        >Sự hiện diện của Quý khách <br />
        là niềm vinh hạnh cho gia đình chúng tôi</span
      >

      <div class="wedding-participate">
        <input
          type="text"
          class="participant-name"
          placeholder="Tên quý khách"
        />

        <button>Tham dự</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
    };
  },
  methods: {
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
  },
  mounted() {
    this.estimateTime();
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

      input {
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
</style>
