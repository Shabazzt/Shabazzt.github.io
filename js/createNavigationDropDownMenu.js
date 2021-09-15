/* Основной блок*/
const aboutUs = document.getElementById('aboutUs');
const community = document.getElementById('community');
const shop = document.getElementById('shop');
const support = document.getElementById('support');
/* Массивы*/
const dropDowmMenuOptionsArr = {
    aboutUs: ['История', 'Достижения', 'Проекты', 'Присоедениться к команде'],
    community: ['Все форумы', 'Горячие темы', 'Вопросы и ответы', 'Отзывы и пожелания'],
    shop: ['Новые игры', 'Популярные', 'Со скидкой', 'Экшен', 'Приключение', 'Инди', 'Ролевые', 'Шутеры', 'Симуляторы', 'Спорт и гонки', 'Стратегии', 'Фильмы для геймеров', 'Смотреть все игры'],
    support: ['Технические проблемы с игрой', 'Заказы и оплата', 'Учетная запись и сайт', 'Загрузка']
};

function createDropDownMenu(elementId) {
    let ul = document.createElement('ul');
    ul.className = 'dropDownMenu';
    const container = document.getElementById(elementId);
    items = dropDowmMenuOptionsArr[elementId];

    for (let j = 0; j < items.length; j++) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="" target="blank">${items[j]}</a>`;
        li.setAttribute('rightArrow', 'rightArrow');
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
createDropDownMenu('aboutUs');
createDropDownMenu('community');
createDropDownMenu('shop');
createDropDownMenu('support');