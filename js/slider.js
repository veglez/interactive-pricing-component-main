const slider_range = document.querySelector('#myrange');
const switch_label = document.querySelector('.switch');
const input_checkbox = document.querySelector('.switch__checkbox');
const amount_viewers = document.querySelector('.card__viewers');
const price = document.querySelector('.card__price');

const viewers =['10K','50K','100K','500k','1M']

prices = [8.00,12.00,16.00,24.00,36.00]

slider_range.addEventListener('input',function () {setBackground(this)},false);
slider_range.addEventListener('input',function () {putPrices(this)},false);
input_checkbox.addEventListener('change', function(){
    if (this.checked) {
        switch_label.style.background =  'hsl(174, 77%, 80%)'
    } else {
        switch_label.style.background =  'hsl(223, 50%, 87%)'
    }
    putPrices(slider_range)
}, false)

function putPrices(slider){
    let valor = prices[slider.value];
    let viewers_ammount = viewers[slider.value];
    if (input_checkbox.checked){
        valor = valor*0.75
    }
    amount_viewers.textContent = viewers_ammount
    price.innerHTML = '$'+valor+'.00'
}

function setBackground (slider){
    let gradValue = Math.round(((slider.value-slider.min)/slider.step)*100/((slider.max - slider.min)/slider.step));
    // console.log(gradValue)
    let grad = 'linear-gradient(90deg, hsl(174, 77%, 80%) ' + gradValue + '%,hsl(224, 65%, 95%) ' + (gradValue+1) + '%)';
    slider.style.background= grad;
    // console.log(grad)
}

putPrices(slider_range)
