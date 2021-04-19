<template>
   <div>
       <h2 class="main-page__section-title">Важные новости</h2>
       <div class="main-news__container">
           <div v-for="news in news_data" class="big-news__container">
               <div v-bind:id="news.id+'-back'" class="news-background main-background">
                    <div class="news-full__container">
                        <div v-bind:id="news.id+'btn'" v-on:click="closeFullNews" class="close-full__news-btn">
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
               <p v-on:click="getFullNews" v-bind:id="news.id" class="main-news__item">{{news.title}}</p>
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
                let newsItem = document.querySelectorAll('.main-news__item')

                for (let i=0; i<newsItem.length; i++) {
                    newsItem[i].onclick = () => {
                        console.log(i)
                        let newsBackground = document.getElementById(newsItem[i].id+'-back')
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
            this.$http.get('http://API-news.loc/api/flag:true').then(function(data){
                this.news_data = JSON.parse(JSON.stringify(data.body));
            })
        },
        mounted() {
            this.closeFullNews()
            this.getFullNews()
        }
    }
</script>