sistema-agendamento/
├── frontend/               # Tudo o que o fornecedor vê e interage na tela
│   ├── assets/             # Imagens (como as logos do topo) e ícones
│   ├── css/                # Arquivos de estilo (style.css para cores, botões laranja)
│   ├── js/                 # Lógica da interface (script.js para ler a URL, calendário e requisições)
│   └── index.html          # A estrutura principal da página e do formulário
│
├── backend/                # Lógica do servidor (caso não utilize exclusivamente o n8n)
│   ├── src/                # Código-fonte da sua API
│   │   ├── controllers/    # Funções que validam os horários livres e salvam os dados
│   │   └── routes/         # Os caminhos da API (ex: POST /webhook/confirmar-agendamento)
│   ├── .env                # Variáveis de ambiente (senhas e credenciais de banco de dados)
│   └── server.js           # Arquivo principal que inicia o servidor
│
└── README.md               # Arquivo de texto com anotações e instruções do projeto


sistema-cta/
├── package.json            # Gerenciador do projeto (dependências do Electron e scripts de build)
├── main.js                 # O "motor" do Electron que configura e abre a janela do aplicativo
├── .env                    # Variáveis de ambiente (URL e chaves de acesso do Supabase)
│
├── src/                    # Pasta com todo o código visual e lógico do sistema
│   ├── assets/             # Arquivos estáticos
│   │   ├── img/            # Imagens gerais (logotipos, backgrounds)
│   │   └── icons/          # Ícones da interface (menu, fechar, indicadores)
│   │
│   ├── css/                # O Design modularizado (View)
│   │   ├── global.css      # Variáveis de cores padrão, fontes e reset de margens globais
│   │   ├── layout.css      # Posicionamento da estrutura (Header, Sidebar, grid principal)
│   │   ├── calendar.css    # Regras visuais exclusivas da tabela do calendário
│   │   └── modal.css       # Estilização das telas sobrepostas (Adicionar/Modificar CTA)
│   │
│   ├── js/                 # A Inteligência do sistema (Controller/Model)
│   │   ├── init.js         # Script principal (carrega dados do banco assim que o app abre)
│   │   ├── ui.js           # Lógica de interface (abrir/fechar modais, interações de clique)
│   │   │
│   │   └── services/       # Integração com o exterior
│   │       └── supabase.js # Funções exclusivas de banco de dados (Select, Insert, Update)
│   │
│   └── index.html          # A estrutura semântica da tela principal (Home) e do calendário
│
└── README.md               # Arquivo de texto para o seu controle de versão e anotações


* CADASTRO DE CTA // OK
* TABELA DE CARROS // OK 
* INPUT DE MUDANÇA DE MÊS //OK
* TROCA DE CD// OK
*
----------//-----------//-----------

- INPUT DE SPAN PARA ADICIONAR CTA.
- AGENDAR EM TAMANHO REAL PARA VISUALIZAR OS CTA CADASTRADOS.
- ORGANIZAÇÃO DE LAYOT.
- ORGANIZAR A BASE DE DADOS EM SUPEBASE PARA FACILITAR TUDO. 
- VERIFICAÇÃO DE LOGIN PARA USAR O APK.


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




Pegando a base e atualizando

4. Detalhes no Hover (Tooltip)
Hover via CSS: Cada dia agendado gera um elemento oculto .tooltip.

Exibição Flutuante: Quando o usuário passa o cursor sobre a célula (.day-cell:hover), o CSS ativa a visibilidade (opacity: 1; visibility: visible), exibindo as informações complementares (Volume, SKU, Origem).             
