const emotionData = {
  besoin: [
    "Joie", "Contentement", "Tendresse", "Plaisir", "Enchantement", "Émerveillement", "Ravissement",
    "Tristesse", "Douleur", "Mélancolie", "Ennui", "Impatience", "Cafard", "Morosité", "Solitude"
  ],
  obstacle: [
    "Affection", "Admiration", "Gratitude",
    "Colère", "Rage", "Frustration", "Mécontentement", "Irritation",
    "Exaspération", "Fureur", "Écœurement", "Agacement", "Révolte", "Rancune", "Mépris"
  ],
  futur: [
    "Désir", "Excitation", "Espoir", "Confiance",
    "Peur", "Inquiétude", "Appréhension", "Trac", "Panique", "Frayeur", "Effroi", "Terreur", "Affolement", "Insécurité"
  ]
};

const emotionDetails = {
  "Joie": {
    type: "Émotion simple",
    def: "Sentiment agréable de satisfaction et de plaisir profond.",
    needs: ["Réussite", "Plaisir", "Reconnaissance"]
  },
  "Contentement": {
    type: "Émotion simple",
    def: "Satisfaction modérée et durable, dans une situation stable.",
    needs: ["Acceptation", "Stabilité"]
  },
  "Tendresse": {
    type: "Émotion simple",
    def: "Affection douce, chaleur bienveillante envers quelqu’un.",
    needs: ["Lien affectif", "Sécurité", "Intimité"]
  },
  "Plaisir": {
    type: "Émotion simple",
    def: "Sensation agréable issue de la satisfaction d’un besoin ou désir.",
    needs: ["Satisfaction", "Stimulation", "Bien-être"]
  },
  "Enchantement": {
    type: "Émotion simple",
    def: "Joie mêlée d’émerveillement, comme capté par une magie douce.",
    needs: ["Beauté", "Sens", "Plaisir"]
  },
  "Émerveillement": {
    type: "Émotion simple",
    def: "Étonnement joyeux devant quelque chose de grand ou de beau.",
    needs: ["Sens", "Beauté", "Lien à plus grand que soi"]
  },
  "Ravissement": {
    type: "Émotion simple",
    def: "Joie intense, exaltée et souvent soudaine.",
    needs: ["Plaisir profond", "Résonance émotionnelle"]
  },
  "Tristesse": {
    type: "Émotion simple",
    def: "Réaction à une perte, un manque ou une déception.",
    needs: ["Lien", "Soutien", "Réconfort"]
  },
  "Douleur": {
    type: "Émotion simple",
    def: "Souffrance émotionnelle intense.",
    needs: ["Soulagement", "Compassion", "Reconnaissance"]
  },
  "Mélancolie": {
    type: "Émotion simple",
    def: "Tristesse douce liée à un souvenir affectif.",
    needs: ["Lien au passé", "Sens", "Attachement"]
  },
  "Ennui": {
    type: "Émotion simple",
    def: "Manque d’intérêt, de stimulation ou de sens.",
    needs: ["Stimulation", "Intérêt", "Sens"]
  },
  "Impatience": {
    type: "Émotion simple",
    def: "Tension liée à l’attente de quelque chose d’important.",
    needs: ["Changement", "Action", "Résolution"]
  },
  "Cafard": {
    type: "Émotion simple",
    def: "Tristesse diffuse et passagère, morosité vague.",
    needs: ["Réconfort", "Compagnie", "Chaleur humaine"]
  },
  "Morosité": {
    type: "Émotion simple",
    def: "État d’humeur triste et terne.",
    needs: ["Vitalité", "Lien", "Clarté intérieure"]
  },
  "Solitude": {
    type: "Émotion simple",
    def: "Manque ou absence de lien affectif ou social.",
    needs: ["Lien", "Partage", "Appartenance"]
  },
  "Affection": {
    type: "Émotion simple",
    def: "Lien affectueux envers quelqu’un.",
    needs: ["Proximité", "Bienveillance", "Intimité"]
  },
  "Admiration": {
    type: "Émotion simple",
    def: "Regard valorisant porté sur une qualité ou un être.",
    needs: ["Inspiration", "Modèle", "Estime"]
  },
  "Gratitude": {
    type: "Émotion simple",
    def: "Reconnaissance chaleureuse envers ce qui nous a fait du bien.",
    needs: ["Lien", "Réciprocité", "Reconnaissance"]
  },
  "Colère": {
    type: "Émotion simple",
    def: "Réaction à une injustice ou à une frustration.",
    needs: ["Respect", "Justice", "Autonomie"]
  },
  "Rage": {
    type: "Émotion simple",
    def: "Colère extrême mêlée d’impuissance.",
    needs: ["Pouvoir d’agir", "Reconnaissance de la blessure"]
  },
  "Frustration": {
    type: "Émotion simple",
    def: "État lié à un besoin ou désir non satisfait.",
    needs: ["Satisfaction", "Résolution", "Expression"]
  },
  "Mécontentement": {
    type: "Émotion simple",
    def: "Insatisfaction modérée ou irritation.",
    needs: ["Changement", "Respect", "Écoute"]
  },
  "Irritation": {
    type: "Émotion simple",
    def: "Agacement dû à des contrariétés répétées ou mineures.",
    needs: ["Soulagement", "Repos", "Clarté"]
  },
  "Exaspération": {
    type: "Émotion simple",
    def: "Agacement porté à l’extrême.",
    needs: ["Libération", "Action", "Respect"]
  },
  "Fureur": {
    type: "Émotion simple",
    def: "Violente explosion de colère.",
    needs: ["Évacuation", "Limites claires", "Justice"]
  },
  "Écœurement": {
    type: "Émotion simple",
    def: "Rejet viscéral face à une situation insupportable.",
    needs: ["Distance", "Protection", "Respect"]
  },
  "Agacement": {
    type: "Émotion simple",
    def: "Irritation légère.",
    needs: ["Paix", "Temps", "Espace personnel"]
  },
  "Révolte": {
    type: "Émotion simple",
    def: "Colère + indignation face à une injustice.",
    needs: ["Justice", "Reconnaissance", "Changement"]
  },
  "Rancune": {
    type: "Émotion simple",
    def: "Colère non exprimée conservée dans le temps.",
    needs: ["Réparation", "Reconnaissance de la blessure"]
  },
  "Mépris": {
    type: "Émotion simple",
    def: "Rejet méprisant, souvent défensif.",
    needs: ["Protection de l’estime", "Reconnaissance"]
  },
  "Désir": {
    type: "Émotion simple",
    def: "Anticipation d’un plaisir ou d’une satisfaction.",
    needs: ["Plaisir", "Réalisation", "Croissance"]
  },
  "Excitation": {
    type: "Émotion simple",
    def: "Énergie vive liée à l’anticipation d’un plaisir ou d’un danger.",
    needs: ["Stimulation", "Plaisir", "Engagement"]
  },
  "Espoir": {
    type: "Émotion simple",
    def: "Attente confiante d’un avenir favorable.",
    needs: ["Sens", "Foi", "Résolution"]
  },
  "Confiance": {
    type: "Émotion simple",
    def: "Sentiment de sécurité basée sur la fiabilité.",
    needs: ["Sécurité", "Fiabilité", "Engagement"]
  },
  "Peur": {
    type: "Émotion simple",
    def: "Alerte face à un danger ou une menace.",
    needs: ["Sécurité", "Préparation", "Protection"]
  },
  "Inquiétude": {
    type: "Émotion simple",
    def: "Crainte vague ou diffuse.",
    needs: ["Clarté", "Stabilité", "Prévision"]
  },
  "Appréhension": {
    type: "Émotion simple",
    def: "Peur légère face à un événement à venir.",
    needs: ["Préparation", "Sécurité", "Accompagnement"]
  },
  "Trac": {
    type: "Émotion simple",
    def: "Peur mêlée d’excitation juste avant une action publique.",
    needs: ["Assurance", "Soutien", "Valorisation"]
  },
  "Panique": {
    type: "Émotion simple",
    def: "Peur extrême avec perte de contrôle.",
    needs: ["Sécurité", "Ancrage", "Calme"]
  },
  "Frayeur": {
    type: "Émotion simple",
    def: "Peur intense mais brève.",
    needs: ["Sécurité immédiate", "Réassurance"]
  },
  "Effroi": {
    type: "Émotion simple",
    def: "Peur mêlée d’horreur ou de choc.",
    needs: ["Sécurité", "Protection", "Soutien"]
  },
  "Terreur": {
    type: "Émotion simple",
    def: "Peur extrême, souvent paralysante.",
    needs: ["Sécurité absolue", "Soutien", "Retrait du danger"]
  },
  "Affolement": {
    type: "Émotion simple",
    def: "Peur soudaine avec perte de repères.",
    needs: ["Orientation", "Soutien", "Cadre rassurant"]
  },
  "Insécurité": {
    type: "Émotion simple",
    def: "Sentiment d’instabilité ou de menace.",
    needs: ["Cadre", "Soutien", "Prévisibilité"]
  }
};
