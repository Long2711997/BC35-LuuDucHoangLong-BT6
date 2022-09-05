// Bai 1
var BT1 = document.getElementById('BT1');
BT1.onclick = function () {
    var n = 0;
    var sum = 0;

    while (sum < 10000 ) {
        n++
        sum += n
    }

    document.getElementById('result').innerHTML = 'So nguyen duong nho nhat: ' + n;
}

// Bai 2
function tong(x, y, n) {
    var sum = 0;
    for ( var i = 1 ; i <= n ; i ++) {
        y *= x;
        sum += y;
    }
    return sum;
}

var BT2 = document.getElementById('BT2');
BT2.onclick = function () {
    // Get data
    var x = document.getElementById('x').value*1;
    var n = document.getElementById('n').value*1;
    var y = 1;
    // Handle data
    var sum = tong(x, y, n);
    // Print out
    document.getElementById('result2').innerHTML = 'Tong: ' + sum;
}

// Bai 3
var BT3 = document.getElementById('BT3');
BT3.onclick = function () {
    // Get data
    var n = document.getElementById('soN').value*1;
    var x = 1;
    // Handle data
    for ( var i = 1 ; i <= n ; i ++) {
        x *= i;
    }
    // Print out
    document.getElementById('result3').innerHTML = 'Giai thua cua ' + n + ' la ' + x;
}

// Bai 4

var BT4 = document.getElementById('BT4');
BT4.onclick = function () {
    // Get data
    var content = document.createElement("div")
    content.innerHTML = ' ';
    content.className = 'divplus';
    var i = content.length;
    // Handle data
    for ( i = 0 ; i <= 10 ; i ++) {
        document.body.append(content); 

        var divs = document.getElementsByClassName("divplus");
        for (var j = 0; j < divs.length; j++){
            if ((j + 1) % 2 == 0){
                divs[j].style.background = "red";
                divs[j].innerHTML = 'Div Chan'
            } else { 
                divs[j].style.background = "blue";
                divs[j].innerHTML = 'Div Le'
            }
        }
    }
}