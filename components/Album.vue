<template>
  <div class="wedding-album">
    <h3>Tổng hợp ảnh cưới</h3>

    <div class="wedding-images">
      <div>
        <img
          src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
    </div>

    <div>
      <button>Xem tất cả ảnh</button>
    </div>
  </div>
</template>

<script>
export default {};
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

    div {
      img {
        width: 100%;
        cursor: pointer;
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
</style>
