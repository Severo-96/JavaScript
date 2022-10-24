//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let date = new Date(document.getElementById("date").value);
    
    switch (date){
        case (isNaN(date)):
            alert("Por Favor, insira uma data valida no campo DATA!");
            break;

        default:
            day = document.getElementById("day");
            day.textContent = "Dia: " + date.getUTCDate() + "."; 

            month = document.getElementById("month");
            month.textContent = "Mês: " + (date.getMonth() + 1) + ".";

            year = document.getElementById("year");
            year.textContent = "Ano: " + date.getFullYear() + ".";
        
            wd = date.getDay();
            weekday = document.getElementById("weekday");

            switch (wd){
                case (0):
                    weekday.textContent = "Dia da semana: Segunda-Feira.";
                    break;

                case (1):
                    weekday.textContent = "Dia da semana: Terça-Feira.";
                    break;

                case (2):
                    weekday.textContent = "Dia da semana: Quarta-Feira.";
                    break;

                case (3):
                    weekday.textContent = "Dia da semana: Quinta-Feira.";
                    break;

                case (4):
                    weekday.textContent = "Dia da semana: Sexta-Feira.";
                    break;

                case (5):
                    weekday.textContent = "Dia da semana: Sábado.";
                    break;

                default:
                    weekday.textContent = "Dia da semana: Domingo.";           
            }

            mw = date.getMonth();
            monthwrite = document.getElementById("monthwrite");

            switch (mw){
                case (0):
                    monthwrite.textContent = "Mês: Janeiro.";
                    break;

                case (1):
                    monthwrite.textContent = "Mês: Fevereiro.";
                    break;

                case (2):
                    monthwrite.textContent = "Mês: Março.";
                    break;

                case (3):
                    monthwrite.textContent = "Mês: Abril.";
                    break; 

                case (4):
                    monthwrite.textContent = "Mês: Maio.";
                    break;

                case (5):
                    monthwrite.textContent = "Mês: Junho.";
                    break;

                case (6):
                    monthwrite.textContent = "Mês: Julho.";
                    break;

                case (7):
                    monthwrite.textContent = "Mês: Agosto.";
                    break;

                case (8):
                    monthwrite.textContent = "Mês: Setembro.";
                    break;

                case (9):
                    monthwrite.textContent = "Mês: Outubro.";
                    break;

                case (10):
                    monthwrite.textContent = "Mês: Novembro.";
                    break;

                default:
                    monthwrite.textContent = "Mês: Dezembro.";
            }

            value = document.getElementById("value");
            value.textContent = "Timestamp: " + date.getTime() + "ms.";
    }
});