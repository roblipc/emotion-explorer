window.onload = () => {
  const sections = {
    besoin: document.getElementById("besoin"),
    obstacle: document.getElementById("obstacle"),
    futur: document.getElementById("futur")
  };

  const emotionName = document.getElementById("emotionName");
  const emotionType = document.getElementById("emotionType");
  const emotionDef = document.getElementById("emotionDef");
  const emotionNeeds = document.getElementById("emotionNeeds");
  const detailBox = document.getElementById("emotionDetails");

  for (const category in emotionData) {
    emotionData[category].forEach(emotion => {
      const btn = document.createElement("button");
      btn.textContent = emotion;
      btn.addEventListener("click", () => {
        const info = emotionDetails[emotion];
        if (info) {
          emotionName.textContent = emotion;
          emotionType.textContent = info.type;
          emotionDef.textContent = info.def;
          emotionNeeds.textContent = info.needs.join(", ");
          detailBox.classList.remove("hidden");
        } else {
          emotionName.textContent = emotion;
          emotionType.textContent = "Données à compléter";
          emotionDef.textContent = "Définition non disponible.";
          emotionNeeds.textContent = "—";
          detailBox.classList.remove("hidden");
        }
      });
      sections[category].appendChild(btn);
    });
  }
};
