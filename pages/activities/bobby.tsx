import Navigation from "../../components/navigation.component";
import Script from "next/script";

export default function Bobby() {
  return (
    <Navigation active="activities" title="Bobby Car Racer">
      <style>{style}</style>
      <Script src="/anim.js" />
      <div className="canvas">
        <canvas id="canvas" width="1200px" height="200"></canvas>
      </div>

      <div className="inputs">
        <p>
          Startgeschwindigkeit (Pixel/s):{" "}
          <input type="number" id="startVel" defaultValue="10"></input>
        </p>

        <p>
          Beschleunigung (Pixel/s²):{" "}
          <input type="number" id="accel" defaultValue="0"></input>
        </p>
      </div>

      <div className="buttons">
        <button id="start" type="button" name="button">
          Start
        </button>
        <button id="stop" type="button" name="button">
          Stop
        </button>
        <button id="weiter" type="button" name="button">
          Weiter
        </button>
      </div>
    </Navigation>
  );
}

const style = `body {

}

#canvas {
  background-color: lightgray;
}

.inputs {
  padding: 2em;
  text-align: center;
}

.buttons {
  padding: 2em;
  text-align: center;
}`