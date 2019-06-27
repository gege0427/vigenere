/*
	Vernam
*/

// Alfabeto
var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// Cifrar palavra
var cifrar_letra = function(letra, valor){
	for(var i = 0; i < letra.length; i++){
		for(var j = 0; j < alfabeto.length; j++){
			if(alfabeto[j] == letra[i]){
				return alfabeto[(j + valor)%26];
			}
		}
    }
    event.preventDefault();
}

// Decifrar palavra
var decifrar_letra = function(letra, valor){
	for(var i = 0; i < letra.length; i++){
		for(var j = 0; j < alfabeto.length; j += 1){
			if(letra[i] == alfabeto[j]){
				return alfabeto[((j - valor)+26)%26];
			}
		}
    }
    event.preventDefault();
}

// Retornar posicao no alfabeto
var posicao = function(caracter){
	for (var i = 0; i < alfabeto.length; i+=1){
		if (alfabeto[i] == caracter){
			return i;
		} 
	}
}

cifrar = () => {
	var chave = $('#chave').val();
	chave = chave.toLowerCase();

	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado = $('#resultado');

	chave = alterar_chave(chave, texto);

    resultado.text(cifrar(texto, chave));
    event.preventDefault();
};

decifrar = () =>{
	var chave = $('#chave').val();
	chave = chave.toLowerCase();

	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado = $('#resultado');

	chave = alterar_chave(chave, texto);

    resultado.text(decifrar(texto, chave));
    event.preventDefault();
};