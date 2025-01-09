function calcularIMC() {
  let name = document.getElementById("name").value;
  let height = parseFloat(document.getElementById("height").value.replace(",", "."));
  let weight = parseFloat(document.getElementById("weight").value.replace(",", "."));

  let result = (weight / (height * height)).toFixed(1);
  let classificacao = "";

  if (name !== '' && height !== '' && weight !== '') {
    if (result < 16) {
      classificacao = "magreza extrema.";
    } else if (result < 18.5) {
      classificacao = "magreza moderada.";
    } else if (result < 25) {
      classificacao = "saudável.";
    } else if (result < 30) {
      classificacao = "sobrepeso.";
    } else if (result < 35) {
      classificacao = "obesidade grau I.";
    } else if (result < 40) {
      classificacao = "obesidade grau II.";
    } else {
      classificacao = "obesidade grau III.";
    }
    document.getElementById("result").textContent = `${name} seu IMC é ${result} e se classifica como ${classificacao}`;

  } else {
    alert("Preencha todos os campos por favor!");
  }
}
