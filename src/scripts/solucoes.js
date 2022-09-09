// SOLUÇÃO 1 
// É possível renderizar os items ao contrário de diversas formas. A mais simples para vocês seria fazer um loop decrescente. Aqui, eu utilizarei o método .reverse().
// Leiam a documentação :)

// Isso faz um array passado por parâmetro ser ordenado ao contrário
const revertArray = (arr) => arr.reverse()

const databaseReversa = revertArray(database)
// Daqui, é só usar essa expressão dentro da função criadorVerdadeiro, declarada no script.js.

// SOLUÇÃO 2 
const ulAction = document.getElementsByClassName("box")[0]
const ulAdventure = document.getElementsByClassName("box")[1]
const ulRpg = document.getElementsByClassName("box")[2]
const ulEsportes= document.getElementsByClassName("box")[3]

 
function cardCreator (arr) {
    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement("li")
    
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const figcaption = document.createElement("figcaption")
    
        const p = document.createElement("p")
    
        const button = document.createElement("button")
    
        const elemento = arr[i]        
    
        img.src = elemento.imagem
        img.alt = elemento.nome
    
        figcaption.innerText = elemento.nome 
    
        p.innerText = `R$ ${elemento.preco}, 00`
    
        button.innerText = "Adicionar ao carrinho"
    
        figure.append(img, figcaption)
        li.append(figure, p, button)
    
        if(elemento.categoria === "Ação") {
            ulAction.appendChild(li)
        } else if (elemento.categoria === "Aventura") {
            ulAdventure.appendChild(li)
        } else if (elemento.categoria === "RPG") {
            ulRpg.appendChild(li)
        } else {
            ulEsportes.appendChild(li)
        }
    }
}

// SOLUÇÃO 3
// Basta copiar a função acima e adicionar a condição de pegar apenas itens de índice ímpar nela.

function cardCreatorOdd (arr) {
    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement("li")
    
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const figcaption = document.createElement("figcaption")
    
        const p = document.createElement("p")
    
        const button = document.createElement("button")
    
        const elemento = arr[i]        
    
        img.src = elemento.imagem
        img.alt = elemento.nome
    
        figcaption.innerText = elemento.nome 
    
        p.innerText = `R$ ${elemento.preco}, 00`
    
        button.innerText = "Adicionar ao carrinho"
    
        figure.append(img, figcaption)
        li.append(figure, p, button)
    
        // ADICIONANDO CONDICIONAL QUE PEGA APENAS OS ITENS DE ÍNDICE ÍMPAR COM O OPERADOR LÓGICO &&
        if(elemento.categoria === "Ação" && elemento.id % 2 !== 0) {
            ulAction.appendChild(li)
        } else if (elemento.categoria === "Aventura" && elemento.id % 2 !== 0) {
            ulAdventure.appendChild(li)
        } else if (elemento.categoria === "RPG" && elemento.id % 2 !== 0) {
            ulRpg.appendChild(li)
        } else if(elemento.categoria === "Esportes" && elemento.id % 2 !== 0) {
            ulEsportes.appendChild(li)
        }
    }
}

// SOLUÇÃO 4 
// Fazer o tratamento dos valores quebrados é um pouco mais complexo. Reparem que na database eu coloquei todos os valores quebrados exatos (350.50 ao invés de 350.99, por exemplo), o que torna
// a lógica um pouquinho mais simples. Vamos ao código.

function criadorVerdadeiroFiltrado (arr) {

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


    // A lógica para detectar um elemento float é fazer um % (módulo) por 1 e ver se o resultado é igual a 0. Se for, não é float.
    if (elemento.preco % 1 !== 0) {
        console.log(elemento.preco)
        p.innerText = `R$ ${elemento.preco}0`
    } else {
        p.innerText = `R$ ${elemento.preco}.00`
    }

    button.innerText = "Adicionar ao carrinho"

    figure.append(img, figcaption)
    li.append(figure, p, button)

    ul.appendChild(li)
    }
}

// SOLUÇÃO 1
// criadorVerdadeiro(databaseReversa)

// SOLUÇÃO 2
// cardCreator(database)

// SOLUÇÃO 3 
// cardCreatorOdd(database)

// SOLUÇÃO 4 
// criadorVerdadeiroFiltrado(database)