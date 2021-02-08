let slider_range = document.querySelector('#myrange');
let switch_label = document.querySelector('.switch');
let input_checkbox = document.querySelector('.switch__checkbox');
let amount_viewers = document.querySelector('.card__viewers');
let price = document.querySelector('.card__price');

let valores ={
'$8.00' : '10K',
'$12.00': '50K',
'$16.00': '100K',
'$24.00': '500k',
'$36.00': '1M'
}

prices = ['$8.00','$12.00','$16.00','$24.00','$36.00']

slider_range.addEventListener('input',function () {setBackground(this)},false);
slider_range.addEventListener('input',function () {putPrices(this)},false);
slider_range.addEventListener('onpageshow',function () {putPrices(this)},false);
input_checkbox.addEventListener('change', function(){
    if (this.checked) {
        switch_label.style.background =  'hsl(174, 77%, 80%)'
    } else {
        switch_label.style.background =  'hsl(223, 50%, 87%)'
    }
}, false)

function putPrices(slider){
    let valor = prices[slider.value];
    console.log(valor)
    if (valor in valores){
        amount_viewers.textContent = valores[valor]
        price.innerHTML = valor
    }
}

function setBackground (slider){
    var gradValue = Math.round(((slider.value-slider.min)/slider.step)*100/((slider.max - slider.min)/slider.step));
    // console.log(gradValue)
    var grad = 'linear-gradient(90deg, hsl(174, 77%, 80%) ' + gradValue + '%,hsl(224, 65%, 95%) ' + (gradValue+1) + '%)';
    slider.style.background= grad;
    // console.log(grad)
}

/* 8  12 
16 20 
24 28 
32 36 */