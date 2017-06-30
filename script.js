var add = document.getElementById('addElem'),
    list = document.getElementById('list');

add.addEventListener('click', function(){
    var element = document.createElement('li'),
        elementButton = document.createElement('button'),
        //czas
        elementTime = document.createElement('span'),
        elementTimeButton =document.createElement('button'),
        x = document.getElementById('cwiczeniaDane').elements.namedItem("name").value,
        y = document.getElementById('cwiczeniaDane').elements.namedItem("time").value;
    
    if (x.lenght == 0){
        alert('musisz dodać przynajmniej jedno ćwiczenie!')    
    }else if (y.length <= 0){
        alert('musisz dodać czas wykonywanego ćwiczenia!')
    }else{   
        element.innerHTML = x + ": " + y + " minut";
        element.appendChild(elementButton);
        elementButton.innerHTML = "usuń";
        //czas
        element.appendChild(elementTime);
//        element.appendChild(elementTimeButton);
//        elementTimeButton.innerHTML = "Zacznij ćwiczenie";
        elementTime.setAttribute("id", "count");
//        elementTimeButton.setAttribute("id", "startClock");
        list.appendChild(element);
    }
});




//lista

var generuj = document.getElementById('wygeneruj');

generuj.addEventListener('click', function(){
    var x = document.getElementById('cwiczeniaDane').elements.namedItem("name").value,
        y = document.getElementById('cwiczeniaDane').elements.namedItem("time").value;
    if (x.length == 0) {
        alert('musisz dodać przynajmniej jedno ćwiczenie!')
    }else if (y.length == 0){
        alert('musisz dodać czas wykonywanego ćwiczenia!')
    }else{
        document.getElementById("listaCwiczen").classList.add('listaCwiczenUkryta');
        document.getElementById("listaCwiczen").classList.remove('listaCwiczen');
        document.getElementById("PrzyciskOdgenerujUkryty").classList.remove('PrzyciskOdgenerujUkryty');
        odliczanieLista()
    }
});

// powrot

var odgeneruj = document.getElementById('odgeneruj');
odgeneruj.addEventListener('click', function(){
    
    document.getElementById("listaCwiczen").classList.add('listaCwiczen');
    document.getElementById("listaCwiczen").classList.remove('listaCwiczenUkryta');
    document.getElementById("PrzyciskOdgenerujUkryty").classList.add('PrzyciskOdgenerujUkryty');
});

//timer

function startTimer(){
   var y = document.getElementById('cwiczeniaDane').elements.namedItem("time").value,
   counter = y*60;
    
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter + 'sekund';
    }
    if (counter === 0) {
        span.innerHTML = 'ćwiczenie zakończone';
        clearInterval(counter);
        document.getElementById("count").removeAttribute("class");
    }
  }, 1000);
}

var czas = document.getElementById('startClock');
czas.addEventListener('click', function(){
    startTimer();
 });


function odliczanieLista(){
    var nums = document.getElementById("list"),
     listItem = nums.getElementsByTagName("li"),
     x = document.getElementById('cwiczeniaDane').elements.namedItem("name").value,
     y = document.getElementById('cwiczeniaDane').elements.namedItem("time").value;
    var listItem = [];
    console.log(listItem);

//    for (var i=0; i < listItem.length; i++) {
//        var wynik = x;
//        console.log(wynik);
//    }
}
