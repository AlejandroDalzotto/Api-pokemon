let input = document.getElementById("input-id");
let id;

window.onload = main;

function main() {
    input.addEventListener("change", (e) => {
        changeE(e.target.value);
    });
}

function changeE(e) {
    id = document.getElementById("input-id").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url).then(response => response.json())
        .then(data => {
            document.getElementById("paragraph-name").innerHTML = `${data.name}`;
            document.getElementById("paragraph-order").innerHTML = `${data.order}`;
            document.getElementById("imagen-pokemon").src = `${data.sprites.front_default}`;
        }).catch(err => {
            console.log(this.err);
        });
}