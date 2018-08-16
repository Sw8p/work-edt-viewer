import React from 'react'

import './style.css'

import src from './assets/Question37.mp4'

//const DIR_ASSETS = "../../../assets/"
//const DIR_SRC = DIR_ASSETS + "Question37.mp4"

export class MediaRenderer extends React.Component {
  render() {
    return (
      <div className="viewer__visual">
        <h1>MediaRenderer</h1>
        <video src={src} controls autoPlay muted>
            <p>
                Votre navigateur web ne permet pas d‘afficher la
                vidéo, nous en sommes désolés.
            </p>
        </video>
      </div>
    )
  }
}
