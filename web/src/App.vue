<template>
    <div id="app">
        <div class="section " id="section0"><h1>First Page</h1></div>
        <div class="section" id="section1">
            <div class="slide" id="slide1"><h1>2 Page 1</h1></div>
            <div class="slide" id="slide2"><h1>2 Page 2</h1></div>
        </div>
        <div class="section" id="section2"><h1>3 Page</h1></div>
        <div class="section" id="section3"><h1>4 Page</h1></div>
    </div>
</template>

<style type="text/css">
    @import "./style/jquery.fullPage.css";

    /* Style for our header texts
	* --------------------------------------- */
    h1 {
        font-size: 5em;
        font-family: arial, helvetica;
        color: #fff;
        margin: 0;
        padding: 0;
    }

    /* Centered texts in each section
    * --------------------------------------- */
    .section {
        text-align: center;
    }

    /* Backgrounds will cover all the section
    * --------------------------------------- */
    #section0,
    #section1,
    #section2,
    #section3 {
        background-size: cover;
        background-attachment: fixed;
    }

    /* Defining each sectino background and styles
    * --------------------------------------- */
    #section0 {
        background-image: url(assets/images/bg1.jpg);
    }

    #section0 h1 {
        top: 50%;
        transform: translateY(-50%);
        position: relative;
    }

    #section2 {
        background-image: url(assets/images/bg3.jpg);
        padding: 6% 0 0 0;
    }

    #section3 {
        background-image: url(assets/images/bg4.jpg);
        padding: 6% 0 0 0;
    }

    #section3 h1 {
        color: #000;
    }

    /*Adding background for the slides
    * --------------------------------------- */
    #slide1 {
        background-image: url(assets/images/bg2.jpg);
        padding: 6% 0 0 0;
    }

    #slide2 {
        background-image: url(assets/images/bg5.jpg);
        padding: 6% 0 0 0;
    }

    /* Bottom menu
    * --------------------------------------- */
    #infoMenu li a {
        color: #fff;
    }
</style>

<script>
    import './assets/js/jquery.fullPage'

    export default {
        name: 'app',
        mounted(){
            this.$nextTick(function () {
                $('#app').fullpage({
                    verticalCentered: false,

                    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
                    css3:false
                });
            })
        }
    }
</script>
