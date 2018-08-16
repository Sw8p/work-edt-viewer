export const exam = {
  content: [
    {
      id: 0,
      type: "maq",
      category: "knowledge",
      duration: 15,
      label: "La voiture jaune est bien placée pour :",
      values: [
        "prendre la première sortie",
        "prendre la troisième sortie",
        "aller tout droit",
        "aller à Lyon"
      ],
      answers: [
        0, 2, 3
      ],
      media: "test_question_0.jpg"
    },
    {
      id: 1,
      type: "saq",
      category: "knowledge",
      duration: 15,
      label: "La voiture jaune est-elle bien placée pour tourner à gauche ?",
      values: [
        "oui",
        "non"
      ],
      answers: 1,
      media: "test_question_1.jpg"
    },
    {
      id: 2,
      type: "slider",
      category: "knowledge",
      duration: 15,
      label: "Combien de points peut-on perdre sur son Permis de Conduire pour avoir stationné ou circulé sur la bande d'arrêt d’urgence ?",
      values: [
        0,
        12,
        1
      ],
      answers: 3
    },
    {
      id: 3,
      type: "blanktext",
      category: "knowledge",
      duration: 15,
      values: [
        ["Le covoiturage", ["augmente", "diminue"]],
        ["le nombre de véhicules en circulation, et par conséquent réduit les rejets de", ["H2O,", "CO2,", "SO2,"]],
        ["le risque d'accident et les nuisances", ["sonores.", "visuelles."]]
      ],
      answers: [1, 1, 1],
      media: "test_question_1.jpg"
    },
    {
      id: 4,
      type: "signsort",
      category: "knowledge",
      duration: 15,
      label: "Quel panneaux peut on rencontrer dans une zone de stationnement payant ?",
      values: [
        "test_question_7_0",
        "test_question_7_1",
        "test_question_7_2",
        "test_question_7_3",
        "test_question_7_4",
        "test_question_7_5",
        "test_question_7_6",
        "test_question_7_7",
        "test_question_7_8"
      ],
      answers: [
        "test_question_7_1",
        "test_question_7_7",
        "test_question_7_8"
      ],
      media: "test_question_1.jpg"
    }
  ],
  duration: 600
}

//model
//{
//  id:,
//  type:,
//  category:,
//  duration:,
//  label:,
//  values: [
//
//  ],
//  answers: [
//
//  ],
//  media:
//}
