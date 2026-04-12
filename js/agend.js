console.log("botão carregado");
console.log("nomeReserva")

document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#dataReserva", {
    dateFormat: "d/m/Y",
    minDate: "today",
    maxDate: new Date().fp_incr(90),
    disableMobile: true
  });
});

const btnReserva = document.getElementById("btnReserva");

btnReserva.addEventListener("click", () => {
  const nome = document.getElementById("nomeReserva").value.trim();
  const telefone = document.getElementById("telefoneReserva").value.trim();
  const email = document.getElementById("emailReserva").value.trim();
  const data = document.getElementById("dataReserva").value.trim();
  const horario = document.getElementById("horarioReserva").value;
  const pessoas = document.getElementById("pessoasReserva").value;
  const observacoes = document.getElementById("observacoes").value.trim();

  if (!nome || !telefone || !email || !data || !horario || !pessoas) {
    alert("Preencha todos os campos obrigatórios da reserva.");
    return;
  }

  const numeroWhatsApp = "5515992407097"; // trocar pelo número da pizzaria

  const mensagem =
`Olá, gostaria de fazer uma reserva.

*Dados da reserva:*
Nome: ${nome}
Telefone: ${telefone}
Email: ${email}
Dia: ${data}
Horário: ${horario}
Número de pessoas: ${pessoas}
Observações: ${observacoes || "Nenhuma"}`;

  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});