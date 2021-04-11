<template>
    <div class="auth">
        <div class="auth-redirect">
            <img :src="lip_logo" alt="">
            <p>ЛИПЕЦК | <span>NEWS</span></p>
            <div class="auth-redirect__button">
                <router-link to="/login">Вход</router-link>
                <div class="auth-redirect__button-line"></div>
                <router-link to="/registration">Регистрация</router-link>
            </div>
        </div>
    </div>
</template>


<script>
    import lip_logo from '../assets/lip_logo.svg'
    export default {
        name: 'Footer',
        components: {

        },
        data: function () {
            return {
                lip_logo
            };
        },

        methods: {
            checkHeader(){
                let header = document.querySelector('.header')
                if (header){
                    header.remove()
                }
            }
        },

        mounted() {
            this.checkHeader()
        }


    }


</script>



