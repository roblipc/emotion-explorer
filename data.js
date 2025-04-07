const emotionData = {
  besoin: [
    "Joie", "Contentement", "Tendresse", "Plaisir", "Enchantement", "Émerveillement", "Ravissement",
    "Tristesse", "Douleur", "Mélancolie", "Ennui", "Impatience", "Cafard", "Morosité", "Solitude"
  ],
  obstacle: [
    "Affection", "Admiration", "Gratitude",
    "Colère", "Rage", "Frustration", "Mécontentement", "Irritation", "Exaspération", "Fureur", "Écœurement", "Agacement", "Révolte", "Rancune", "Mépris"
  ],
  futur: [
    "Désir", "Excitation", "Espoir", "Confiance",
    "Peur", "Inquiétude", "Appréhension", "Trac", "Panique", "Frayeur", "Effroi", "Terreur", "Affolement", "Insécurité"
  ],
};

const emotionDetails = {
  "Joie": {
    type: "Émotion simple",
    def: "Plaisir profond, satisfaction liée à un besoin comblé.",
    needs: ["Réussite", "Plaisir", "Reconnaissance"]
  },
  "Tristesse": {
    type: "Émotion simple",
    def: "Réaction à une perte, un manque ou une déception.",
    needs: ["Lien", "Attachement", "Soutien"]
  },
  "Colère": {
    type: "Émotion simple",
    def: "Réaction à l'injustice ou à la frustration.",
    needs: ["Respect", "Autonomie", "Justice"]
  },
  "Peur": {
    type: "Émotion simple",
    def: "Alerte face à une menace ou une instabilité.",
    needs: ["Sécurité", "Stabilité"]
  },
  "Confiance": {
    type: "Émotion simple",
    def: "Sentiment de sécurité affective, mentale ou relationnelle.",
    needs: ["Sécurité", "Engagement mutuel"]
  },
  "Mépris": {
    type: "Émotion mixte",
    def: "Colère + jugement de supériorité.",
    needs: ["Protection de l’estime", "Supériorité perçue"]
  },
  // Ajoute les autres ici selon ton besoin...
};
