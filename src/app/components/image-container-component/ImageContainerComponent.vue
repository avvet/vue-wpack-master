<template src="./ImageContainerComponent.html"></template>
<style src="./ImageContainerComponent.scss" scoped lang="scss"></style>

<script>
  import {httpWrapper} from "../../http/http-wrapper";

  export default {
    data() {
      return {
        msg:"Image Msg"
      }
    },
    created() {
      console.log('created');
      httpWrapper.getUserById(2);
      httpWrapper.getAllUsers(this.consoleAllUsers);
    },
    methods: {
      consoleAllUsers(usersArray) {
        console.warn(usersArray, 'All Users');
      }
    }
  }
</script>