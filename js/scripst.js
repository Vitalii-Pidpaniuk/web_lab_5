document.addEventListener('DOMContentLoaded', function () {
    // Змінити місцями контент у блоках
    const logoImageBlock = document.querySelector('.home_button');
    const footerItemBlock = document.querySelector('.footer_item');
    const logoImageContent = logoImageBlock.innerHTML;
    logoImageBlock.innerHTML = footerItemBlock.innerHTML;
    footerItemBlock.innerHTML = logoImageContent;

    // знайти площу прямокутника
    function calculateRectangleArea(length, width) {
        return length * width;
    }

    const length = 5;
    const width = 9;
    const area = calculateRectangleArea(length, width);
    const resultElement = document.querySelector('.main_text2');
    resultElement.innerHTML = `Площа прямокутника: ${area}`;

    // пошук значення
    const findButton = document.getElementById('findButton');
    findButton.addEventListener('click', findMinMax);

    function findMinMax() {
        console.log('Button clicked!');
        // event.preventDefault();

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
        // setCookie(min, max, 7);
        // document.cookie = min + max;
    }

    // function setCookie(name, value, days) {
    //     const expires = new Date();
    //     expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    //     document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    // }

    // function getCookie(name) {
    //     const cookieName = `${name}=`;
    //     const cookies = document.cookie.split(';');

    //     for (const cookie of cookies) {
    //         let c = cookie.trim();
    //         if (c.indexOf(cookieName) === 0) {
    //             return c.substring(cookieName.length, c.length);
    //         }
    //     }

    //     return null;
    // }

    function displayMessage(message, containerClass) {
        // Знаходимо елемент для виведення повідомлень та виводимо результат
        const containerElement = document.querySelector(`.${containerClass}`);
        if (containerElement) {
            containerElement.innerHTML = message;
        } else {
            alert(message); // Якщо контейнер не знайдено, вивести повідомлення через alert
        }
    }

    // const { min, max } = readFromCookies();
    // if (min !== null && max !== null) {
    //     displayMessage(`Збережені значення в cookies: Мінімальне - ${min}, Максимальне - ${max}`, 'main_text1');
    // }
});
