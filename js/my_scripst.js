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

    const findButton = document.getElementById('findButton');

    findButton.onclick = function findMinMaxFunc(event) {
        console.log('Button clicked!');
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
        setCookie("min", min, 7);
        setCookie("max", max, 7);
        alert(document.cookie);
        const reloadPage = confirm('Дані збережено в cookies. Перезавантажити сторінку?');
                if (reloadPage) {
                    location.reload();
                }
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

    function displayMessage(message, containerClass) {
        const containerElement = document.querySelector(`.${containerClass}`);
        if (containerElement) {
            containerElement.innerHTML = message;
        } else {
            alert(message);
        }
    }

    const cookieExists = document.cookie.includes('min=') && document.cookie.includes('max=');

    if (cookieExists) {
        const retrieveData = confirm(`Є збережені дані в cookies. Зберегти на сторінці?`);

        if (retrieveData) {
            const savedData = document.cookie.split(';')
                .map(cookie => cookie.trim().split('='))
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});

            alert(`Збережені дані виведено на сторінці: Мінімальне - ${savedData.min}, Максимальне - ${savedData.max}`);
        } else {
            document.cookie = 'min=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'max=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            location.reload();
        }
    }     
    //make block text bold
        const labelItem = document.getElementById('submitted_text');
        var isBold;
        labelItem.onfocus = function updateBoldStyle() {
            // document.getElementById("submitted_text").value = document.getElementById("submitted_text").value.bold();
            if(document.getElementById('boldCheckbox').checked)
            {
                labelItem.style.fontWeight = "bold";
                // isBold = labelItem.style.valueOf();
                isBold = true;
                localStorage.setItem("isBoldText", isBold);
            }
            else
            {
                labelItem.style.fontWeight = "normal";
                isBold = false;
                localStorage.setItem("isBoldText", isBold);
            }
        }

    window.onload = function()
    {
        var isBoldText = localStorage.getItem("isBoldText");
        if(isBoldText == "true")
        {
            labelItem.style.fontWeight = "bold";
        }
        else
        {
            labelItem.style.fontWeight = "normal";
        }
    }

    // create table
    const create_table = this.getElementById("table_create");
    var body = document.getElementById("table_container");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    create_table.onclick = function tableCreate(event) {
        event.preventDefault();
        
        for (var j = 0; j <= document.getElementById("rows_num").value; j++) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var cellText = document.createTextNode("row " + j);
            cell.style.border = "1px solid #000";
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);
        }
        tbl.style.border = "1px solid #000";
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
    }
    
    const submit = this.getElementById("save_table");

    submit.onclick = function table_save(event)
    {
        event.preventDefault();
        const tableData = {
            rows: []
        };

        for (const row of tbl.rows) {
            const rowData = [];
            for (const cell of row.cells) {
                rowData.push(cell.textContent);
            }
            tableData.rows.push(rowData);
        }
        localStorage.setItem('myTableData', JSON.stringify(tableData));
        
    }

    const my_table = localStorage.getItem('myTableData');
    window.onload = function(){
        if(my_table)
        {
            const parsedData = JSON.parse(my_table);
            const table = document.createElement('table');

            for (const rowData of parsedData.rows) {
            const row = document.createElement('tr');
            for (const cellData of rowData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                row.appendChild(cell);
            }
            table.appendChild(row);
            }
            document.getElementById('table_container').appendChild(table);
        }
        else {
            console.log('No data in localStorage');
        }
    }    
});
