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

        },
        mounted() {
            document.title = 'Главная'
            console.log(this.getMoney())
            this.createMoneyStat()
            this.createDate()



        }



    }


</script>