function enviarDados() {
    const nome = document.getElementById('nome').value;
    const alergico = document.getElementsByName('alergia');
    let alergia = '';

    console.log(nome);

    if (alergico[0].checked) {
        alergia = alergico[0].value;
    } else if (alergico[1].checked) {
        alergia = alergico[1].value;
    }

    console.log(alergia);

    fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            alergico: alergia 
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}


 //GET - READ
   function buscarId() {
    const id = document.getElementById("id_digitado").value;


    fetch(`http://localhost:3000/reservas/${id}`, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("resultado").innerHTML = 
              "<strong> Nome: </strong>  <input type='text' value='"+data.nome +"' id='nome2'> <br>"+ 
              "<strong> Alergia: </strong>  <input type='text' value='"+data.alergico+"' id='alergico2'>";
    });   
      //swal("Registro encontrado!");
  }



   //GET - READ
   function buscarDados() {
    
    fetch(`http://localhost:3000/reservas/`, { 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);


        //console.log(data[3].nome);


        for(i=0;i<data.length;i++){
            document.getElementById("tabela").innerHTML +=
            "<tr>"+
                "<td>"+data[i].id+"</td>"+
                "<td>"+data[i].nome+"</td>"+
                "<td>"+data[i].alergico+"</td>"+
                "<td>"+
                    "<button onclick='deletarDados2("+data[i].id+")'>🗑</button> <!--Delete-->"+
                "</td>"+
             "</tr>"
        }
     });
    //   swal("Registro encontrado!");
  }

