<template>
    <div class="main">
        <div class="scroll-container">
            <div class="main-container">
                <div class="main-container__curs">
                    <div class="curs-menu">
                        <div class="curs-menu__usd">
                            <img :src="usd" alt="">
                        </div>
                        <div class="curs-menu__eur">
                            <img :src="eur" alt="">
                        </div>
                    </div>
                </div>
                <h2 class="main-page__section-title">Важные новости</h2>
                <div class="main-news__container"></div>
                <h2 class="main-page__section-title">Новости недели</h2>
                <div class="all-news__container"></div>
            </div>
        </div>

    </div>
</template>


<script>

    import usd from '../assets/USD.svg'
    import eur from '../assets/EUR.svg'

    export default {
        name: 'Main',
        title: 'Главная',
        components: {

        },
        data: function () {
            return {
                usd, eur

            };
        },
        methods:{
            getMoney(){
                let request = new XMLHttpRequest();
                request.open('GET', "https://www.cbr-xml-daily.ru/daily_json.js", false);
                request.send()
                if (request.status === 200) {
                    let subjectsRequest = JSON.parse(request.response)
                    return(subjectsRequest)
                } else {
                    console.log('Error')
                }
            },
            createMoneyStat(){
                let cursMenuUSD = document.querySelector('.curs-menu__usd')
                let cursMenuEUR = document.querySelector('.curs-menu__eur')

                let moneyData = this.getMoney()
                let cursUSD = moneyData.Valute.USD.Value
                let cursEUR = moneyData.Valute.EUR.Value

                cursMenuUSD.insertAdjacentHTML('beforeend', '<p class="valute">'+cursUSD+'</p>')
                cursMenuEUR.insertAdjacentHTML('beforeend', '<p class="valute">'+cursEUR+'</p>')


            },
            createDate(){
                let cursBlock = document.querySelector('.main-container__curs')
                let Data = new Date();
                let Year = Data.getFullYear();
                let Month = Data.getMonth();
                let Day = Data.getDate();

                let fMonth = ''
                switch (Month)
                {
                    case 0: fMonth="января"; break;
                    case 1: fMonth="февраля"; break;
                    case 2: fMonth="марта"; break;
                    case 3: fMonth="апреля"; break;
                    case 4: fMonth="мае"; break;
                    case 5: fMonth="июня"; break;
                    case 6: fMonth="июля"; break;
                    case 7: fMonth="августа"; break;
                    case 8: fMonth="сентября"; break;
                    case 9: fMonth="октября"; break;
                    case 10: fMonth="ноября"; break;
                    case 11: fMonth="декабря"; break;
                }
                cursBlock.insertAdjacentHTML('beforeend', '<p class="curs-date">'+Day+" "+fMonth+" "+Year+" "+"года"+'</p>')
            },
            getNews(){
                let request = new XMLHttpRequest();
                request.open('GET', "http://API-news.loc/api/from:news", false);
                request.send()
                if (request.status === 200) {
                    let subjectsRequest = JSON.parse(request.response)
                    return(subjectsRequest)
                } else {
                    console.log('Error')
                }
            },
            createMainNews(){
                let newsData = this.getNews()
                let mainNewsBlock = document.querySelector('.main-news__container')
                let allNewsContainer = document.querySelector('.all-news__container')
                for (let i=0; i<newsData.length; i++){
                    if (newsData[i].famous === true){
                        mainNewsBlock.insertAdjacentHTML('beforeend', '<p class="main-news__item">'+newsData[i].title+'</p>')
                    }
                    else{
                        allNewsContainer.insertAdjacentHTML('beforeend', '<div class="all-news__container-item"><img src="'+newsData[i].img_source+'" alt=""><p class="news-title">'+newsData[i].title+'</p><p class="news-date">'+newsData[i].public_date+'</p><div class="news-background"><div class="news-full__container"><div class="close-full__news-btn"><div class="close-full__news-btn__item"></div><div class="close-full__news-btn__item"></div></div></div></div></div>')
                    }
                }
            },
            getFullNews(){
                let openFlag = false
                let newsItem = document.querySelectorAll('.all-news__container-item')
                let newsItemBackground = document.querySelectorAll('.news-background')
                for (let i=0; i<newsItem.length; i++){
                    newsItem[i].onclick = () =>{
                        newsItemBackground[i].style.transform = 'scale(1)'
                    }


                }
            },
            closeFullNews(){
                let newsItemBackground = document.querySelectorAll('.news-background')
                let closeFullNewsBtn = document.querySelectorAll('.close-full__news-btn')
                for (let i=0; i<closeFullNewsBtn.length; i++){
                    closeFullNewsBtn[i].onclick = () =>{
                       console.log(newsItemBackground[i].style.transform)
                        newsItemBackground[i].style.transform = 'scale(0)'
                    }

                }
            }


        },
        mounted() {
            document.title = 'Главная'
            console.log(this.getMoney())
            this.createMoneyStat()
            this.createDate()
            this.createMainNews()
            this.getFullNews()
            this.closeFullNews()
            


        }



    }


</script>