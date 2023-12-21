// Змінити місцями контент у блоках
document.addEventListener('DOMContentLoaded', function () {
            const logoImageBlock = document.querySelector('.home_button');
            const footerItemBlock = document.querySelector('.footer_item');
            const logoImageContent = logoImageBlock.innerHTML;
            logoImageBlock.innerHTML = footerItemBlock.innerHTML;
            footerItemBlock.innerHTML = logoImageContent;
        });

// знайти площу прямокутника
function calculateRectangleArea(length, width) {
            return length * width;
        }

        document.addEventListener('DOMContentLoaded', function () {
            const length = 5;
            const width = 9;
            const area = calculateRectangleArea(length, width);
            const resultElement = document.querySelector('.main_text2');
            resultElement.innerHTML = `Площа прямокутника: ${area}`;
});


// пошук значення
document.addEventListener('DOMContentLoaded', function () {
    function findMinMax(event) {
        event.preventDefault();

        const numbersForm = document.getElementById('numbersForm');
        const inputElements = numbersForm.querySelectorAll('input[type="text"]');

        const numbers = [];
        for (let i = 0; i < inputElements.length; i++) {
            const values = inputElements[i].value.trim().split(/\s+/);

            for (const value of values) {
                if (value !== "") {
                    const numericValue = parseFloat(value);
                    if (!isNaN(numericValue)) {
                        numbers.push(numericValue);
                    }
                }
            }
        }

        if (numbers.length === 0) {
            displayMessage('Будь ласка, введіть хоча б одне число.', 'main_text1');
            return;
        }

        const min = Math.min(...numbers);
        const max = Math.max(...numbers);

        displayMessage(`Мінімальне значення: ${min}, Максимальне значення: ${max}`, 'main_text1');
        setCookie(min, max, 7);
        document.cookie = min + max;
    }
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        let c = cookie.trim();
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }

    return null;
}

function findMinMax(event) {
    event.preventDefault();

    const numbersForm = document.getElementById('numbersForm');
    const inputElements = numbersForm.querySelectorAll('input[type="text"]');

    const numbers = [];
    for (let i = 0; i < inputElements.length; i++) {
        const values = inputElements[i].value.trim().split(/\s+/);

        for (const value of values) {
            if (value !== "") {
                const numericValue = parseFloat(value);
                if (!isNaN(numericValue)) {
                    numbers.push(numericValue);
                }
            }
        }
    }

    if (numbers.length === 0) {
        displayMessage('Будь ласка, введіть хоча б одне число.', 'main_text1');
        return;
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    displayMessage(`Мінімальне значення: ${min}, Максимальне значення: ${max}`, 'main_text1');
    setCookie('min', min, 7); // Збереження кукісів на 7 днів
    setCookie('max', max, 7);
}

// Отримати посилання на кнопку
const findButton = document.getElementById('findButton');

// Додати обробник події для кнопки
findButton.addEventListener('click', findMinMax);

function displayMessage(message, containerClass) {
    // Знаходимо елемент для виведення повідомлень та виводимо результат
    const containerElement = document.querySelector(`.${containerClass}`);
    if (containerElement) {
        containerElement.innerHTML = message;
    } else {
        alert(message); // Якщо контейнер не знайдено, вивести повідомлення через alert
    }
}
});