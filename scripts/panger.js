function getPanger() {
  let counter = 1;

  fetch("../personal/panger.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (const panger of data.panger) {
        var markup = `
        <div id="item item-${counter}">
          <p>Navn: ${panger.name}</p>
          <p>Verv: ${panger.verv}</p>
          <p>Fra: ${panger.fra}</p>
          <p>Til: ${panger.til}</p>
          <hr/>
        </div>
        `;
        document.getElementById("container").innerHTML += markup;
        counter += 1;
      }
    });
}

getPanger();
