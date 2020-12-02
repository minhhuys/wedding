<template>
  <div class="wish-us">
         <div>
          </div>
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

    > div {
        width: 95vw;
        height: 90vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('../../assets/images/wish-us.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

}
</style>