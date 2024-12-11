// Defina a data de início do relacionamento
const dataInicio = new Date("2022-10-17T00:00:00").getTime();

// Função para atualizar o tempo desde o início do relacionamento
function atualizarTempoJuntas() {
    const agora = new Date().getTime();
    const distancia = agora - dataInicio;

    // Cálculos para anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365.25));  // Considerando anos bissextos
    const meses = Math.floor((distancia % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375)); // Média de dias por mês
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibir o tempo no elemento com id "tempo"
    document.getElementById("tempo").innerHTML = `
        <strong>Estamos juntas há:</strong><br>
        ${anos} anos, ${meses} meses, ${dias} dias<br>
        ${horas} horas, ${minutos} minutos, ${segundos} segundos
    `;
}

// Atualizar o tempo a cada segundo
const contagem = setInterval(atualizarTempoJuntas, 1000);
