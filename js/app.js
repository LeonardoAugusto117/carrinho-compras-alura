let totalGeral;
limpar();

function adicionar(){
    //Recuperar o produto e seu valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    //Recuperar a quantiade inserida para compra do prodito
    let quantidade = document.getElementById('quantidade').value;

    //Calcular preço produtos selecionado
    let subTotal =  quantidade * valorUnitario ;

    //Criar logica do carrinho

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML +  `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

        totalGeral = totalGeral + subTotal;

       let valorFinal = document.getElementById('valor-total');
       valorFinal.textContent = `R$ ${totalGeral}`;
       document.getElementById('quantidade').value = ''
     
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
    totalGeral = 0;
}