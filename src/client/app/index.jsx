import React from 'react';
import {render} from 'react-dom';
// import AwesomeComponent from './AwesomeComponent.jsx';

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <p> Hello React!</p>
//         <AwesomeComponent />
//       </div>
//     );
//   }
// }

// render(<App/>, document.getElementById('app'));

import LaunchControlXL from 'launch-control-xl'

navigator.requestMIDIAccess({
  sysex: true
}).then(midi => {
  const controller = new LaunchControlXL()

  for (var input of midi.inputs.values()) {
    controller.setInput(input)
  }
  for (var output of midi.outputs.values()) {
    controller.setOutput(output)
  }

  controller.reset()
  controller.on('input', function (...data) {
    console.log('input', data)
  })
  controller.on('output', function (...data) {
    console.log('output', data)
  })
})
