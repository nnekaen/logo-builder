import "./styles.css";
import "./drag.js";

document.getElementById("app").innerHTML = `
<img class="logo" width= 25% src="./logo.png"/>
<div id="app1">Logo Builder</div>
<div class="logo-badge" id="logo-badge" ondrop="drop(event)" ondragover="allowDrop(event)" >
<img class="logo" width= 20% src="./logo-r.png"/>
<p id="drag1" draggable="true" ondragstart="drag(event)" width="336" height="69">hello World</p>

</div>
<div class="color-text">
<button type="button" 
onclick="document.getElementById('app1').style.color = 'red'">
Red</button>
<button type="button" 
onclick="document.getElementById('app1').style.color = 'blue'">
Blue</button>
<button type="button" 
onclick="document.getElementById('app1').style.color = 'black'">
Black</button>
</div>
`;
