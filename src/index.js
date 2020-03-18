import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 id="app1">Hello Vanilla!!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<button type="button" 
onclick="document.getElementById('app1').style.color = 'red'">
Red</button>
<button type="button" 
onclick="document.getElementById('app1').style.color = 'blue'">
Blue</button>
<button type="button" 
onclick="document.getElementById('app1').style.color = 'black'">
Black</button>
`;
