//Блок
const generalFilter = document.getElementById('generalFilter');
//Триггер
const generalFilterTrigger = document.getElementById('generalFilterTrigger');
const generalFilterOptionsArr = ['Все игры', 'Ролевая игра', 'Симулятор', 'Инди', 'Гонки', 'Спорт', 'Экшн', 'Стратегия', 'Шутер', 'Приключения', 'Фильмы для геймеров'];

function createGeneralFilterDropDownMenu() {
    let ul = document.createElement('ul');
    ul.className = 'dropDownMenu';
    ul.id = 'generalFilterDropDownMenu';
    for (let i = 0; i < generalFilterOptionsArr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<label>
          <input type="radio" name="generalFilter" value="">
          <svg class ="uncheck" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
          <svg class="check" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/></svg>
          <span class="optionName">${generalFilterOptionsArr[i]}</span>
        </label>`;
        ul.appendChild(li);
    }
    generalFilter.appendChild(ul);
}
createGeneralFilterDropDownMenu();

for (let k = 0; k < sortByOptions.length; k++) {
    let sortByOption = sortByOptions[k];
    sortByOption.addEventListener('click', function(e) {
        let newTextContent = e.target.textContent;
        sortBySelectedWindow.textContent = newTextContent;
    })
}