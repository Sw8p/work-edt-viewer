import React from 'react'

import { Header } from './components/Header'
import { QuestionRenderer } from './components/QuestionRenderer'
import { Button } from './components/Button'

import './style.css'

export class InteractiveArea extends React.Component {
  render() {
    return (
      <div class="viewer__interaction">
        <Header {...this.props}/>
        <QuestionRenderer />
        <div class="viewer__interaction__nav">
          <Button>
            <p>Valider</p>
          </Button>
        </div>
      </div>
    )
  }
}
