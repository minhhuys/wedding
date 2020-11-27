<template>
  <div class="wedding">
    <div class="wedding-main">
      <div class="wedding-intro">
        <img
          v-if="!useMedia_isMobile"
          class="flower-left flower"
          src="@/assets/images/flower-left.png"
          alt=""
        />
        <img
          v-if="!useMedia_isMobile"
          class="flower-right flower"
          src="@/assets/images/flower-right.png"
          alt=""
        />

        <div class="half-circle">
          <img src="@/assets/images/top-flower.png" alt="" />
        </div>
        <img
          src="@/assets/images/ellipsis.png"
          alt=""
          v-if="!useMedia_isMobile"
        />
        <img src="@/assets/images/ellipse-mobile.png" alt="" v-else />
        <div class="bride-and-groom">
          <p>Hoài Bảo</p>
          <div>
            <img src="@/assets/images/left.png" alt v-if="!useMedia_isMobile" />
          </div>
          <p>Việt Trinh</p>
        </div>
      </div>
      <div class="wedding-title">
        <div class="wedding-text">ARE GETTING MARRIED!</div>
        <img src="@/assets/images/line.png" alt />
      </div>

      <div class="wedding-images has-text-centered">
        <div
          class="ahamove aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-delay="50"
          v-if="!useMedia_isMobile"
        >
          <img src="@/assets/images/aha.png" alt width="200" height="200" />
          <p>Hoài Bảo</p>
        </div>

        <div class="center-image">
          <img class="main-pic" src="@/assets/images/baotran.png" alt />
          <img class="flower-pic" src="@/assets/images/flower-center.png" alt />
        </div>

        <div
          class="be aos-init aos-animate"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-delay="50"
          v-if="!useMedia_isMobile"
        >
          <img src="@/assets/images/be.png" width="200" height="200" alt />
          <p>Kiều Trinh</p>
        </div>
      </div>

      <div class="wedding-information">
        <div class="wedding-invitation__card">
          <div class="tab">
            <p
              class="tablinks"
              :class="{ active: isActiveTabConent === 'Hanoi' }"
              @click="selectTab('Hanoi')"
            >
              Hà Nội
            </p>
            <p
              class="tablinks"
              :class="{ active: isActiveTabConent === 'Saigon' }"
              @click="selectTab('Saigon')"
            >
              Sài Gòn
            </p>
          </div>
          <div class="tabcontent">
            <CardInfo
              :key="isActiveTabConent"
              :info="isActiveTabConent === 'Hanoi' ? hanoi : saigon"
            />
          </div>
        </div>
      </div>

      <div class="wedding-wishes">
        <WishCard />
      </div>

      <div class="wedding-memories">
        <Album />
      </div>
    </div>
  </div>
</template>
<script>
import useMedia from "@/mixins/useMedia";
import CardInfo from "@/components/CardInfo";
import WishCard from "@/components/WishCard";
import Album from "@/components/Album";

