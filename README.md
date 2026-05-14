# Elétrica Zincofer

Site institucional (HTML/CSS/JS) para serviços elétricos 24h.

## Deploy
- Abra `src/index.html` no navegador.
- (Opcional) Faça upload dos arquivos mantendo a estrutura de pastas `src/css`, `src/js` e `src/assets`.

## Tecnologias
- Tailwind CSS (via CDN)
- CSS local em `src/css/*`
- JavaScript local em `src/js/*`

## Funcionalidades
- **Navegação suave** (âncoras `#home`, `#servicos`, `#galeria`, `#contato`)
- **Animações on-scroll** usando `IntersectionObserver`
- **Formulário de orçamento**: ao enviar, abre o WhatsApp com a mensagem montada pelos campos do formulário.
- **Botão WhatsApp flutuante** (link direto)

## Estrutura do projeto
- `src/index.html` — página principal
- `src/css/`
  - `reset.css`, `variables.css`, `components.css`, `animations.css`, `responsive.css`
- `src/js/`
  - `main.js` — inicializações/ícones
  - `navigation.js` — navegação suave
  - `animations.js` — animações on-scroll
  - `forms.js` — envio do orçamento para WhatsApp
  - `config.js`, `sdk.js` — apoio/configuração (quando aplicável)
- `src/assets/imagens/img/` — imagens do site

## Git / GitHub
O repositório foi inicializado com git e inclui um commit das alterações do site.

