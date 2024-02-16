function insert(num)
{
	new Audio('sons/click.ogg').play()
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
	
}
function clean()
{
	new Audio('sons/click.ogg').play()
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
	new Audio('sons/click.ogg').play()
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
	new Audio('sons/click.ogg').play()
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = parseFloat(eval(resultado));
    }
    else
    {
        document.getElementById('resultado').innerHTML = ""
    }
}
function voltarhome(){
	new Audio('sons/click.ogg').play()
		  setTimeout(() => {
			  window.location.href = 'index.html'
		  },250);
  }