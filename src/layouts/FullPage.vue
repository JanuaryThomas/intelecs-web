<template>
    <div class="layout--main">
        <the-navbar color="white" class="bg-white navbar-full  mb-base navbar-static"/>
        <div class="content-area-full">
            <div class="content-wrapper">
                <div class="router-view">
                    <div class="content-area__content">
                        <transition name="slide-fade" mode="out-in">
                            <router-view />
                        </transition>
                    </div>
                </div>
            </div>
            <TheFooter class="footer-sticky" />
        </div>
    </div>
</template>

<script>
    import TheNavbar from "../components/Thenavbar";
    import TheFooter from "../components/TheFooter";
    export default {
        name: "FullPage",
        components: {TheFooter, TheNavbar}
    }
</script>

<style scoped>

</style>