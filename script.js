//--------------------------------------------------------------------------
// 1. VARIÁVEIS GLOBAIS
// São acessiveis à partir de qualquer função JavaScript.
//--------------------------------------------------------------------------


const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");

const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");

const lista_tarefas = document.querySelector("#lista-tarefas");

//--------------------------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA
//--------------------------------------------------------------------------

function iniciaToDo() {
    // Asocia função ao evento de clicar no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
}

//--------------------------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO
//--------------------------------------------------------------------------

iniciaToDo();