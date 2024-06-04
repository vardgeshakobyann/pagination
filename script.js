const list_items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
    'item13',
    'item14',
    'item15',
    'item16',
    'item17',
    'item18',
    'item19',
    'item20',
    'item21',
    'item22'
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

function displayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = '';
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    paginatedItems.map((elem, index) => {
        wrapper.innerHTML += `
            <div class="item">
                <p>${elem}</p>
            </div>
        `
    })
}

function setupPagination (items, wrapper, rows_per_page) {
    wrapper.innerHTML = '';

    let page_count = Math.ceil(items.length / rows_per_page);

    for (let i = 1; i < page_count + 1; i++) {
       let btn = paginationButton(i, items);
       wrapper.append(btn);
    }
}

function paginationButton (page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');

    button.addEventListener('click', (e) => {
        current_page = page;
        displayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    })

    return button
}

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);