export default {
  mixins: [useMedia],
  components: {
    CardInfo,
    WishCard,
    Album,
  },
  data() {
    return {
      isActiveTabConent: null,
      hanoi: {
        location: "VẠN HOA PREMIUM",
        detail: "<p>Tầng 4 <br>Số 2 Chương Dương Độ, Hoàn Kiếm, Hà Nội</p>",
        time: "Vào lúc 11 giờ 00",
        date: "THỨ HAI - 07 | 12 | 2020",
        timeToCountDown: "Dec 07, 2020 11:00:00",
      },
      saigon: {
        location: "THE ADORA DYNASTY",
        detail: "<p>Sảnh Ruby Tôn <br>1A Tôn Thất Tùng, Quận 1, TP HCM</p>",
        time: "Vào lúc 18 giờ 30",
        date: "THỨ SÁU - 07 | 12 | 2020",
        timeToCountDown: "Dec 11, 2020 18:30:00",
      },
    };
  },
  methods: {
    selectTab(param) {
      if (param === "Hanoi") {
        this.isActiveTabConent = "Hanoi";
      } else {
        this.isActiveTabConent = "Saigon";
      }
    },
  },
  mounted() {
    this.isActiveTabConent = "Hanoi";
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

.half-circle {
  position: absolute;
  top: -20px;
  left: 50%;
  width: 186px;
  height: 93px;
  transform: translate(-50%, -50%);
}

.bride-and-groom {
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);

  div {
    width: 40px;
    margin: 0 20px;
    img {
      max-width: 100%;
    }
  }

  p {
    font-size: 32px;
    color: #c0690a;
  }
}
.wedding {
  font-family: "Prata", serif;
  background-color: #0a1332;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  .wedding-main {
    max-width: 1200px;
    padding-top: 30px;
    margin: 0 auto;
    position: relative;

    .wedding-intro {
      position: relative;

      img {
        display: block;
      }

      .flower {
        position: absolute;
        top: 125%;
        transform: translate(-50%, -50%);
      }
      .flower-left {
        left: 3%;
      }
      .flower-right {
        right: -9%;
      }
    }

    .wedding-title {
      text-align: center;
      background-color: white;

      .wedding-text {
        font-size: 18px;
        letter-spacing: 0.3em;
        color: #0a1332;
      }
    }

    .wedding-images {
      display: flex;
      align-items: center;
      padding-bottom: 70px;
      background: white;

      p {
        color: #0e1a3c;
        font-size: 32px;
      }

      .ahamove,
      .be {
        width: 25%;
      }

      .center-image {
        width: 50%;
        min-width: 500px;
        border-radius: 50%;
        position: relative;

        img.main-pic {
          max-width: 500px;
          border-radius: 50%;
          border: 12px solid #f4eee4;
        }

        img.flower-pic {
          position: absolute;
          left: 50%;
          bottom: -25%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .wedding-information {
      padding: 70px 0;
      background-color: #fbf9ef;
      position: relative;

      background-image: url("../assets/images/bg.png");
      background-position: bottom left;
      // background-size: cover;
      background-repeat: no-repeat;

      .bg-left {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 8;
      }

      .bg-right {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 8;
      }

      .wedding-invitation__card {
        background-color: white;
        box-shadow: 0px 8px 40px rgba(175, 145, 100, 0.1);
        border-radius: 8px;
        max-width: 600px;
        margin: 0 auto;
        z-index: 9999;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .bride-and-groom {
    width: 100%;
    top: 75%;
    p {
      font-size: 20px;
      color: #af9164;
    }
  }
  .wedding {
    .wedding-main {
      .wedding-intro {
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
      .wedding-title {
        .wedding-text {
          font-size: 14px;
          padding-top: 8px;
        }
      }
      .wedding-images {
        padding-bottom: 40px;
        .center-image {
          min-width: 345px;
          width: 100%;

          img.main-pic {
            max-width: 345px;
          }

          img.flower-pic {
            bottom: -30%;
            max-width: 163px;
          }
        }
      }

      .wedding-information {
        padding: 50px 12px;
        background-size: contain;
      }
    }
  }
}

@media screen and (max-width: 350px) {
  .wedding-images {
    .center-image {
      min-width: 310px !important;
      width: 100%;

      img.main-pic {
        max-width: 310px !important;
      }
    }
  }
}
</style>

<style lang="scss">
/* Style the tab */
.tab {
  overflow: hidden;
  border-bottom: 1px solid #dfddd9;
  display: flex;
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    cursor: pointer;
    width: 50%;
    text-align: center;
    padding: 15px 0;
    font-size: 16px;
  }

  p.active {
    color: #c79e61;
    border-bottom: 2px solid #c79e61;
  }
}

.tabcontent {
  padding: 6px 12px;
  -webkit-animation: fadeEffect 1s;
  animation: fadeEffect 1s;
}

/* Fade in tabs */
@-webkit-keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
