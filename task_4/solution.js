// Задание 4.1. Вывод карточек товаров

function parseProducts(JSON) {
    // Аргументом функции является JSON
    let data = JSON.parse(json);
    let poducts = data.products;
    return products;
    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data


// Напишите функцию renderProductsCards(json)
function renderProductsCards(JSON) {
    clearProducts();
    parseProducts(json) 
        products = parseProducts(json);
        length = products.length;
        for(let i=0; i < length; i += 1) {
            addProduct(products[i]);
        }
    }
}

// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
// Запишите в переменную length значение свойства products.length
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
