/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort()
let list = document.querySelectorAll('.promo__interactive-list li')

list.forEach((el, idx) => {
    el.innerHTML = (idx + 1) + ". " + movieDB.movies[idx]

    let del = document.createElement('div');
    del.classList.add('delete');
    el.appendChild(del)

    del.onclick = () => {
        el.remove()
    }
})
let reklama = document.querySelector('.promo__adv')

reklama.style.display = "none"