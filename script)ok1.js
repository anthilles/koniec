var add = document.getElementById('addElem'),
    list = document.getElementById('list');

add.addEventListener('click', function(){
    var element = document.createElement('li'),
    x = document.getElementById('cwiczeniaDane').elements.namedItem("name").value,
    y = document.getElementById('cwiczeniaDane').elements.namedItem("time").value;
    element.innerHTML = x + ": " + y + " minut";
    list.appendChild(element);
});

var generuj = document.getElementById('wygeneruj');

generuj.addEventListener('click', function(){
    if (generuj.length > 0) {
        console.log('ok!');
    }else{
        document.getElementById("listaCwiczen").classList.add('listaCwiczenUkryta');
        document.getElementById("listaCwiczen").classList.remove('listaCwiczen');
        document.getElementById("PrzyciskOdgenerujUkryty").classList.remove('PrzyciskOdgenerujUkryty');
    }
});

var odgeneruj = document.getElementById('odgeneruj');
odgeneruj.addEventListener('click', function(){
    
    document.getElementById("listaCwiczen").classList.add('listaCwiczen');
    document.getElementById("listaCwiczen").classList.remove('listaCwiczenUkryta');
    document.getElementById("PrzyciskOdgenerujUkryty").classList.add('PrzyciskOdgenerujUkryty');
});


