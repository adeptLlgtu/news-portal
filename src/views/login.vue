<template>
    <div class="auth">
        <div class="auth-redirect">
            <img :src="lip_logo" alt="">
            <p>ЛИПЕЦК | <span>NEWS</span></p>
            <form id="form-login" action="">
                <router-link class="lock-auth__form" to="/">
                    <div class="lock-auth__form-item"></div>
                    <div class="lock-auth__form-item"></div>
                </router-link>
                <h2>{{formTitle}}</h2>
                <div class="input-item">
                    <label for="login">Логин</label>
                    <input name="login" required id="login" type="text">
                </div>
                <div class="input-item">
                    <label for="password">Пароль</label>
                    <input name="password" required id="password" type="password">
                </div>

                <div class="button-container">
                    <button class="login-btn" type="button">Вход</button>
                </div>

            </form>
        </div>
    </div>
</template>


<script>
    import lip_logo from '../assets/lip_logo.svg'
    export default {
        name: 'Login',
        title: 'Вход',

        components: {

        },
        data: function () {
            return {
                lip_logo,
                formTitle: 'ВХОД',

            };
        },
        methods:{

            getUsers(){
                let request = new XMLHttpRequest();
                request.open('GET', "http://API-news.loc/api/get:all/from:users/id:0", false);
                request.send()
                if (request.status === 200) {
                    let subjectsRequest = JSON.parse(request.response)
                    return(subjectsRequest)
                } else {
                    console.log('Error')
                }

            },
            checkHeader(){
                let header = document.querySelector('.header')
                if (header){
                    header.remove()
                }
            },

        },
        mounted() {

            this.checkHeader()
            document.title = 'Вход'

            let users = this.getUsers()
            let login = document.querySelector('#login')
            let password = document.querySelector('#password')
            let btn = document.querySelector('.login-btn')
            btn.onclick = () => {
                for (let i=0; i<users.length; i++){
                    if (users[i].login === login.value && users[i].password === password.value){
                        localStorage.setItem('id', users[i].id)
                        localStorage.setItem('permission', users[i].permission)
                        location.pathname = '/main'
                    }
                }
            };
        }
    }
</script>

<style scoped>
    #form-registration{

    }

</style>
