<template>
    <div class="footer">
        <div class="footer-links">
            <a target="_blank" href="https://vk.com/off_dusty">
                <img :src="vk" alt="">
            </a>
            <a target="_blank" href="https://t.me/DustyEV">
                <img :src="tg" alt="">
            </a>
            <a target="_blank" href="https://www.instagram.com/dusty_evens/">
                <img :src="inst" alt="">
            </a>
        </div>
        <div class="footer-author">
            <p>Разработка Александр Н.</p>
            <p>Липецк 2021</p>
        </div>
    </div>
</template>


<script>
    import vk from '../assets/vk.svg'
    import tg from '../assets/telegram.svg'
    import inst from '../assets/inst.svg'
    export default {
        name: 'Footer',
        components: {

        },
        data: function () {
            return {
                vk, tg, inst
            };
        },



    }


</script>