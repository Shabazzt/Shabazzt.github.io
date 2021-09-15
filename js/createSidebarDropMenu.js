const filterItemPrice = document.getElementById('filterItemPrice');
const filterItemSystem = document.getElementById('filterItemSystem');
const filterItemFeatures = document.getElementById('filterItemFeatures');
const filterItemLanguages = document.getElementById('filterItemLanguages');
const filterItemDlc = document.getElementById('filterItemDlc');

const sidebarDropDowmMenuArr = {
    filterItemPrice: ['5$', '10$', '15$', '17$', '20$', '30$', 'Со скидкой', 'Бесплатно', 'Все'],
    filterItemSystem: ['Windows', 'OSX', 'Linux', 'macOS'],
    filterItemFeatures: ['Одиночная', 'Сетевая', 'Кооперативный режим', 'Достижения', 'Таблицы лидера'],
    filterItemLanguages: ['English', 'Русский', 'Deutsch'],
    filterItemDlc: ['Оригинальные', 'От фанатов', 'Последние']
};

function createSidebarDropDownMenu(elementId) {
    const container = document.getElementById(elementId);
    let ul = document.createElement('ul');
    ul.className = 'dropDownMenu';
    items = sidebarDropDowmMenuArr[elementId];
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<label>
        <input type="checkbox"></input>
        <svg class ="uncheck" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
        <svg class= "check" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/></svg>
        <span class="optionName" value="${items[i]}">${items[i]}</span>
         </label>`;
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
createSidebarDropDownMenu('filterItemPrice');
createSidebarDropDownMenu('filterItemSystem');
createSidebarDropDownMenu('filterItemFeatures');
createSidebarDropDownMenu('filterItemLanguages');
createSidebarDropDownMenu('filterItemDlc');