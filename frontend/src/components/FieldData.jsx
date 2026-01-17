const fields = [
  { name: "title", label: "Başlık" },
  { name: "year", label: "yıl", type: "number", min: "1900", max: "2026" },
  { name: "genre", label: "yapımcı" },
  { name: "rating", label: "puan", type: "number", min: "1", max: "10" },
  { name: "description", label: "Açıklama" },
  { name: "director", label: "Yapımcı" },
  { name: "cast", label: "ekip(, ile ayırınız)" },
  { name: "duration", label: "süre", type: "number" },
  { name: "language", label: "dil" },
  { name: "genre", label: "Kategoriler (, ile ayırınız)" },
];

export default fields;
