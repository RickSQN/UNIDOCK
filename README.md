# Sistema de Agendamento 📅

Um sistema web completo para gestão e marcação de horários, composto por uma interface amigável para os fornecedores e uma API backend para validação e integração.

## 🚀 Funcionalidades
- Interface interativa com calendário para seleção de datas e horários.
- Validação de horários disponíveis em tempo real.
- Integração via Webhooks para confirmação de agendamentos.
- Design responsivo e focado na experiência do usuário.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
- **Backend:** Node.js, [Express.js / n8n - ajuste conforme o uso].

## ⚙️ Como executar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina.

### Backend
1. Navegue até a pasta do backend: `cd backend`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` na raiz do backend baseado nas suas credenciais (não envie este arquivo para o repositório).
4. Inicie o servidor: `npm start` (ou `node src/server.js`)

### Frontend
1. Navegue até a pasta do frontend: `cd frontend/public`
2. Abra o arquivo `index.html` no seu navegador ou utilize uma extensão como o *Live Server* no VS Code.

## 🔒 Variáveis de Ambiente
Certifique-se de configurar as seguintes variáveis no arquivo `.env` do backend:
```env
PORT=3000
DB_PASS=[sua_senha]
WEBHOOK_URL=[url_do_n8n]
