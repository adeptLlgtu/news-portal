<template>
    <div class="main">
        <div class="repair-menu">
            <div class="repair-menu__container">
                <div class="close-menu__btn">
                    <div class="close-menu__btn-item"></div>
                    <div class="close-menu__btn-item"></div>
                </div>
                <form action="">
                    <div class="repair-menu__container-generate">

                    </div>

                    <div class="for-button__block">
                        <button class="public-button">Опубликовать</button>
                    </div>
                </form>
            </div>

        </div>
        <div class="scroll-container">
            <div class="main-container">
                <h2>{{title}}</h2>
                <div class="magazine-container">

                </div>
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
                    <p>Данные сохранены</p>
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
    import '../assets/styles/magazine.scss'
    import bad from '../assets/bad.svg'
    import success from '../assets/success.svg'
    import repair from '../assets/repair-news.svg'
    import deleteBtn from '../assets/delete-btn.svg'


    export default {
        name: 'Magazine',

        components: {

        },
        data: function () {
            return {
                title: 'Журнал новостей',
                bad, success, repair, deleteBtn

            };
        },
        methods:{
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
            createMagazine(){
                const newsData = this.getNews()
                let magazineContainer = document.querySelector('.magazine-container')
                for (let i=0; i<newsData.length; i++){
                    if (newsData[i].author_id===localStorage.id){
                        magazineContainer.insertAdjacentHTML('beforeend', '<div id="'+newsData[i].id+'" class="magazine-item"><p class="magazine-news__title">'+newsData[i].title+'</p><p class="magazine-news__public-date">'+newsData[i].public_date+'</p><p class="magazine-news__text">'+newsData[i].description+'</p><div class="magazine-news__img-block"><img title="Редактировать" class="magazine-news__img-repair" src="'+this.repair+'" alt=""><img title="Удалить статью" class="magazine-news__img" src="'+this.deleteBtn+'" alt=""></div></div>')
                    }
                    else {
                        console.log(false)
                    }
                }
            },
            getRepairMenu(){
                const newsData = this.getNews()
                let repairMenu = document.querySelector('.repair-menu')
                let repairBtns = document.querySelectorAll('.magazine-news__img-repair')
                let generateContainer = document.querySelector('.repair-menu__container-generate')
                for (let i=0; i<repairBtns.length; i++){
                    repairBtns[i].onclick = () =>{
                        let videoFlag = newsData[i].video_flag
                        let disclaimerFlag = newsData[i].disclamer
                        let famousFlag = newsData[i].famous

                        if(videoFlag===true){
                            videoFlag='checked'
                        }
                        else{
                            videoFlag=''
                        }

                        if(disclaimerFlag===true){
                            disclaimerFlag='checked'
                        }
                        else{
                            disclaimerFlag=''
                        }

                        if(famousFlag===true){
                            famousFlag='checked'
                        }
                        else{
                            famousFlag=''
                        }
                        localStorage.setItem('item', repairBtns[i].parentNode.parentNode.id)
                        generateContainer.insertAdjacentHTML('afterbegin', '<input value="'+newsData[i].id+'" name="id" class="id-str" required id="id" type="number"><div class="top-form__block">\n' +
                            '                        <div class="top-form__block-item">\n' +
                            '                            <label for="public_date">Дата публикации</label>\n' +
                            '                            <input value="'+newsData[i].public_date+'" name="public_date" required id="public_date" type="text">\n' +
                            '                        </div>\n' +
                            '                        <div class="top-form__block-item">\n' +
                            '                            <label for="author">Автор</label>\n' +
                            '                            <input value="'+newsData[i].author+'" name="author" required id="author" type="text">\n' +
                            '                        </div>\n' +
                            '                    </div>\n' +
                            '                    <div class="input-block">\n' +
                            '                        <label for="title">Заголовок</label>\n' +
                            '                        <input value="'+newsData[i].title+'" name="title" required id="title" type="text">\n' +
                            '                    </div>\n' +
                            '                    <div class="input-block">\n' +
                            '                        <label for="img">Изображение (адрес)</label>\n' +
                            '                        <input value="'+newsData[i].img_source+'" name="img_source" required id="img" type="text">\n' +
                            '                    </div>\n' +
                            '                    <div class="input-block">\n' +
                            '                        <label for="description">Содержание</label>\n' +
                            '                        <textarea required class="mail" id="description" name="description">'+newsData[i].description+'</textarea>\n' +
                            '                    </div>\n' +
                            '                    <div class="flag-block">\n' +
                            '                        <input '+videoFlag+' type="checkbox" class="custom-checkbox" id="video-flag" name="video_flag">\n' +
                            '                        <label for="video-flag">Видео-новость</label>\n' +
                            '                        <input '+disclaimerFlag+' type="checkbox" class="custom-checkbox" id="disclamer" name="disclamer">\n' +
                            '                        <label for="disclamer">18+</label>\n' +
                            '                        <input '+famousFlag+' type="checkbox" class="custom-checkbox" id="famous" name="famous">\n' +
                            '                        <label for="famous">Важная</label>\n' +
                            '                    </div>')
                        repairMenu.style.top = '0%'

                    }
                }
                let form = document.querySelector('form')
                let sendBtn = document.querySelector('.public-button')
                sendBtn.onclick = async (e) => {
                    e.preventDefault();
                    let formData = new FormData(form)
                    let videoFlag = document.querySelector('#video-flag')
                    let disclamer = document.querySelector('#disclamer')
                    let famous = document.querySelector('#famous')

                    formData.delete('video_flag')
                    formData.delete('disclamer')
                    formData.delete('famous')
                    formData.append('video_flag', videoFlag.value)
                    formData.append('disclamer', disclamer.value)
                    formData.append('famous', famous.value)
                    formData.append('author_id', localStorage.id)
                    // eslint-disable-next-line
                    let response = await fetch('http://API-news.loc/api/repair_news', {
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
            },
            closeRepairMenu(){
                let repairMenu = document.querySelector('.repair-menu')
                let closeBtn = document.querySelector('.close-menu__btn')
                let generateContainer = document.querySelector('.repair-menu__container-generate')

                closeBtn.onclick = () =>{
                    repairMenu.style.top = '-120%'
                    generateContainer.innerHTML = ''
                }

            },
            closeModal(){
                let closeModalBtn = document.querySelector('.modal-close__btn')
                let backgroundModalBlock = document.querySelector('.modal-background')
                closeModalBtn.onclick = () =>{
                    backgroundModalBlock.style.top = '-120%'
                }
            }
        },
        mounted() {
            document.title = this.title
            this.createMagazine()
            this.getRepairMenu()
            this.closeRepairMenu()
            this.closeModal()

            let magazineStrings = document.querySelectorAll('.magazine-item')
            for (let i=0; i<magazineStrings.length; i++){
                if (i%2){
                    magazineStrings[i].style.background = '#FFFFFF'
                }
            }

        }
    }


</script>