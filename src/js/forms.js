// Formulários WhatsApp

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeEl = document.getElementById('nome');
    const telEl = document.getElementById('telefone');
    const descEl = document.getElementById('servico');

    const nome = nomeEl?.value?.trim() || '';
    const tel = telEl?.value?.trim() || '';
    const desc = descEl?.value?.trim() || '';

    // Número com DDI + DDD + número (configurado no projeto)
    const whatsappNumber = '5511920113230';

    const mensagem = `Olá! Meu nome é ${nome}.\nPreciso de um orçamento para: ${desc}.\nContato: ${tel}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank', 'noopener');
  });
});

