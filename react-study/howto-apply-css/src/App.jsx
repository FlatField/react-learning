import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledComponents } from './components/StyledComponents';
import React, { StyledJsx } from './components/StyledJsx'
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}