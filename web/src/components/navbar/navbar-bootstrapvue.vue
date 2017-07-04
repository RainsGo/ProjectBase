<template>
    <div id="navbar" toggleable sticky="sticky-top" class="r-navbar">

        <b-link class="r-navbar-logo" to="/">
            <img width="65px" src="../../common/images/logo-r.svg"></img>
        </b-link>

        <b-nav class="r-navbar-left">
            <b-nav-item>
                <i class=" fa fa-search"></i>
            </b-nav-item>
        </b-nav>

        <b-nav class="r-navbar-right">
            <b-nav-item to="/join">加入</b-nav-item>
            <b-nav-item to="/login">登陆</b-nav-item>
        </b-nav>

        <b-nav is-nav class="r-navbar-items r-navbar-items-left">
            <b-nav-item to="/page1">Page1</b-nav-item>
            <b-nav-item to="/page2">Page2</b-nav-item>
            <b-nav-item to="/page3">Page3</b-nav-item>
        </b-nav>


        <b-nav is-nav class="r-navbar-items r-navbar-items-right">
            <b-nav-item to="/page4">Page4</b-nav-item>
            <b-nav-item to="/page5">Page5</b-nav-item>
            <b-nav-item to="/page6">Page6</b-nav-item>
        </b-nav>
    </div>
</template>

<style scoped lang="less">
    .r-navbar {
        top: 0;
        width: 100%;
        border: 1px solid transparent;
        z-index: 1000;
        height: 50px;
        min-height: 50px;
        margin-bottom: 20px;
        position: fixed;
        background: rgba(0, 0, 0, 0.6);
        transition: background(.5s);
        transform: translateZ(0px);
    }

    .r-navbar-logo {
        position: absolute;
        left: 50%;
        width: 65px;
        margin: 10px 0px 0px -32.5px;
    }

    .r-navbar-left {
        position: relative;
        float: left !important;
        font-size: 14px;
        padding: 0;
        margin: 7px 0px 0px 0px;
    }

    .r-navbar-right {
        position: relative;
        float: right !important;
        font-size: 14px;
        font-weight: bold;
        padding: 0;
        margin: 7px 0px 0px 0px;
    }

    .r-navbar-items {
        font-size: 14px;
        color: black;
        padding: 0;
        margin: 7px 0px 0px 0px;
    }

    .r-navbar-items-left {
        position: absolute;
        right: 50%;
        margin-right: 40px;
    }

    .r-navbar-items-right {
        position: absolute;
        left: 50%;
        margin-left: 40px;
    }

    .btn-secondary {
        background-color: transparent;
        border-color: transparent;
    }
</style>

<script>
    export default {
        name: 'navbar',
        methods: {},
        components: {},
        beforeCreate() {
            console.log('beforeCreate')
        },
        created() {
            console.log('created')
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted() {
            console.log('mounted')
        },
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log('updated')
        },
        activated() {
            console.log('activated')
        },
        deactivated() {
            console.log('deactivated')
        },
        beforeDestroy()  {
            console.log('beforeDestroy')
        },
        destroyed() {
            console.log('destroyed')
        }
    }
</script>
