<template>
<div id="app">
    <ul>
        <li class="active"><router-link :to="{name:'home'}">Home</router-link></li>
        <li><router-link :to="{name:'about'}">About</router-link></li>
        <li><router-link :to="{name:'contact'}">Contact</router-link></li>
        <li><router-link :to="{name:'login'}">Login</router-link></li>
    </ul>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
    name: "App.vue"
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: lightseagreen;
}

li {
    float: left;
    border-right:1px solid #bbb;
}

li:last-child {
    float: right;
    border-right: none;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
</style>
