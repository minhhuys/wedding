<template>
  <div class="wish-us">
      <!-- <img src="@/assets/images/wish-us.png" alt=""> -->
          <img src="@/assets/images/wish-us.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.wish-us {
    background-color: #0A1332;
    width: 100vw;
    height: 100vh;
    position: relative;

    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>