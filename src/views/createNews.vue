<template>
    <div class="main">
        <div class="scroll-container">
            <div class="main-container">
                <h2>{{title}}</h2>
                <form action="">
                    <div class="top-form__block">
                        <div class="top-form__block-item">
                            <label for="public_date">Дата публикации</label>
                            <input name="public_date" required id="public_date" type="text">
                        </div>
                        <div class="top-form__block-item">
                            <label for="author">Автор</label>
                            <input name="author" required id="author" type="text">
                        </div>
                    </div>
                    <div class="input-block">
                        <label for="title">Заголовок</label>
                        <input name="title" required id="title" type="text">
                    </div>
                    <div class="input-block">
                        <label for="img">Изображение (адрес)</label>
                        <input name="img_source" required id="img" type="text">
                    </div>
                    <div class="input-block">
                        <label for="description">Содержание</label>
                        <textarea required class="mail" id="description" name="description"></textarea>
                    </div>
                    <div class="flag-block">
                        <input type="checkbox" class="custom-checkbox" id="video-flag" name="video_flag">
                        <label for="video-flag">Видео-новость</label>
                        <input type="checkbox" class="custom-checkbox" id="disclamer" name="disclamer">
                        <label for="disclamer">18+</label>
                        <input type="checkbox" class="custom-checkbox" id="famous" name="famous">
                        <label for="famous">Важная</label>
                    </div>
                    <div class="for-button__block">
                        <button class="public-button">Опубликовать</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-background">
            <div class="modal-item">
                <div class="modal-close__btn">
                    <div class="modal-close__btn-item"></div>
                    <div class="modal-close__btn-item"></div>
                </div>
                <div class="modal-result success-block">
                    <img :src="success" alt="">
                    <p>Статья успешно опубликована</p>
                </div>
                <div class="modal-result bad-block">
                    <img :src="bad" alt="">
                    <p>Что-то пошло не так. Попробуйте повторить позднее</p>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
    import '../assets/styles/create.scss'
    import bad from '../assets/bad.svg'
    import success from '../assets/success.svg'

    export default {
        name: 'Main',

        components: {

        },
        data: function () {
            return {
                title: 'Создание новости',
                bad, success

            };
        },
        methods:{
            closeModal(){
                let closeModalBtn = document.querySelector('.modal-close__btn')
                let backgroundModalBlock = document.querySelector('.modal-background')
                closeModalBtn.onclick = () =>{
                    backgroundModalBlock.style.top = '-120%'
                }
            }
        },
        mounted() {
            document.title = 'Создание новости'
            this.closeModal()
            let form = document.querySelector('form')
            let sendBtn = document.querySelector('.public-button')
            sendBtn.onclick = async (e) => {
                e.preventDefault();
                let formData = new FormData(form)
                // eslint-disable-next-line
                let response = await fetch('http://API-news.loc/api/createNews', {
                    method: 'POST',
                    body: formData
                });
                let backgroundModalBlock = document.querySelector('.modal-background')
                let successBlock = document.querySelector('.success-block')
                let badBlock = document.querySelector('.bad-block')
                if (response.status === 200) {
                    backgroundModalBlock.style.top = '0%'
                    successBlock.style.display = 'flex'
                    badBlock.style.display = 'none'
                } else {
                    backgroundModalBlock.style.top = '0%'
                    badBlock.style.display = 'flex'
                    successBlock.style.display = 'none'
                }
            };

        }
    }


</script>