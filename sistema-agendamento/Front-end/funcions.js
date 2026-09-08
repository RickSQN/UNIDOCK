1. Estrutura Base (HTML & Layout)
Container Principal (flexbox): Divide a tela em duas partes principais:

Área do Calendário (esquerda): Exibe os botões de navegação e a grade de dias.

Painel do Formulário (direita): Contém os inputs (INDÚSTRIA, DATA DE CHEGADA, CHIP, VOLUME, etc.).

Navegação & Modais: O formulário lateral inicia oculto (width: 0) e é exibido dinamicamente ao clicar no botão "+ Adicionar CTA" via classe CSS .active.

2. Lógica do Calendário Dinâmico (JavaScript Nativode Data)
Para padronizar o calendário no formato Brasil (Domingo a Sábado, 28 a 31 dias):

Estatística de Dias: O script usa new Date(ano, mês + 1, 0).getDate() para calcular exatamente a quantidade de dias que o mês possui (evitando fixar 30/31 dias).

Alinhamento dos Dias da Semana: Usa .getDay() no 1º dia do mês para identificar em qual dia da semana (de 0 a 6) o mês inicia e insere células vazias no início da grade.

Navegação de Meses: A função changeMonth(+1 / -1) altera o índice do mês na instância do Date() e força a renderização da tela.

3. Cadastro e Armazenamento dos CTAs
Estado Local (events): Os dados digitados no formulário são salvos em um objeto JavaScript, usando a data do agendamento como chave de busca (YYYY-MM-DD).

Renderização dos Cards: Ao desenhar o mês, o script verifica se existe uma chave cadastrada para a data do loop. Se existir, ele insere o bloco contendo:

O código do CHIP (em destaque azul).

O nome da INDÚSTRIA.

4. Detalhes no Hover (Tooltip)
Hover via CSS: Cada dia agendado gera um elemento oculto .tooltip.

Exibição Flutuante: Quando o usuário passa o cursor sobre a célula (.day-cell:hover), o CSS ativa a visibilidade (opacity: 1; visibility: visible), exibindo as informações complementares (Volume, SKU, Origem).             
