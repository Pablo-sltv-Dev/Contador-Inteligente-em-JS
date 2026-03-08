
let  atual_contagem = 0
document.getElementById("contador").textContent = atual_contagem
const bto_reset = document.getElementById("rstr")
const bto_adc = document.getElementById("adc")
const bto_sub = document.getElementById("sbtr")

bto_adc.addEventListener("click", ()=>{
    ++atual_contagem
    // console.log(atual_contagem)
    document.getElementById("contador").textContent = atual_contagem
})


bto_sub.addEventListener("click", ()=>{
    --atual_contagem
    document.getElementById("contador").textContent = atual_contagem

})

bto_reset.addEventListener("click", ()=>{
    atual_contagem =0

    document.getElementById("contador").textContent = atual_contagem

})



