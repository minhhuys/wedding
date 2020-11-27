<template>
  <div class="wedding-album">
    <h3>Tổng hợp ảnh cưới</h3>

    <div class="wedding-images">
      <div class="wedding-image">
        <img class="main-img" src="@/assets/images/baotran4.png" alt />
        <div class="view-image" @click="openModal(require(`~/assets/images/baotran4.png`))">
          <img src="@/assets/images/view.png" alt />
        </div>
      </div>
      <div class="wedding-image">
        <img src="@/assets/images/baotran2.png" class="main-img" alt />
        <div class="view-image" @click="openModal(require(`~/assets/images/baotran2.png`))">
          <img src="@/assets/images/view.png" alt />
        </div>
      </div>
      <div class="wedding-image">
        <img src="@/assets/images/baotran3.png" class="main-img" alt />
        <div class="view-image" @click="openModal(require(`~/assets/images/baotran3.png`))">
          <img src="@/assets/images/view.png" alt />
        </div>
      </div>
      <div class="wedding-image">
        <img src="@/assets/images/baotran4.png" class="main-img" alt />
        <div class="view-image" @click="openModal(require(`~/assets/images/baotran4.png`))">
          <img src="@/assets/images/view.png" alt />
        </div>
      </div>
    </div>

    <div>
      <button>Xem tất cả ảnh</button>
    </div>

    <div class="modal-image" v-if="showModal">
      <span class="close" @click="close">&times;</span>
      <img ref="modalImage" :src="imageSrc" class="modal-content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      imageSrc: null,
    };
  },
  methods: {
    openModal(src) {
      this.showModal = true;
      this.imageSrc = src;
    },
    close() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss">
.wedding-album {
  background-color: #fbf9ef;
  padding: 50px;

  h3 {
    color: #c0690a;
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
  }
  .wedding-images {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 25px;

    .wedding-image {
      position: relative;
      overflow: hidden;

      &:hover {
        .view-image {
          bottom: 0;
        }
      }
      .main-img {
        width: 100%;
        height: auto;
        display: block;
        cursor: pointer;
      }
      .view-image {
        transition: all 0.3s;
        width: 100%;
        height: 100%;
        bottom: -100%;
        background: rgba(192, 105, 10, 0.4);
        position: absolute;
        cursor: pointer;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  div {
    text-align: center;

    button {
      margin-top: 20px;
      width: 430px;
      height: 56px;
      background: #dd902c;
      border-radius: 2px;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: 600;
      outline: none;
      cursor: pointer;
    }
  }
}

.modal-image {
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Add Animation */
.modal-content {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
@media screen and (max-width: 480px) {
  .wedding-album {
    padding: 50px 15px;
    .wedding-images {
      grid-gap: 15px;
    }
    h3 {
      font-size: 30px;
    }
    div {
      button {
        width: 350px;
      }
    }
  }
}

@media screen and (max-width: 350px) {
  .wedding-album {
    div {
      button {
        width: 290px;
      }
    }
  }
}
</style>
