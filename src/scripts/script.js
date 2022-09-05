const ul = document.getElementsByClassName("box")[0]



function criadorDeCard () {
    const li = document.createElement("li")

    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")

    const p = document.createElement("p")

    const button = document.createElement("button")

    img.src = "https://images.pushsquare.com/news/2018/01/guide_best_god_of_war_games_ranked/attachment/2/original.jpg"
    img.alt = "Imagem do jogo associado"

    figcaption.innerText = "God of War"

    p.innerText = "R$ 200,00"

    button.innerText = "Adicionar ao Carrinho"

    figure.append(img, figcaption)
    li.append(figure, p, button)

    ul.appendChild(li)
}

// criadorDeCard()

function criadorVerdadeiro (arr) {

    for(let i = 0; i < arr.length; i++) {
    const li = document.createElement("li")

    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")

    const p = document.createElement("p")

    const button = document.createElement("button")

    let elemento = arr[i]

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

criadorVerdadeiro(database)

// 1 - Renderizar todos os itens na página ao contrário
// 2 - Renderizar os itens nas caixas corretas (Ação em ação, RPG em RPG, etc.)
// 3 - Mesma coisa acima só que só renderizem os itens de índice ímpar
// 4 - Tratar os preços que são floats e fazerem eles aparecerem no formato R$ (Preço),00 sem bugs visuais