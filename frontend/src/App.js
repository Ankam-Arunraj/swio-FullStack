import React from 'react';
import SleeveLogo from './pages/SleeveLogo';
import Themes from './pages/Themes';
import Customization from './pages/Customization';
import Integrations from './pages/Integrations';
// import KeyboardShortcuts from './KeyboardShortcuts';
// import Support from './Support';
// import App from './App'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SleeveLogo />
        <h1>The ultimate music accessory for your Mac</h1>
      </header>
      <main>
        <Themes />
        <Customization />
        <Integrations />
        <SleeveLogo />
      </main>
      {/* <Support /> */}
    </div>
  );
}

export default App;