function ajaxget() {
    let request = new XMLHttpRequest();

    request.open('GET', 'php/record.php', false);
    request.send();
    if (request.status == 200) {
        let dor = document.getElementById('post').innerText = request.responseText;
    }
}
ajaxget();

function ajaxget1() {
    let request = new XMLHttpRequest();

    request.open('GET', 'php/record2.php', false);
    request.send();
    if (request.status == 200) {
        let dor = document.getElementById('post2').innerText = request.responseText;
    }
}
ajaxget1();

function ajaxget2() {
    let request = new XMLHttpRequest();

    request.open('GET', 'php/record3.php', false);
    request.send();
    if (request.status == 200) {
        let dor = document.getElementById('post3').innerText = request.responseText;
    }
}
ajaxget2();

function ajaxget3() {
    let request = new XMLHttpRequest();

    request.open('GET', 'php/record4.php', false);
    request.send();
    if (request.status == 200) {
        let dor = document.getElementById('post4').innerText = request.responseText;
    }
}
ajaxget3();


function roger() {

    let dor = document.getElementById('post').innerText;
    let arr = dor.split(' ');


    let dor2 = document.getElementById('post2').innerText;
    let arr2 = dor2.split(' ');

    let dor3 = document.getElementById('post3').innerText;
    let arr3 = dor3.split(' ');

    let dor4 = document.getElementById('post4').innerText;
    let arr4 = dor4.split(' ');

    for (let j = 0; j < arr.length && arr2.length && arr3.length; j++) {
        // console.log(arr);

        var table = document.getElementById('student-lister');
        var tr = document.getElementsByTagName('tr');
        var newRow = table.insertRow(table.rows.length);


        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);

        cel1.innerHTML = arr4[j];
        cel2.innerHTML = arr[j];
        cel3.innerHTML = arr2[j];
        cel4.innerHTML = arr3[j];
        cel5.innerHTML = "<img class='edit' src='image/edit.png' style='height:60px; width:60px;'>";
        cel6.innerHTML = "<img class='delete' src='image/black.png' style='height:60px; width:60px;'>";
    }
}
roger();

var table = document.getElementById('student-lister');
let cells = table.getElementsByTagName('tr');

for (var i = 1, len = cells.length; i < len; i++) {
    cells[i].onmousemove = function () {
        document.getElementById('div').innerText = this.innerText;
        let divv = document.getElementById('div').innerText;
        let arr = divv.split(' ');
        fnameDiv = arr[1];
        lnameDiv = arr[2];
        emailDiv = arr[3];
    }
}

function deleElemntTable(event) {
    for (var i = 1, len = cells.length; i < len; i++) {

        let paramsOne = 'fnameDel=' + fnameDiv + '&' + 'lnameDel=' + lnameDiv + '&' + 'emailDel=' + emailDiv + '&';
        ajaxPost(paramsOne);

        function ajaxPost(paramsOne) {
            let request = new XMLHttpRequest();

            request.open('POST', 'php/delete.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send(paramsOne);
        }
    }
    let el = event.target.parentElement.parentElement,
        localStorEle = event.target.parentElement.parentElement.childNodes[0].innerHTML;

    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
    localStorage.removeItem(localStorEle - 1);
}

function editElement(event) {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            var rIndex;
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[1].innerHTML;
            document.getElementById("lname").value = this.cells[2].innerHTML;
            document.getElementById("Email").value = this.cells[3].innerHTML;
        };
    }
    deleElemntTable(event);
}

var delElem = document.querySelectorAll('.delete');
for (var i = 0; i < delElem.length; i++) {
    delElem[i].addEventListener('click', function (event) {
        deleElemntTable(event);
    });
}
var editElem = document.querySelectorAll('.edit');
for (var i = 0; i < editElem.length; i++) {
    editElem[i].addEventListener('click', function (event) {
        editElement(event);
    });
}
deleElemntTable(event);
editElement(event);









let paramsOne = 'fname=' + fname + '&' + 'lname=' + lname + '&' + 'email=' + Email + '&';

function addRow() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var Email = document.getElementById('Email').value;
    if (fname.length == 0 || lname.length == 0 || Email.indexOf('.', 0) == -1 || Email.indexOf('@', 0) == -1) {
        document.getElementById('error').innerHTML = 'Убедитесь что все поля заполнены и указан корректный E-mail';
    } else {
        document.getElementById('error').innerHTML = "";
        var table = document.getElementById('student-lister');
        var index;
        var tr = document.getElementsByTagName('tr');
        var newRow = table.insertRow(table.rows.length);

        let params = 'fname=' + fname + '&' + 'lname=' + lname + '&' + 'email=' + Email + '&';
        ajaxPost(params)

        function ajaxPost(params) {
            let request = new XMLHttpRequest();

            request.open('POST', 'php/add.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send(params);
        }



        for (index = 0; index < tr.length - 1; index++);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);

        cel1.innerHTML = index;
        cel2.innerHTML = fname;
        cel3.innerHTML = lname;
        cel4.innerHTML = Email;
        cel5.innerHTML = "<img class='edit' src='image/edit.png' style='height:60px; width:60px;'>";
        cel6.innerHTML = "<img class='delete' src='image/black.png' style='height:60px; width:60px;'>";
        var inputs = document.querySelectorAll('input[type=text]');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        };



        var delElem = document.querySelectorAll('.delete');
        for (var i = 0; i < delElem.length; i++) {
            delElem[i].addEventListener('click', function (event) {
                deleElemntTable(event);
            });
        }
        var editElem = document.querySelectorAll('.edit');
        for (var i = 0; i < editElem.length; i++) {
            editElem[i].addEventListener('click', function (event) {
                editElement(event);
            });
        }


        let cells = table.getElementsByTagName('tr');
        cells[i].onmousemove = function () {
            document.getElementById('div').innerHTML = this.innerText;
            let divv = document.getElementById('div').innerText;
            let arr = divv.split(' ');
            fnameDiv = arr[1];
            lnameDiv = arr[2];
            emailDiv = arr[3];
        }

        function deleElemntTable(event) {
            for (var i = 1, len = cells.length; i < len; i++) {

                let paramsOne = 'fnameDel=' + fnameDiv + '&' + 'lnameDel=' + lnameDiv + '&' + 'emailDel=' + emailDiv + '&';
                ajaxPost(paramsOne);

                function ajaxPost(paramsOne) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'php/delete.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.send(paramsOne);
                }
            }
            let el = event.target.parentElement.parentElement,
                localStorEle = event.target.parentElement.parentElement.childNodes[0].innerHTML;

            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
            localStorage.removeItem(localStorEle - 1);
        }

        function editElement(event) {
            for (var i = 1; i < table.rows.length; i++) {
                table.rows[i].onclick = function () {
                    var rIndex;
                    rIndex = this.rowIndex;
                    document.getElementById("fname").value = this.cells[1].innerHTML;
                    document.getElementById("lname").value = this.cells[2].innerHTML;
                    document.getElementById("Email").value = this.cells[3].innerHTML;
                };
            }
            deleElemntTable(event);
        }
    }
}