const caixas = document.getElementById('boxes')
const botao = document.getElementById('btn')

botao.addEventListener('click', () => {
    caixas.classList.toggle('big')
})

function criarCaixas() {

    for (let i=0; i<4; i++)
    {//criar as 16 divs, dois loops for até 4; 4*4=16
        for (let j=0; j<4 ; j++)
        {
            const cax = document.createElement('div')
            cax.classList.add('box')        
            cax.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            caixas.appendChild(cax)
        }
    }
}

criarCaixas()