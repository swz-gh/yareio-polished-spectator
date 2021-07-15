import BattleHUD from "./BattleHUD";
import BaseHUD from "./BaseHUD";
import UnitGraph from "./UnitGraph";

var world_initiated = 0;
var battleHud: BattleHUD = new BattleHUD();
setTimeout(() => runHud(), 3000);

function runHud() {
  console.log("ready");
  let oldRender: any;
  let render_state: any;

  if (oldRender == null && render_state != null) {
    oldRender = render_state;
    render_state = function (timestamp: any) {
      oldRender(timestamp);
      newRender();
    };
  }

  setInterval(() => {
    tick();
  }, 1000);

  function newRender() {
    battleHud.render();
  }

  function tick() {
    battleHud.tick();
  }
}