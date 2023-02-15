function LoadContact() {
  fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
      return contactos.json();
  }).then(function(contactos){
      buildTable(contactos);
  });
}

function buildTable(data){
  var table = document.getElementById("table_C");

  for(var i = 0; i<data.length; i++){
      var row = `
          <tr>
              <td>${data[i].nombre}</td>
              <td>${data[i].apellido}</td>
              <td>${data[i].telefono}</td>
          </tr>
      `;
      table.innerHTML += row
  }
}

        
