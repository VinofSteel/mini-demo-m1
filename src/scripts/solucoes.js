// SOLUÇÃO 1 
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

// cardCreator(database)