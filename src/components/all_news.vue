<template>
    <div class="all-news__container">
        <div v-for="news in news_data" class="big-news__container">
            <div v-bind:id="news.id+'-back__full'" class="news-background">
                <div class="news-full__container">
                    <div v-bind:id="news.id+'btn'" v-on:click="closeFullNews()" class="close-full__news-btn">
                        <div class="close-full__news-btn__item"></div>
                        <div class="close-full__news-btn__item"></div>
                    </div>
                    <div class="generate-full-news__container">
                        <div class="top-info-block">
                            <p class="top-info-block__text">{{news.public_date}}</p>
                            <p class="top-info-block__text">{{news.author}}</p>
                        </div>
                        <p class="full-news__title">{{news.title}}</p>
                        <img class="full-news__img" :src="news.img_source" alt="">
                        <p class="full-news__description">{{news.description}}</p>
                    </div>
                </div>
            </div>
            <div v-on:click="getFullNews()" v-bind:id="news.id" class="all-news__container-item">
                <img :src="news.img_source" alt="">
                <p class="news-title">{{news.title}}</p>
                <p class="news-date">{{news.public_date}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Main',
        title: 'Главная',
        components: {

        },
        data: function () {
            return {
                news_data:[],
            };
        },
        methods:{
            getFullNews(){

                let newsItem = document.querySelectorAll('.all-news__container-item')
                for (let i=0; i<newsItem.length; i++) {
                    newsItem[i].onclick = () => {
                        let newsBackground = document.getElementById(newsItem[i].id+'-back__full')
                        newsBackground.style.top = '0%'
                    }
                }
            },
            closeFullNews(){
                let closeBtn = document.querySelectorAll('.close-full__news-btn')
                let newsBackground = document.querySelectorAll('.news-background')
                for (let i=0; i<newsBackground.length; i++){
                    closeBtn[i].onclick = () =>{
                        newsBackground[i].style.top = '-120%'
                    }
                }
            }
        },
        created() {
            this.$http.get('http://API-news.loc/api/flag:false').then(function(data){
                this.news_data = JSON.parse(JSON.stringify(data.body));
            })
            this.closeFullNews()
            this.getFullNews()
        },
        mounted() {

        }
    }
</script>