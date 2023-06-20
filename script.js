let students = [
{
  name: 'Pedro',
  note1: 9,
  note2: 7
},
{
  name: 'Myke',
  note1: 5,
  note2: 8
},
{
  name: 'Sabrina',
  note1: 7,
  note2: 5
}
]

// calculo da media
function calculation(num1, num2) {
  return (num1 + num2) / 2
}

// concatenando texto ao resultado
function media(result) {
  let value = calculation(result.note1, result.note2)
  if(value >= 7) {
    alert(`A media do(a) aluno(a) ${result.name} e: ${value}
    Parabens ${result.name}! Voce foi aprovado(a) no concurso!`)
  } else {
    alert(`A media do(a) aluno(a) ${result.name} e: ${value}
    Nao foi dessa vez ${result.name}! Tente novamente!`)
  }
}

for(result of students) {
  media(result)
}

