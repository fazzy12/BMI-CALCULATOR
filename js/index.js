// slider element

// slide 1
let slider = document.getElementById('myrange');
let slide1Output = document.getElementById('value');

slider.oninput = function(){
    slide1Output.innerHTML = slider.value;
}
slider.addEventListener('mousemove', function() {
    let val = slider.value
    let color = `linear-gradient(90deg, hsl(232, 13%, 33%)${val}%,  hsl(240, 78%, 98%)${val}%)`
    slider.style.background = color
});

// slide 2
let slider2 = document.getElementById('myrange1')
let slide2Output = document.getElementById('value1')

slider2.oninput = function(){
    slide2Output.innerHTML = slider2.value
}

slider2.addEventListener('mousemove', function() {
    let val = slider2.value
    let color = `linear-gradient(90deg, hsl(232, 13%, 33%)${val}%,  hsl(240, 78%, 98%)${val}%)`
    slider2.style.background = color
});





// bmi function

let btn = document.getElementById('bmi')
let result = document.getElementById('bmi-result')

// error message
let errorHeight = document.getElementById('height-error')
let weightError = document.getElementById('weight-error')


btn.addEventListener('click', function(){
    let height = parseInt(slide1Output.value)
    let weight = parseInt(slide2Output.value)
    let result = document.getElementById('bmi-result')
    let height_status = false, weight_status = false

    //handle wrong input
    if (height === 0){
        errorHeight.innerHTML = 'provide a valid height value'
    }else{
        errorHeight.innerHTML = ''
        height_status = true
    }

    if (weight === 0){
        weightError.innerHTML = 'provide a valid height value'
    }else{
        weightError.innerHTML = ''
        weight_status = true
    }

    if (height_status && weight_status){
        const bmi = (weight /((height *height)/1000)).toFixed(2)
        
        if (bmi < 18.6){
            result.innerHTML = `${bmi}`
        }else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `normal`
        }
    }


})


