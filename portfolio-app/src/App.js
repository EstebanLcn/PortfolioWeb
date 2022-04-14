import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";


const unityContext = new UnityContext({
  loaderUrl: "./Builds/Build/Builds.loader.js",
  dataUrl: "/Builds/Build/Builds.data",
  frameworkUrl: "/Builds/Build/Builds.framework.js",
  codeUrl: "/Builds/Build/Builds.wasm",
});

function App() {
  return (
    <div className="App">
      <h1>RESUME GAME</h1>
      <Unity unityContext={unityContext} 
      style={{
        width: "1280px",
        height: "720px",
        border: "2px solid black"
      }}
      />;
    </div>
  );
}

export default App;
