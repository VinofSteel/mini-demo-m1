const ul = document.getElementsByClassName("box")[0]
const ulCarrinho = document.getElementsByClassName("cart")[0]

const arrayCarrinho = []

function criadorVerdadeiro (arr) {

    for(let i = 0; i < arr.length; i++) {
    const li = document.createElement("li")

    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")

    const p = document.createElement("p")

    const button = document.createElement("button")

    const elemento = arr[i]

    button.addEventListener("click", (evento) => {
        evento.preventDefault()

        const jogo = {
            id: elemento.id,
            nome: elemento.nome,
            preco: elemento.preco
        }

        arrayCarrinho.push(jogo)
        ulCarrinho.innerHTML = ""
        criadorCarrinho(arrayCarrinho)
    })
    

    img.src = elemento.imagem
    img.alt = elemento.nome

    figcaption.innerText = elemento.nome 

    p.innerText = `R$ ${elemento.preco}, 00`

    button.innerText = "Adicionar ao carrinho"

    figure.append(img, figcaption)
    li.append(figure, p, button)

    ul.appendChild(li)
    }
}

const criadorCarrinho = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li")

        const p = document.createElement("p")
        const span = document.createElement("span")
        const button = document.createElement("button")

        p.innerText = arr[i].nome
        span.innerText = `R$ ${arr[i].preco}`
        button.innerText = "X"

        button.addEventListener("click", (evento) => {
            evento.preventDefault()

            const find = arrayCarrinho.find( (elemento) => {
                return elemento.id === arr[i].id
            })

            arrayCarrinho.pop(find)

            ulCarrinho.innerHTML = ""
            criadorCarrinho(arrayCarrinho)
        })

        li.append(p, span, button)
        ulCarrinho.append(li)
    }
}

criadorVerdadeiro(database)


















// ARROW FUNCTION

// const soma = (param1, param2) => param1 + param2

// console.log(soma(1, 4))