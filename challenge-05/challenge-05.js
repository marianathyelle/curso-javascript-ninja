/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [ 'ninja', 2, true, 'yellow', null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(myarray) {
  return myarray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction( myarray )[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function functiontwo(arr, index) {
  return arr[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newarray = [ 'string', true, 2, undefined, '0' ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( functiontwo( newarray, 0 ) );
console.log( functiontwo( newarray, 1 ) );
console.log( functiontwo( newarray, 2 ) );
console.log( functiontwo( newarray, 3 ) );
console.log( functiontwo( newarray, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
  var myBooks = {
    "Cangaceiro JavaScript": {
      quantidadePaginas: 502,
      autor: 'Flávio Almeida',
      editora: 'Série Caelum'
    },
    "Guia Front-End": {
      quantidadePaginas: 211,
      autor: 'Diego Eis',
      editora: 'Casa Do Código'
    },
    "Orientação a Objetos e SOLID para Ninjas": {
      quantidadePaginas: 166,
      autor: 'Mauricio Aniche',
      editora: 'Série Caelum'
    }
  };
  return !bookName ? myBooks : myBooks[ bookName ];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Orientação a Objetos e SOLID para Ninjas tem ' + book("Orientação a Objetos e SOLID para Ninjas").quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Orientação a Objetos e SOLID para Ninjas é ' + book('Orientação a Objetos e SOLID para Ninjas').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Orientação a Objetos e SOLID para Ninjas foi publicado pela editora ' + book('Orientação a Objetos e SOLID para Ninjas').editora + '.');
