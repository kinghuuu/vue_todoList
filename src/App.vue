<template>
  <div>
    <!-- <h1>TodoList</h1>
    <input type="text" v-model="content" />
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(item,index) of todoData" :key="index">{{item}}</li>
    </ul>-->
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  // import img from "./assets/images/1.jpg";
  // import "./assets/images/222.svg";
  // import "./assets/styles/test.css";
  import './assets/styles/global.styl'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainTodo,
      MainFooter,
    },
  }
</script>

<style scoped>
  li:nth-of-type(odd) {
    color: red;
  }
</style>