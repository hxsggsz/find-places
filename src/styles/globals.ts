import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
   --white: #f5f5f5;
   --grey: #D4d4d4;
   --blue: #207ac9;
   --background: #aad3df;
   --dark-blue: #13293f;
}
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   body {
      font-family: inter;
      background: #030518;
   }
   .leaflet-popup-content-wrapper, .leaflet-popup-tip {
	background: var(--blue);
	color: #333;
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
   .leaflet-container a.leaflet-popup-close-button {
      color: var(--white);
      position: absolute;
      top: 0;
      right: 15px;
      padding: 20px;
   }
`;
