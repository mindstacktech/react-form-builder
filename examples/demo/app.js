import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import DemoBar from './demobar';
import * as variables from './variables';

import 'react-form-builder2/dist/app.css';

// const app = ReactDOM.createRoot(
ReactDOM.render(
  <ReactFormBuilder variables={variables}
    url='/api/formdata'
    saveUrl='/api/formdata'
  />,
  document.getElementById('form-builder'),
);
// app.render(<ReactFormBuilder variables={variables}
//   url='/api/formdata'
//   saveUrl='/api/formdata'
// />);

// const demo = ReactDOM.createRoot(
ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar'),
);
// demo.render(<DemoBar variables={variables} />);
