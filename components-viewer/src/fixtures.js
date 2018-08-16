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
