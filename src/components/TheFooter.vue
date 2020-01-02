<template>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span class="text-sm text-black"> (C){{ new Date().getFullYear() }} <a href="" target="_blank" rel="nofollow">Intelecs</a>, All rights Reserved</span>
    </footer>
</template>
<script>
    export default {
        name: 'the-footer',
        props: {
            classes: {
                type: String
            }
        }
    }
</script>
