<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>Sistema de Requisição de Mamografia</title>

<style>

body{
font-family: Arial;
background:#eef2f7;
margin:0;
}

header{
background:#003366;
color:white;
padding:20px;
text-align:center;
font-size:22px;
}

.container{
max-width:900px;
margin:auto;
background:white;
padding:30px;
margin-top:30px;
border-radius:8px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}

h2{
margin-top:0;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

input{
padding:10px;
width:100%;
border:1px solid #ccc;
border-radius:4px;
}

button{
background:#0066cc;
color:white;
border:none;
padding:12px;
font-size:16px;
border-radius:5px;
cursor:pointer;
margin-top:10px;
}

button:hover{
background:#004a99;
}

footer{
text-align:center;
margin-top:40px;
padding:20px;
color:#777;
}

/* DOCUMENTO */

#documento{
display:none;
background:white;
width:210mm;
min-height:297mm;
margin:auto;
padding:20px;
position:relative;
}

#formbg{
width:100%;
position:absolute;
top:0;
left:0;
opacity:0.2;
}

.campo{
position:absolute;
font-size:14px;
}

/* impressão */

@media print{

body *{
visibility:hidden;
}

#documento, #documento *{
visibility:visible;
}

#documento{
position:absolute;
left:0;
top:0;
}

}

</style>

</head>

<body>

<header>

Sistema de Requisição de Mamografia

</header>

<div class="container">

<h2>Preencher Dados da Paciente</h2>

<div class="grid">

<input id="nome" placeholder="Nome da paciente">

<input id="cpf" placeholder="CPF">

<input id="sus" placeholder="Cartão SUS">

<input id="nascimento" type="date">

<input id="municipio" placeholder="Município">

<input id="telefone" placeholder="Telefone">

</div>

<button onclick="gerar()">Gerar Requisição</button>

</div>

<footer>

Sistema interno de requisições médicas

</footer>

<div id="documento">

<img src="formulario.png" id="formbg">

<div class="campo" style="top:240px;left:120px" id="r_nome"></div>

<div class="campo" style="top:260px;left:120px" id="r_cpf"></div>

<div class="campo" style="top:280px;left:120px" id="r_sus"></div>

<div class="campo" style="top:300px;left:120px" id="r_nascimento"></div>

<div class="campo" style="top:320px;left:120px" id="r_municipio"></div>

<div class="campo" style="top:340px;left:120px" id="r_telefone"></div>

<div style="position:absolute;bottom:40px;left:50%;transform:translateX(-50%);text-align:center">

<img src="hujm-logo.png" width="120">

<br>

Hospital Universitário Júlio Müller

</div>

</div>

<script>

function gerar(){

document.getElementById("r_nome").innerText =
document.getElementById("nome").value

document.getElementById("r_cpf").innerText =
document.getElementById("cpf").value

document.getElementById("r_sus").innerText =
document.getElementById("sus").value

document.getElementById("r_nascimento").innerText =
document.getElementById("nascimento").value

document.getElementById("r_municipio").innerText =
document.getElementById("municipio").value

document.getElementById("r_telefone").innerText =
document.getElementById("telefone").value

document.getElementById("documento").style.display="block"

window.scrollTo(0,document.body.scrollHeight)

}

</script>

</body>

</html>
