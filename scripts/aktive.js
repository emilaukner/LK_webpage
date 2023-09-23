function getAktive() {
  let counter = 1;

  fetch("../personal/aktiveFunk.json")
    .then((res) => {
      var markup = `<h3>Aktive Funksjonærer</h3>`;
      document.getElementById("container").innerHTML += markup;
      return res.json();
    })
    .then((data) => {
      for (const aktiv of data.aktiv) {
        var markup = `
        <div id="item item-${counter}">
          <p>Navn: ${aktiv.name}</p>
          <p>Verv: ${aktiv.verv}</p>
          <p>Fra: ${aktiv.from}</p>
          <hr/>
        </div>
        `;
        document.getElementById("container").innerHTML += markup;
        counter += 1;
      }
    })
    .then(
      fetch("../personal/aktiveGjengis.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          var markup = `<h3>Aktive Gjengmedlemmer</h3>`;
          document.getElementById("container").innerHTML += markup;
          for (const aktiv of data.aktiv) {
            var markup = `
          <div id="aktiv${counter}">
            <p>Navn: ${aktiv.name}</p>
            <p>Fra: ${aktiv.from}</p>
            <hr/>
          </div>
          `;
            document.getElementById("container").innerHTML += markup;
            counter += 1;
          }
        })
    );
}

getAktive();
