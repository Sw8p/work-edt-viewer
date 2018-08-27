import React from 'react';

import './style.css';

export class Maq extends React.Component {
    render() {
      const { data } = this.props
        return (
          <div className="MAQ">
            {data.map((value, k) => (
              <div className="MAQ__answer" key={k}>
                <span className="MAQ__answer__button"></span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        );
    }
}
