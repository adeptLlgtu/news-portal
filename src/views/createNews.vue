<template>
    <div class="main">
        <div class="scroll-container">
            <div class="main-container">
                <h2>{{title}}</h2>
                <form action="">
                    <div class="top-form__block">
                        <div class="top-form__block-item">
                            <label for="public_date">Дата публикации</label>
                            <input required id="public_date" type="text">
                        </div>
                        <div class="top-form__block-item">
                            <label for="author">Автор</label>
                            <input required id="author" type="text">
                        </div>
                    </div>
                    <div class="input-block">
                        <label for="title">Заголовок</label>
                        <input required id="title" type="text">
                    </div>
                    <div class="input-block">
                        <label for="img">Изображение (адрес)</label>
                        <input required id="img" type="text">
                    </div>
                    <div class="input-block">
                        <label for="description">Содержание</label>
                        <textarea required class="mail" id="description" name="description"></textarea>
                    </div>
                    <div class="flag-block">
                        <input type="checkbox" class="custom-checkbox" id="video-news" name="happy" value="yes">
                        <label for="video-news">Видео-новость</label>
                        <input type="checkbox" class="custom-checkbox" id="disclamer" name="happy" value="yes">
                        <label for="disclamer">18+</label>
                        <input type="checkbox" class="custom-checkbox" id="famous" name="happy" value="yes">
                        <label for="famous">Важная</label>
                    </div>
                    <div class="for-button__block">
                        <button class="public-button">Опубликовать</button>
                    </div>

                </form>
            </div>
        </div>

    </div>
</template>


<script>



    export default {
        name: 'Main',

        components: {

        },
        data: function () {
            return {
                title: 'Создание новости',


            };
        },
        methods:{

        },
        mounted() {
            document.title = 'Создание новости'




        }
    }


</script>