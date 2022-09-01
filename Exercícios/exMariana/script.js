var letras;

function letraMusica(letra)
{
    for(let i=1;i<=3;i++)
    {
        letras += `Mariana conta ${i}\nMariana conta ${i}, é ${i}, é ${i}, é\nAna, viva a Mariana, viva a Mariana \n \n`;
    }

    for(let i = 4;i <= letra; i++)
    {
        letras += `Mariana conta ${i}\n Mariana conta ${i} é `;

        for(let j = 1;j <= i; j++)
        {
            letras += ` ${j}, é`;
        }
        
        letras += ` \n Ana, viva a Mariana, viva a Mariana \n \n`;
    }
    console.log(letras)
}

letraMusica(15);