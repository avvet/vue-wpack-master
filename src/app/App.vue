<template>
  <div>
    <h1>App vue rendered! {{msg}}</h1>
    <image-container></image-container>
    <img src="../assets/img/familyguy.png" width="100" height="300" alt="">
  </div>
</template>

<script>
  import ImageContainerComponenr from "Components/image-container-component/ImageContainerComponent"

  export default {
    data() {
      return {
        msg: "DataMsg"
      }
    },
    components: {
      'image-container': ImageContainerComponenr
    }
  }
</script>