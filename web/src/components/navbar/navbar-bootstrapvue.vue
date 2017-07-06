<template>
    <div id="navbar" class="r-navbar" sticky="sticky-top"
         v-on:mouseover="onMouseOver($event)"
         v-on:mouseout="onMouseOut($event)"
         v-bind:style="{background: updateNavbarBgColor}">

        <b-link class="r-navbar-logo" to="/"
                v-bind:style="{display: updateDisplayLogo}">
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

        <b-nav is-nav class="r-navbar-items r-navbar-items-left"
               v-bind:style="{'margin-right': updateItemsMargin}">
            <b-nav-item to="/page1">Page1</b-nav-item>
            <b-nav-item to="/page2">Page2</b-nav-item>
            <b-nav-item to="/page3">Page3</b-nav-item>
        </b-nav>


        <b-nav is-nav class="r-navbar-items r-navbar-items-right"
               v-bind:style="{'margin-left': updateItemsMargin}">
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
        //margin-right: 40px;
    }

    .r-navbar-items-right {
        position: absolute;
        left: 50%;
        //margin-left: 40px;
    }

    .btn-secondary {
        background-color: transparent;
        border-color: transparent;
    }
</style>

<script>
    // 引用Color组件
    import Color from 'color-js';
    import {actionTweenedColor, actionTweenedNumber} from 'api/animate.js'

    export default {
        name: 'navbar',
        data() {
            return {
                isRouteHome: false,
                isMouseOnNavbar: false,
                valueMarginItems: 0,
                valueMarginObject:{number: 0},
                navbarBgAlpha: 0,
                color: {
                    red: 0,
                    green: 0,
                    blue: 0,
                    alpha: 0
                },
                navbarBgColor: {
                    red: 0,
                    green: 0,
                    blue: 0,
                    alpha: 0.6
                },
                tweenedTimeMS: 500
            }
        },
        components: {},
        methods: {
            onMouseOver(event){
                // console.log("[navbar] onMouseOver: ", this.isMouseOnNavbar)
                this.isMouseOnNavbar = true;
            },
            onMouseOut(){
                // console.log("[navbar] onMouseOut: ", this.isMouseOnNavbar)
                this.isMouseOnNavbar = false;
            },
        },
        watch: {
            $route: function () {
                console.log("[navbar] $route: ", this.$route)
                if(this.$route.path === "/"){
                    this.isRouteHome = true;
                    this.valueMarginItems = 0;
                }else{
                    this.isRouteHome = false;
                    this.valueMarginItems = 40;
                }
            },
            navbarBgAlpha: function () {
                this.color.alpha = this.navbarBgAlpha;
                actionTweenedColor(this.navbarBgColor, this.color, this.tweenedTimeMS);
            },
            isMouseOnNavbar: function (newVal, oldVal) {
                if (newVal) {
                    this.navbarBgAlpha = 0.6;
                } else {
                    this.navbarBgAlpha = 0;
                }
            },
            valueMarginItems: function (newValue, oldValue) {
                // console.log('[navbar] valueMarginItems: ', newValue, oldValue)
                actionTweenedNumber(this.valueMarginObject, newValue, oldValue, this.tweenedTimeMS)
            }
        },
        computed: {
            updateNavbarBgColor: function () {
                return new Color(this.navbarBgColor).toCSS()
            },
            updateDisplayLogo: function () {
                console.log('[navbar] updateDisplayLogo: ', this.isRouteHome)
                if(this.isRouteHome){
                    return 'none'
                }else{
                    return 'inline-block'
                }
            },
            updateItemsMargin: function () {
                console.log('[navbar] updateItemsMargin: ', "" + this.valueMarginObject.number + "px")
                return "" + this.valueMarginObject.number + "px"
            }
        },
        beforeCreate() {
            //console.log('[navbar] beforeCreate')
        },
        created: function () {
            //console.log('[navbar] created')
            //this.navbarBgColor = Object.assign({}, this.color)
        },
        beforeMount() {
            //console.log('[navbar] beforeMount')
        },
        mounted() {
            console.log('[navbar] mounted')
            this.isRouteHome = true;
        },
        beforeUpdate() {
            //console.log('[navbar] beforeUpdate')
        },
        updated() {
            //console.log('[navbar] updated')
        },
        activated() {
            //console.log('[navbar] activated')
        },
        deactivated() {
            //console.log('[navbar] deactivated')
        },
        beforeDestroy()  {
            //console.log('[navbar] beforeDestroy')
        },
        destroyed() {
            //console.log('[navbar] destroyed')
        }
    }
</script>
