class aluno 
{

    constructor(pnome, snome, pnota, snota) 
    {
      this.primeiroNome = pnome;
      this.segundoNome = snome;
      this.primeiraNota = pnota;
      this.segundaNota = snota;
    }

    nomeCompleto()
    {
        return this.primeiroNome + this.segundoNome;
    }

    media()
    {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao()
    {
        var x;
        if(this.media() > 6)
        {
            x = 'Aprovado';
        }
        else
        {
            x = 'Reprovado';
        }
        return x;
    }

}

function myFunction() 
{
    var alunos = [new aluno('aaa', 'AAA', 0, 0), 
                  new aluno('bbb', 'BBB', 2, 2), 
                  new aluno('ccc', 'CCC', 4, 4), 
                  new aluno('ddd', 'DDD', 6, 6), 
                  new aluno('eee', 'EEEE', 8, 8)];

    for (var i=0; i < alunos.length; i++)
    {
        document.getElementById("alunos").innerHTML = document.getElementById("alunos").innerHTML + '<br> Nome Completo: ' + alunos[i].nomeCompleto();
        document.getElementById("alunos").innerHTML = document.getElementById("alunos").innerHTML + '<br> Média: ' + alunos[i].media();
        document.getElementById("alunos").innerHTML = document.getElementById("alunos").innerHTML + '<br> Situação: ' + alunos[i].situacao() + '<br>';
    }    
}
