<template>
    <div class="header">
       <router-link to="/main" class="header-title">
           <img :src="header_logo" alt="">
           <p>ЛИПЕЦК | <span>NEWS</span></p>
       </router-link>
        <div class="header-links">
            <router-link to="/main" class="header-links__item active">Главная</router-link>
            <router-link to="/main" class="header-links__item">Новости</router-link>
            <router-link to="/main" class="header-links__item">Видео</router-link>
        </div>



    </div>
</template>


<script>

    import header_logo from '../assets/lip_logo.svg'

    export default {
        name: 'Header',
        components: {

        },
        data: function () {
            return {
                header_logo
            };
        },



    }


</script>