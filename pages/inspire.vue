<template>
  <div class="wedding">
    <div class="wedding-intro">

      <!-- <img class="bg-left" src="~/assets/images/bg-left.png" alt="">
      <img class="bg-right" src="~/assets/images/bg-right.png" alt=""> -->


      <div class="wedding-intro__title">
        <p>Hoài Bảo</p>
        <img src="~/assets/images/flowers.png" alt="">
        <p>Việt Trinh</p>
      </div>
      <div class="wedding-intro__sub-title">
        ARE GETTING MARRIED!
      </div>
      <div class="line">
        <img  src="~/assets/images/line.png" alt="">
      </div>

      <!-- <p class="wedding-text">
        Gửi lời chúc để nhận quà bất ngờ từ chúng tôi
      </p> -->

      <!-- <div class="wedding-main__content">
        <div class="wedding-slide">
          hello
        </div>
        <div class="wedding-qr">
          <img src="~/assets/images/qr.png" alt="">
        </div>
      </div> -->
      <!-- <a-row class="wedding-main__content">
        <a-col :md="{span : 14}" :xs="{span : 24}" class="wedding-frame">
          <div>
            <img src="https://png.pngtree.com/png-vector/20190828/ourmid/pngtree-square-flowers-border-for-wedding-invitation-cards-vector-png-image_1715407.jpg" alt="">
          </div>
        </a-col>
        <a-col :md="{span : 10}" :xs="{span : 24}" class="wedding-qr">
          <img src="~/assets/images/qr.png" alt="">
        </a-col>
      </a-row> -->

      

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped> 

@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');

  .wedding {
    height: 100vh;
    padding: 100px;
    background-color: #0A1332;

    .wedding-intro {
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      position: relative;

      .wedding-intro__title {
        display: flex;
        justify-content: center;
        padding-top: 20px;
        position: relative;

        p {
          font-family: 'Prata', serif;
          font-size: 32px;
          font-style: normal;
          font-weight: normal;
          color: #A33B20;
          margin: 0 70px
        }

        img {
          position: absolute;
          top: -80%;
        }
      }

      .wedding-intro__sub-title {
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 0.4em;
        color: #0A1332;
        font-family: Roboto, sans-serif ;
      }

      .line {
        text-align: center;

        img {
          max-width: 100%;
        }
      }

      .wedding-text {
        margin: 20px 0;
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        color: #AF9164;
        font-family: 'Prata', serif;
      }

      .wedding-main__content {
        display: flex;
        margin-top: 50px;
        padding-bottom: 30px;

        .wedding-frame {
          > div {
            width: 500px;
            border-radius: 50%;
            text-align: center;
            margin: 0 auto;

            img {
              border-radius: 50%;
            }
          }
        }

        .wedding-qr {
          text-align: center;
          img {
            max-width: 384px;
          }
        }

      }

      .bg-left {
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .bg-right {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

 .container {
   margin: 0 auto;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
 }

 .title {
   font-family:
     'Quicksand',
     'Source Sans Pro',
     -apple-system,
     BlinkMacSystemFont,
     'Segoe UI',
     Roboto,
     'Helvetica Neue',
     Arial,
     sans-serif;
   display: block;
   font-weight: 300;
   font-size: 100px;
   color: #35495e;
   letter-spacing: 1px;
 }

 .subtitle {
   font-weight: 300;
   font-size: 42px;
   color: #526488;
   word-spacing: 5px;
   padding-bottom: 15px;
 }

 .links {
   padding-top: 15px;
 }
</style>

<style lang="scss">
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  // .wedding {
  //     .wedding-intro {
  //       .wedding-main__content {
  //         .wedding-qr {
  //           img {
  //             max-width: 350px !important;
  //           }
  //         }
  //       }
  //     }
  //   }
  }
</style>
