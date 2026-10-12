// Datos del catálogo por pestaña. Cada item es [nombre, detalle].
const CATALOGO = {
  granel: {
    label: "A granel",
    nota: "Pesado al momento, desde 250 g. Traé tu frasco o bolsa.",
    items: [
      ["Lentejas y lentejón", "por kilo"],
      ["Porotos negros y alubia", "por kilo"],
      ["Garbanzos", "por kilo"],
      ["Almendras", "desde 250 g"],
      ["Nueces mariposa", "desde 250 g"],
      ["Castañas de cajú", "desde 250 g"],
      ["Pasas y orejones", "desde 250 g"],
      ["Avena arrollada", "por kilo"],
      ["Quinoa y mijo", "por kilo"],
      ["Chía, lino y sésamo", "desde 100 g"],
      ["Arroz yamaní", "por kilo"],
      ["Harina integral", "por kilo"],
    ],
  },
  tacc: {
    label: "Sin TACC",
    nota: "Marcas certificadas, con el logo sin TACC en el envase. Separado del granel.",
    items: [
      ["Premezcla universal", "1 kg"],
      ["Harina de arroz", "1 kg"],
      ["Fideos de maíz", "500 g"],
      ["Fideos de arroz", "500 g"],
      ["Galletitas dulces", "varias marcas"],
      ["Budines", "varios sabores"],
      ["Rebozador", "500 g"],
      ["Caldos y sopas", "en sobre"],
    ],
  },
  almacen: {
    label: "Almacén",
    nota: "Lo de todos los días, para que no tengas que ir a otro lado.",
    items: [
      ["Yerba mate", "varias marcas"],
      ["Café en grano y molido", "250 g / 500 g"],
      ["Aceite de oliva", "500 ml / 1 l"],
      ["Miel de la zona", "500 g"],
      ["Mermeladas y dulces", "frasco"],
      ["Tomate y conservas", "lata"],
      ["Especias sueltas", "por gramo"],
      ["Hierbas para té", "por gramo"],
    ],
  },
};
