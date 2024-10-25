const funcionarios = [];
const pedidos = [];

document.getElementById('formFuncionario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeFuncionario').value;
    const cpf = document.getElementById('cpfFuncionario').value;

    const funcionario = { nome, cpf };
    funcionarios.push(funcionario);
    atualizarListaFuncionarios();
    this.reset(); // Limpa o formulário
});

document.getElementById('formPedido').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomePedido = document.getElementById('nomePedido').value;
    const descricaoPedido = document.getElementById('descricaoPedido').value;
    const responsavel = document.getElementById('responsavelPedido').value;
    const status = document.getElementById('statusPedido').value;

    const pedido = { nomePedido, descricaoPedido, responsavel, status };
    pedidos.push(pedido);
    atualizarListaPedidos();
    this.reset(); // Limpa o formulário
});

function atualizarListaFuncionarios() {
    const selectResponsavel = document.getElementById('responsavelPedido');
    selectResponsavel.innerHTML = ''; // Limpa opções anteriores

    funcionarios.forEach((funcionario, index) => {
        const option = document.createElement('option');
        option.value = funcionario.nome;
        option.textContent = funcionario.nome;
        selectResponsavel.appendChild(option);
    });
}

function atualizarListaPedidos() {
    const listaPedidos = document.getElementById('listaPedidos');
    listaPedidos.innerHTML = ''; // Limpa a lista anterior

    pedidos.forEach(pedido => {
        const li = document.createElement('li');
        li.textContent = `Pedido: ${pedido.nomePedido}, Responsável: ${pedido.responsavel}, Status: ${pedido.status}`;
        listaPedidos.appendChild(li);
    });
}
