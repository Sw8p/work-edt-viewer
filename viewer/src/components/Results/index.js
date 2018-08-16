import React from 'react'

import { Card } from '../Card'
import { Button } from '../Button'

import './results.css'

export class Results extends React.Component {
  render(){
    const results = {
      total : 178,

    }
    const corpus = {
      nbQuestions : 200
    }
    return (
      <div className="results">
        <div className="results__title">
          <h1>Résultats</h1>
          <p>répondu à
            <strong>{results.total}</strong>
             questions sur
             <strong>{corpus.nbQuestions}</strong>
           </p>
        </div>

        <main className="results__main">
          <div className="results__main__diagram">
            <svg id="diagram"></svg>
            <p className="results__main__diagram__subtext">de bonnes<br/>réponses</p>
          </div>

          <Card className="results__main__bubble">
            <h3>Coportement</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, mollitia.</p>
          </Card>

        </main>

        <span className="results__button">
          <Button><p>Revenir à mon espace</p></Button>
        </span>


      </div>

    )
  }
}
