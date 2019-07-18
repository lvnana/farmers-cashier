<template>
    <div id="app">

        <router-view></router-view>
    </div>
</template>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        margin: 0 !important;
        padding: 0;
    }

    .el-dialog {
        background-color: #E4EFF1 !important;
    }

    a:hover {
        cursor: pointer;
    }



    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: rgba(151, 255, 255, 0.2);
    }
</style>

<script>
    export default {
        name: 'app',
    }
</script>

