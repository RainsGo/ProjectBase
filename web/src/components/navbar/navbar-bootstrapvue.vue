<template>
    <div id="navbar">
        <b-navbar toggleable sticky="sticky-top" type="inverse">

            <b-nav-toggle target="nav_collapse"></b-nav-toggle>

            <b-nav is-nav-bar class="ml-auto" >
                <b-nav-item to="/page1">Page1</b-nav-item>
                <b-nav-item to="/page2">Page2</b-nav-item>
                <b-nav-item to="/page3">Page3</b-nav-item>
            </b-nav>


            <b-link is-nav-bar id="nav_collapse" to="/">
                <h5>首页</h5>
            </b-link>

            <b-nav is-nav-bar>
                <b-nav-item to="/page1">Page1</b-nav-item>
                <b-nav-item to="/page2">Page2</b-nav-item>
                <b-nav-item to="/page3">Page3</b-nav-item>
            </b-nav>

            <b-nav is-nav-bar class="ml-auto">

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="语言" right>
                    <b-dropdown-item to="#">EN</b-dropdown-item>
                    <b-dropdown-item to="#">ES</b-dropdown-item>
                    <b-dropdown-item to="#">RU</b-dropdown-item>
                    <b-dropdown-item to="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>

                    <!-- Using text slot -->
                    <template slot="text">
                        <span style="font-weight: bold;">用户</span>
                    </template>

                    <b-dropdown-item to="#">详细信息</b-dropdown-item>
                    <b-dropdown-item to="#">登出</b-dropdown-item>
                </b-nav-item-dropdown>

            </b-nav>
        </b-navbar>
    </div>
</template>

<script type="text/css">
</script>

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
