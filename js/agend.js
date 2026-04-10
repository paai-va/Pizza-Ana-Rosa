document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#dataReserva", {
    dateFormat: "d/m/Y",
    minDate: "today",
    maxDate: new Date().fp_incr(90),
    disableMobile: true
  });
});