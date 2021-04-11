    <template>
        <div class="auth">
            <div class="auth-redirect">
                <img :src="lip_logo" alt="">
                <p>ЛИПЕЦК | <span>NEWS</span></p>
                <form id="form-registration" action="">
                    <router-link class="lock-auth__form" to="/">
                        <div class="lock-auth__form-item"></div>
                        <div class="lock-auth__form-item"></div>
                    </router-link>
                    <h2>{{formTitle}}</h2>
                    <div class="input-item">
                        <label for="login">Логин <span>*</span></label>
                        <input name="login" required id="login" type="text">
                    </div>
                    <div class="input-item">
                        <label for="password">Пароль <span>*</span></label>
                        <input name="password" required id="password" type="password">
                    </div>
                    <div class="input-item">
                        <label for="nick">Никнейм <span>*</span></label>
                        <input name="nickname" required id="nick" type="text">
                    </div>
                    <div class="input-item">
                        <label for="age">Возраст</label>
                        <input name="age" min="14" max="120" id="age" type="number">
                    </div>
                    <p id="description-reg"><span>*</span> - обязательно для заполнения</p>
                    <div class="button-container">
                        <button type="submit">Регистрация</button>
                    </div>

                </form>
            </div>
        </div>
    </template>


    <script>
        import lip_logo from '../assets/lip_logo.svg'
        export default {
            name: 'Registration',

            components: {

            },
            data: function () {
                return {
                    lip_logo,
                    formTitle: 'РЕГИСТРАЦИЯ',
                };
            },
            methods:{
                registration(){
                    let form = document.querySelector('#form-registration')

                        form.onsubmit = async (e) => {
                            e.preventDefault();
                            let formData = new FormData(form)
                            formData.append('permission', '1')
                            let response = await fetch('http://API-news.loc/api/registration', {
                                method: 'POST',
                                body: formData
                            });
                            let result = await response.json();
                            window.location.href = '/main'
                        };

                },
                checkHeader(){
                    let header = document.querySelector('.header')
                    if (header){
                        header.remove()
                    }
                }
            },
            mounted() {
                document.title = 'Регистрация'
                this.registration()
                this.checkHeader()
            }



        }


    </script>
