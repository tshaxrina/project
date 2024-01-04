/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// movieDB.movies.sort()
// let list = document.querySelectorAll('.promo__interactive-list li')

// list.forEach((el, idx) => {
//     el.innerHTML = (idx + 1) + ". " + movieDB.movies[idx]

//     let del = document.createElement('div');
//     del.classList.add('delete');
//     el.appendChild(del)

//     del.onclick = () => {
//         el.remove()
//     }
// })
import {movies} from './double.js'
 
let cont = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let inp_search = document.querySelector('#search')
let promo__menu_item = document.querySelector('.promo__menu-item')
let promo__menu = document.querySelector('.promo__menu')

reload(movies, cont)

function reload(arr, place) {
    cont.innerHTML = ''
    setMovie(arr[0])
    for (let item of arr) {
        let li = document.createElement('li')
        let div = document.createElement('div')

        li.innerHTML = item.Title
        li.classList.add('promo__interactive-item')
        div.classList.add('delete')

        place.append(li) 
        li.append(div)

        li.onclick = () => {
            setMovie(item)
        }
        
    }
}

let prev = 0

promo__menu_item.forEach((btn, idx) => {
    btn.onclick = () => {
        promo__menu_item[prev].classList.remove('promo__menu-item_active')
        btn.classList.add('promo__menu-item_active')
        changeContent(idx)
        prev = idx
    }
}

)
function setMovie(item) {
    promo__bg.style.backgroundImage = `url(${item.Poster})`
}

inp_search.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = movies.filter (movie => {
        let Title = movie.Title.toUpperCase().trim()
        if(Title.includes(keyword)) {
            return movie
        }
    })
    reload(filtered)
}






