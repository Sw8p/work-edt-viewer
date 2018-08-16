import React from 'react'

import './style.css'

//// TEMP:
import src from './assets/Question37.mp4'

export class MediaRenderer extends React.Component {
  render() {
    const { media } = this.props
    return (
      <div className="viewer__visual">
        <h1>MediaRenderer</h1>
        <p>src media : {media}</p>
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
