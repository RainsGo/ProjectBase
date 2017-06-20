<template>
    <div>
        <a href="" id="githubLink"><img
            style="position: fixed;z-index:99; top: 0; right: 0; border: 0;"
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub"></a>

        <div id="app">
            <div class="section " id="section0"><h1>fullPage.js</h1></div>
            <div class="section" id="section1">
                <div class="slide" id="slide1"><h1>Slide Backgrounds</h1></div>
                <div class="slide" id="slide2"><h1>Totally customizable</h1></div>
            </div>
            <div class="section" id="section2"><h1>Lovely images <br/>for a lovely page</h1></div>
            <div class="section" id="section3"><h1>One Image = One thousand words</h1></div>
        </div>
    </div>
</template>

<style type="text/css">
    @import "./style/jquery.fullPage.css";
    @import "./style/examples.css";

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

    /*
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    */
</style>

<script>
    import $ from 'jquery'
    import './assets/js/scrolloverflow'
    import './assets/js/jquery.fullPage'
    import './assets/js/examples'

    export default {
        name: 'app',
        ready: {}
    }
</script>
