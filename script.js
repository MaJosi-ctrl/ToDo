//--------------------------------------------------------------------------
// 1. VARIÁVEIS GLOBAIS
// São acessiveis à partir de qualquer função JavaScript.
//--------------------------------------------------------------------------


const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");

const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");

const lista_tarefas = document.querySelector("#lista-tarefas");

const audioConcluir = new Audio('sound/gmae.wav');

//--------------------------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA
//--------------------------------------------------------------------------

function iniciaToDo() {
    // Asocia função "adicionarTarefa()" ao evento de clicar no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);

    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter);
}

function adicionarTarefa() {
    
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = `
            <div>
                <button class="btn btn-success btn-sm me-2" onclick="concluirTarefa(this)">Concluir</button>
                <button class="btn btn-danger btn-sm">Excluir</button>
            </div>
        `;
        
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        
        item.innerHTML = "<span class='w-75 text-truncate'>" + txt_nova_tarefa.value + "</span>" + btn_item;
        
        lista_tarefas.append(item);
    }
    
    txt_nova_tarefa.value = "";
    
    txt_nova_tarefa.focus();
    
}
function adicionarTarefaEnter (evento) {
    if (evento.key == "Enter") {

    adicionarTarefa();
    }
}

function concluirTarefa(elemento) {
    
    audioConcluir.play();
    
    for (let i = 0; i <= 100; i++) {
        confetti();
    }
}

//--------------------------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO
//--------------------------------------------------------------------------

iniciaToDo();