const items = [{
    id: 0,
    nome: 'camiseta',
    img: '/images/camiseta.jpg',
    quantidade: 0
}, {
    id: 1,
    nome: 'short',
    img: '/images/short.png',
    quantidade: 0
}, {
    id: 2,
    nome: 'sapato',
    img: '/images/tenis.png',
    quantidade: 0
}]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos')
    items.map((val) => {
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src=" ${val.img} " />
            <p> ${val.nome}</p>
            <a key="${val.id}" href="#">
             <button id="botaoAdicionar" type="button" onclick="">Adicionar ao Carrinho
             </button><a/>
        </div>
        `
    })
}

inicializarLoja()

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    // Limpa container sempre que adiciona um novo objeto ao carrinho
    containerCarrinho.innerHTML = ""
    items.map((val) => {
        // validação de itens
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
            <p>${val.nome} | quantidade: ${val.quantidade}</p>
            <hr>
            `
        }
    })
}

limparCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = ""
    items.map((val) => {
        if (val.quantidade > 0) {
            // Otimizar esta function
            containerCarrinho.innerHTML += `
            <p> ${val.quantidade = ""}</p>
             <hr>
            `
            limparCarrinho()
        }
    })
}

// recupera documentos pela tag de link
var links = document.getElementsByTagName('a')

// laço p/ o evento de click em comprar produto através do link setado
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key')
        items[key].quantidade++
        atualizarCarrinho()
        this.preventDefault()
    })
}
