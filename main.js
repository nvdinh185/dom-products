var formElement = document.forms['form-1'];

var htmlForms = `
    <input type='text' placeholder='Search...'><br>
    <input type="checkbox">
    <label>Only show products in stock</label>
`;

formElement.innerHTML = htmlForms;

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

const tbElement = document.querySelector('#tbl');

var htmlHead = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
    `;

tbElement.innerHTML = htmlHead;

var bodyElement = document.createElement('tbody');

var lastCategory = null;
PRODUCTS.forEach(function (pro) {
    if (pro.category !== lastCategory) {
        var htmlCategory = `
                <tr>
                    <td colspan='2' style='background-color: #FAEBD7;
                        color: blue; text-align: center;'>${pro.category}
                    </td>
                </tr>
            `;

        bodyElement.innerHTML += htmlCategory;
    }

    var style = !pro.stocked ? "style='color: red'" : '';
    var htmlContent = `
                <tr>
                    <td ${style}>${pro.name}</td>
                    <td ${style}>${pro.price}</td>
                </tr>
            `;

    bodyElement.innerHTML += htmlContent;

    tbElement.appendChild(bodyElement);
    lastCategory = pro.category;
})