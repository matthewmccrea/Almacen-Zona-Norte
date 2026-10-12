function telefonoADigits(telefono) {
  return ("54911" + telefono.replace(/\D/g, "").replace(/^11/, "")).slice(0, 13);
}

const waHref =
  "https://wa.me/" +
  telefonoADigits(CONFIG.telefono) +
  "?text=" +
  encodeURIComponent(CONFIG.mensajeWhatsapp);

const mapaHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(CONFIG.direccion + ", " + CONFIG.localidad);

document.querySelectorAll("[data-wa-link]").forEach((el) => {
  el.setAttribute("href", waHref);
});
document.querySelectorAll("[data-maps-link]").forEach((el) => {
  el.setAttribute("href", mapaHref);
});

const tabs = Array.from(document.querySelectorAll(".tab"));
const notaEl = document.getElementById("tab-nota");
const gridEl = document.getElementById("items-grid");

function renderCategoria(cat) {
  const data = CATALOGO[cat];
  notaEl.textContent = data.nota;
  gridEl.innerHTML = "";
  data.items.forEach(([nombre, detalle]) => {
    const item = document.createElement("div");
    item.className = "item-card";
    item.innerHTML =
      '<span class="item-dot" aria-hidden="true"></span>' +
      '<span class="item-nombre">' + nombre + "</span>" +
      '<span class="item-detalle">' + detalle + "</span>";
    gridEl.appendChild(item);
  });
}

function activarTab(cat) {
  tabs.forEach((btn) => {
    const activo = btn.dataset.cat === cat;
    btn.setAttribute("aria-selected", activo ? "true" : "false");
    btn.tabIndex = activo ? 0 : -1;
    btn.classList.toggle("is-active", activo);
  });
  renderCategoria(cat);
}

tabs.forEach((btn, i) => {
  btn.addEventListener("click", () => activarTab(btn.dataset.cat));
  btn.addEventListener("keydown", (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
    else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === "Home") next = tabs[0];
    else if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      next.focus();
      activarTab(next.dataset.cat);
    }
  });
});

activarTab("granel");
