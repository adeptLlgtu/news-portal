<template>
    <div class="header">
       <router-link to="/main" class="header-title">
           <img :src="header_logo" alt="">
           <p>ЛИПЕЦК | <span>NEWS</span></p>
       </router-link>
        <div class="header-links">
            <router-link id="main" to="/main" class="header-links__item" active-class="active">Главная</router-link>
            <router-link id="video" to="/video" class="header-links__item" active-class="active">Видео</router-link>
            <div class="link-line"></div>
            <router-link id="create" to="/create" class="header-links__item" active-class="active">Добавить новость</router-link>
            <router-link id="magazine" to="/magazine" class="header-links__item" active-class="active">Журнал</router-link>
            <router-link id="admin" to="/admin-panel" class="header-links__item" active-class="active">Администрирование</router-link>
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
        methods:{
            permission(){
                return localStorage.permission
            },
            createHeader(){
                const permission = this.permission()
                let main = document.getElementById('main')
                let news = document.getElementById('news')
                let video = document.getElementById('video')
                let create = document.getElementById('create')
                let admin = document.getElementById('admin')
                if (permission==='9'){
                    admin.remove()
                }
            }
        },
        mounted() {
            this.createHeader()

        }


    }


</script>