import React from 'react'

import { BlankText } from './components/BlankText';
import { Maq } from './components/Maq';
import { Saq } from './components/Saq';
import { SignSort } from './components/SignSort';
import { Slider } from './components/Slider';
import { Unknown } from './components/Unknown';


import './style.css'

export class QuestionRenderer extends React.Component {
  getQuestionComponent = () => {
        const { question } = this.props;

        switch (question.type) {
            case 'blanktext':
                return BlankText;
            case 'maq':
                return Maq;
            case 'saq':
                return Saq;
            case 'signsort':
                return SignSort;
            case 'slider':
                return Slider;
            default:
                return Unknown;
        }
  };

  getInstruction = () => {
    const { question } = this.props;

    switch (question.type) {
        case 'blanktext':
            return (
              <React.Fragment>
                Choisir les mots manquants du texte à trous
              </React.Fragment>
            );
        case 'maq':
            return (
              <React.Fragment>
                  Sélectionner <strong>la ou les</strong> bonne(s) réponse(s)
              </React.Fragment>
            );
        case 'saq':
            return (
              <React.Fragment>
                  Sélectionner <strong>la</strong> bonne réponse
              </React.Fragment>
            );
        case 'signsort':
            return (
              <React.Fragment>
                  Sélectionner <strong>la ou les</strong> bonne(s) réponse(s)
              </React.Fragment>
            );
        case 'slider':
            return (
              <React.Fragment>
                Déplacer le curseur
              </React.Fragment>
            );
        default:
            return ;
    }
  }


  render(){
    const { question } = this.props;
    const QuestionComponent = this.getQuestionComponent();
    const instruction = this.getInstruction();

    return (
      <div className="viewer__interaction__answers">
        <p className="info viewer__interaction__answers__instruction">
          {instruction}
        </p>
        <QuestionComponent data={question.values}/>
      </div>
    )
  }
}
