import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Viewer from './Viewer';

import { exam } from './fixtures'

ReactDOM.render(<Viewer exam={exam}/>, document.getElementById('root'));
