let name = document.getElementById('name')
let number = document.getElementById('number')
let month = document.getElementById('month')
let year = document.getElementById('year')
let cvc = document.getElementById('Cvc')

let cardNumber = document.getElementById('cardNumber')
let cardName = document.getElementById('cardName')
let cardDate = document.getElementById('cardDate')
let cardCvc = document.getElementById('cardCvc')
let turnWiteOrBlack = document.getElementById('whiteorblack')
let white = true
let paragraph = document.getElementsByClassName('paragraph')
let inputs = document.getElementsByClassName('inputs')
let button = document.getElementById('button')
let endTittle = document.getElementById('endTittle')
let endparagraph = document.getElementById('endParagraph')
let buttonPrevious = document.getElementById('buttonPrevious')

function toggle(){
    white = !white

    if(white){
        document.body.style.backgroundColor='white';
        for (let i = 0; i < 4; i++) {
            paragraph[i].style.color = 'rgb(71, 0, 71)';
        }
        for (let i = 0; i < 5; i++) {
            inputs[i].style.backgroundColor = 'white';
        }
        for (let i = 0; i < 5; i++) {
            inputs[i].style.border = '1px solid rgba(0, 0, 0, 0.145)';
        }
        for (let i = 0; i < 5; i++) {
            inputs[i].style.color = 'black';
        }
        endParagraph.style.color='black'
        endTittle.style.color='black'
        button.style.border='0px'
        turnWiteOrBlack.style.backgroundColor='black'
    }else{
        document.body.style.backgroundColor='rgb(27, 0, 39)'
        for (let i = 0; i < 4; i++){
            paragraph[i].style.color='white'
        }
        for (let i = 0; i < 5; i++){
            inputs[i].style.backgroundColor='rgb(27, 0, 39)'
        }
        for (let i = 0; i<5; i++){
        inputs[i].style.border='1px solid white'
        }
        for (let i = 0; i<5; i++){
            inputs[i].style.color='white'
        }
        endParagraph.style.color='white'
        endTittle.style.color='white'
        buttonPrevious.style.border='1px solid white'
        button.style.border='1px solid white'
        turnWiteOrBlack.style.backgroundColor='rgba(255, 255, 255, 0.500)'
    }
}


name.addEventListener("keyup", function(event) {
    let Name = this.value
    this.value = Name.replace(/\d/g, '') //Está removendo os caracteres que são numeros.
    cardName.innerText = name.value
})

number.addEventListener("input", function() {
    let Number = this.value.replace(/\D/g, '') //Está removendo os caraceteres que não são numeros.
    Number = Number.slice(0, 19) //Mesma função do max length.

    let formattedValue = ''
    for(i=0; i < Number.length; i++){ 
        if (i > 0 && i % 4 === 0){
            formattedValue += ' '
        }
        formattedValue += Number[i]
    }

    this.value = formattedValue
    cardNumber.innerText = number.value
})

month.addEventListener("keyup", function() {
    let monthn = Number(this.value)
    if (monthn >= 0 && monthn <= 12){
        cardDate.innerText = `${monthn}/${year.value}`
    }else{
        monthInvalid()  
    }
})

month.addEventListener("blur", function monthInvalid(){
    if (month.value == 0 || month.value > 12){
        alert('Mês inválido. Iremos considerar: Mês = 01')
        month.value = '01'
        month.focus()
    }
})

year.addEventListener("keyup", function(){
    /*  
    if(year.value < 10){
        return 0 + year.value
    }
    */
    cardDate.innerText = `${month.value}/${year.value}`
})

cvc.addEventListener("keyup", function(){
    let ncvc = this.value
    this.value = ncvc.replace(/\D/g, '')
    cardCvc.innerText = cvc.value 
})

function confirm(){
    if(year.value != 0 && cvc.value != 0 && month.value != 0 && number.value != 0 && name.value != 0){
        let informations = document.getElementById('informations')
        informations.style.display='none'
        end.style.display='block'
    }else{
        alert('Prencha tudo abaixo!')
    }
}

function previous(){
    location.reload();
}