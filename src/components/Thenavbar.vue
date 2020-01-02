<template>
    <div class="relative">
        <div class="vx-navbar-wrapper">
            <vs-navbar class="navbar-full vx-navbar navbar-sticky">
                <div slot="title">
                    <vs-navbar-item>
                        <img @click="$router.push('/').catch(()=>{})"  alt="logo" style="height: 30px; width: auto" src="../assets/images/intelecs/rsz_intelecs_1.png">
                    </vs-navbar-item>
                </div>
                <vs-spacer />
<!--                <vs-navbar-item class="ml-2">-->
<!--                    <vs-button class="font-bold" line-origin="left" color="success" type="line">Team</vs-button>-->
<!--                </vs-navbar-item>-->
                <vs-navbar-item >
                    <vs-button class="font-bold" @click="$router.push('/projects').catch(()=>{})" line-origin="left" color="danger" type="line">Projects</vs-button>
                </vs-navbar-item>
            </vs-navbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "the-navbar",
        data: () => ({
            logo: "../assets/images/intelecs/rsz_intelecs_1.png"
        })
    }
</script>

<style scoped>

</style>