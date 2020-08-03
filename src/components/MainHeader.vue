<template>
  <div class="main-header">
    <h1>MainHeader</h1>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader',
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/theme.styl';

  .main-header
    text-align center;

  h1
    margin 20px;
    font-size 50px;
    font-weight 100;
    color $lightred;
    text-shadow 5px 5px 5px rgba(0, 0, 0, 0.1);
</style>