// import React from 'react';

// function Themes() {
//   return (
//     <section>
//       <h2>Themes</h2>
//       <p>Unlimited themes. Themes in Sleeve make creating and switching between customizations easy.</p>
//       <img src="/sleeve/images/ThemeIcon.png" alt="Theme Icon" />
//       <button>Change it up</button>
//       <p>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</p>
//       <p>
//         <a href="/sleeve/images/ThemeFile.png">Theme File</a>
//       </p>
//       <p>
//         <a href="/help/sleeve/themes">View Guide</a>
//       </p>
//       <p>
//         <a href="/help/sleeve/themes">Export your themes and share them with friends using the handy new Sleeve Theme file format.</a>
//       </p>
//       <p>Install themes from anywhere with a double-click or a drag and drop.</p>
//     </section>
//   );
// }

// export default Themes;
// ThemeSwitcher.js
import React, { useState } from 'react';

const Themes = ({ themes, onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <select value={selectedTheme} onChange={handleThemeChange}>
      {themes.map((theme) => (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      ))}
    </select>
  );
};

export default Themes;