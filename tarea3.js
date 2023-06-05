const $horasVideos = document.querySelectorAll(".horas-video");
const $minutosVideos = document.querySelectorAll(".minutos-video");
const $segundosVideos = document.querySelectorAll(".segundos-video");
const $botonCalcular = document.querySelector("#submit");
$botonCalcular.onclick = function () {
  const listaDeHorasVideos = [...$horasVideos].map((horas) =>
    Number(horas.value)
  );
  const listaDeMinutosVideos = [...$minutosVideos].map((minutos) =>
    Number(minutos.value)
  );
  const listaDeSegundosVideos = [...$segundosVideos].map((segundos) =>
    Number(segundos.value)
  );
  const horaEnMinutos = 60;
  const minutoEnSegundos = 60;
  const totalSegundos = listaDeSegundosVideos.reduce(
    (total, valor) => total + valor,
    0
  );
  const totalMinutos =
    listaDeMinutosVideos.reduce((total, valor) => total + valor, 0) +
    Math.floor(totalSegundos / minutoEnSegundos);
  const totalHoras =
    listaDeHorasVideos.reduce((total, valor) => total + valor, 0) +
    Math.floor(totalMinutos / horaEnMinutos);
  const segundosRestantes = totalSegundos % minutoEnSegundos;
  const minutosRestantes = totalMinutos % horaEnMinutos;

  document.querySelector("strong").innerText = ` ${totalHoras} horas 
  ${minutosRestantes} minutos y ${segundosRestantes} segundos.`;
};
