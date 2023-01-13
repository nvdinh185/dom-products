var formElement = document.forms['form-1'];
var searchElement = document.createElement('input');
searchElement.placeholder = 'Search...';
formElement.appendChild(searchElement);
var brElement = document.createElement('br');
formElement.appendChild(brElement);
var checkboxElement = document.createElement('input');
checkboxElement.type = 'checkbox';
var labelElement = document.createElement('label');
labelElement.innerText = 'Only show products in stock';
formElement.appendChild(checkboxElement);
formElement.appendChild(labelElement);

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const tbElement = document.querySelector('#tbl');

function renderTitle() {

    const headElement = document.createElement('thead');
    const tr1Element = document.createElement('tr');

    const th1Element = document.createElement('th');
    th1Element.innerText = 'Name';
    tr1Element.appendChild(th1Element);
    const th2Element = document.createElement('th');
    th2Element.innerText = 'Price';
    tr1Element.appendChild(th2Element);
    headElement.appendChild(tr1Element);
    tbElement.appendChild(headElement);
}

function renderProducts(products, filterText = '', inStockOnly = false) {

    var tbody = document.getElementsByTagName('tbody');
    if (tbody[0]) {
        tbody[0].remove();
    }
    const bodyElement = document.createElement('tbody');
    let lastCategory = null;
    products.forEach(function (pro) {
        if (pro.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !pro.stocked) {
            return;
        }

        if (pro.category !== lastCategory) {
            const trElement = document.createElement('tr');
            const tdElement = document.createElement('td');
            tdElement.setAttribute('colspan', 2);
            Object.assign(tdElement.style, {
                backgroundColor: '#FAEBD7',
                color: 'blue',
                textAlign: 'center'
            })
            tdElement.innerText = pro.category;
            trElement.appendChild(tdElement);
            bodyElement.appendChild(trElement);
        }
        const tr2Element = document.createElement('tr');

        const td1Element = document.createElement('td');
        td1Element.innerText = pro.name;
        tr2Element.appendChild(td1Element);
        const td2Element = document.createElement('td');
        td2Element.innerText = pro.price;
        tr2Element.appendChild(td2Element);
        if (!pro.stocked) {
            td1Element.setAttribute('style', 'color:red;');
            td2Element.setAttribute('style', 'color:red;');
        }

        bodyElement.appendChild(tr2Element);
        tbElement.appendChild(bodyElement);
        lastCategory = pro.category;

    })
}

// Tiêu đề
renderTitle();
// Nội dung
renderProducts(PRODUCTS);
var filterText = '';
var inStockOnly = false;
searchElement.oninput = function (e) {
    filterText = e.target.value;
    renderProducts(PRODUCTS, filterText, inStockOnly);
}

checkboxElement.onchange = function (e) {
    inStockOnly = e.target.checked;
    renderProducts(PRODUCTS, filterText, inStockOnly);

}