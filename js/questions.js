// ============================================================
// PYTHON DUNGEON - 100 Questões
// Tipos: "fill_print" = O que será impresso?
//        "fill_blank" = Complete o código (usa _____ no código)
// ============================================================

const QUESTIONS = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FASE 1 — ARITMÉTICA BÁSICA (Salas 1–20)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    id: 1, phase: 1, category: "Aritmética", points: 100,
    title: "Adição",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(5 + 3)`,
    answer: "8",
    hint: "Some 5 + 3",
    explanation: "5 + 3 = 8"
  },
  {
    id: 2, phase: 1, category: "Aritmética", points: 100,
    title: "Subtração",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(10 - 4)`,
    answer: "6",
    hint: "Subtraia 10 - 4",
    explanation: "10 - 4 = 6"
  },
  {
    id: 3, phase: 1, category: "Aritmética", points: 100,
    title: "Multiplicação",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(3 * 4)`,
    answer: "12",
    hint: "Multiplique 3 × 4",
    explanation: "3 × 4 = 12"
  },
  {
    id: 4, phase: 1, category: "Aritmética", points: 100,
    title: "Divisão",
    type: "fill_print",
    question: "O que será impresso? (Atenção ao tipo!)",
    code: `print(20 / 4)`,
    answer: "5.0",
    hint: "Em Python, / sempre retorna float (com .0)",
    explanation: "20 / 4 = 5.0 (float). Em Python, a divisão / sempre retorna decimal!"
  },
  {
    id: 5, phase: 1, category: "Aritmética", points: 100,
    title: "Divisão Inteira",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(17 // 3)`,
    answer: "5",
    hint: "// é divisão inteira — ignora o resto",
    explanation: "17 // 3 = 5 (resto 2 é ignorado)"
  },
  {
    id: 6, phase: 1, category: "Aritmética", points: 100,
    title: "Módulo (Resto)",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(17 % 3)`,
    answer: "2",
    hint: "% retorna apenas o RESTO da divisão",
    explanation: "17 ÷ 3 = 5 com resto 2, então 17 % 3 = 2"
  },
  {
    id: 7, phase: 1, category: "Aritmética", points: 100,
    title: "Potência",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(2 ** 3)`,
    answer: "8",
    hint: "** é potência: 2 elevado a 3",
    explanation: "2 ** 3 = 2³ = 2 × 2 × 2 = 8"
  },
  {
    id: 8, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Soma",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nprint(x + 5)`,
    answer: "15",
    hint: "x vale 10, some com 5",
    explanation: "x = 10, então x + 5 = 10 + 5 = 15"
  },
  {
    id: 9, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Subtração",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nprint(x - 3)`,
    answer: "7",
    hint: "x vale 10, subtraia 3",
    explanation: "x = 10, então x - 3 = 7"
  },
  {
    id: 10, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Multiplicação",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nprint(x * 2)`,
    answer: "20",
    hint: "x vale 10, multiplique por 2",
    explanation: "x = 10, então x * 2 = 20"
  },
  {
    id: 11, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Divisão",
    type: "fill_print",
    question: "O que será impresso? (Atenção!)",
    code: `x = 10\nprint(x / 2)`,
    answer: "5.0",
    hint: "Divisão com / sempre retorna float!",
    explanation: "x / 2 = 10 / 2 = 5.0 (float)"
  },
  {
    id: 12, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Divisão Inteira",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nprint(x // 3)`,
    answer: "3",
    hint: "Quantas vezes 3 cabe em 10?",
    explanation: "10 // 3 = 3 (resto 1 é descartado)"
  },
  {
    id: 13, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Módulo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nprint(x % 3)`,
    answer: "1",
    hint: "10 ÷ 3 = 3 com resto ?",
    explanation: "10 % 3 = 1 (pois 10 = 3×3 + 1)"
  },
  {
    id: 14, phase: 1, category: "Aritmética", points: 100,
    title: "Variável + Potência",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nprint(x ** 2)`,
    answer: "100",
    hint: "10 ao quadrado = ?",
    explanation: "x ** 2 = 10² = 100"
  },
  {
    id: 15, phase: 1, category: "Aritmética", points: 150,
    title: "Precedência de Operadores",
    type: "fill_print",
    question: "O que será impresso? (Cuidado com a ordem!)",
    code: `print(3 + 4 * 2)`,
    answer: "11",
    hint: "Multiplicação é feita ANTES da adição",
    explanation: "4 * 2 = 8 primeiro, depois 3 + 8 = 11"
  },
  {
    id: 16, phase: 1, category: "Aritmética", points: 150,
    title: "Parênteses Mudam Tudo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print((3 + 4) * 2)`,
    answer: "14",
    hint: "Parênteses são calculados primeiro",
    explanation: "(3 + 4) = 7 primeiro, depois 7 * 2 = 14"
  },
  {
    id: 17, phase: 1, category: "Aritmética", points: 150,
    title: "Expressão Mista",
    type: "fill_print",
    question: "O que será impresso?",
    code: `print(10 / 2 + 1)`,
    answer: "6.0",
    hint: "10 / 2 é calculado primeiro. Resultado float!",
    explanation: "10 / 2 = 5.0, depois 5.0 + 1 = 6.0"
  },
  {
    id: 18, phase: 1, category: "Aritmética", points: 150,
    title: "Duas Variáveis",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 7\ny = 3\nprint(x + y)`,
    answer: "10",
    hint: "Some os valores de x e y",
    explanation: "x = 7, y = 3, x + y = 10"
  },
  {
    id: 19, phase: 1, category: "Aritmética", points: 150,
    title: "Multiplicando Variáveis",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 7\ny = 3\nprint(x * y)`,
    answer: "21",
    hint: "Multiplique 7 × 3",
    explanation: "x * y = 7 * 3 = 21"
  },
  {
    id: 20, phase: 1, category: "Aritmética", points: 150,
    title: "Potência com Variáveis",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 7\ny = 3\nprint(x ** y)`,
    answer: "343",
    hint: "7 elevado à 3ª potência = 7 × 7 × 7",
    explanation: "7 ** 3 = 7 × 7 × 7 = 343"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FASE 2 — VARIÁVEIS E ATRIBUIÇÃO (Salas 21–40)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    id: 21, phase: 2, category: "Variáveis", points: 150,
    title: "Atribuição Simples",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 42\nprint(x)`,
    answer: "42",
    hint: "x recebe o valor 42",
    explanation: "x = 42 guarda o valor 42. print(x) imprime 42."
  },
  {
    id: 22, phase: 2, category: "Variáveis", points: 150,
    title: "Variável de Texto",
    type: "fill_print",
    question: "O que será impresso?",
    code: `nome = "Ana"\nprint(nome)`,
    answer: "Ana",
    hint: "Variáveis guardam o valor atribuído",
    explanation: "nome guarda a string 'Ana'. print(nome) imprime Ana (sem aspas)."
  },
  {
    id: 23, phase: 2, category: "Variáveis", points: 150,
    title: "Reatribuição",
    type: "fill_print",
    question: "O que será impresso? (Atenção: x muda!)",
    code: `x = 5\nx = 10\nprint(x)`,
    answer: "10",
    hint: "x foi atribuído duas vezes. Qual é o valor final?",
    explanation: "x começa como 5, mas é sobrescrito por 10. print(x) imprime 10."
  },
  {
    id: 24, phase: 2, category: "Variáveis", points: 150,
    title: "Copiando Valor",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a = 3\nb = a\nprint(b)`,
    answer: "3",
    hint: "b recebe o valor atual de a",
    explanation: "b = a faz b guardar o valor 3. print(b) imprime 3."
  },
  {
    id: 25, phase: 2, category: "Variáveis", points: 200,
    title: "Independência de Variáveis",
    type: "fill_print",
    question: "O que será impresso? (Cuidado — a muda depois!)",
    code: `a = 3\nb = a\na = 10\nprint(b)`,
    answer: "3",
    hint: "Quando b = a foi executado, a valia 3. Mudar a depois não afeta b!",
    explanation: "b recebeu 3 quando a valia 3. Depois a mudou para 10, mas b continua 3."
  },
  {
    id: 26, phase: 2, category: "Variáveis", points: 150,
    title: "Complete o Valor",
    type: "fill_blank",
    question: "Complete para que o print mostre 15:",
    code: `x = _____\nprint(x + 5)`,
    answer: "10",
    hint: "x + 5 = 15, então x = ?",
    explanation: "Se x + 5 = 15, então x = 15 - 5 = 10"
  },
  {
    id: 27, phase: 2, category: "Variáveis", points: 150,
    title: "Complete a Segunda Variável",
    type: "fill_blank",
    question: "Complete para que o print mostre 12:",
    code: `x = 5\ny = _____\nprint(x + y)`,
    answer: "7",
    hint: "5 + y = 12, então y = ?",
    explanation: "x = 5, precisamos x + y = 12, então y = 12 - 5 = 7"
  },
  {
    id: 28, phase: 2, category: "Variáveis", points: 150,
    title: "O que vai no print?",
    type: "fill_blank",
    question: "Complete para imprimir o valor de x:",
    code: `x = 10\nprint(_____)`,
    answer: "x",
    hint: "Coloque o nome da variável no print",
    explanation: "print(x) imprime o valor guardado em x, que é 10."
  },
  {
    id: 29, phase: 2, category: "Variáveis", points: 150,
    title: "Terceira Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 5\ny = 3\nz = x + y\nprint(z)`,
    answer: "8",
    hint: "z recebe o resultado de x + y",
    explanation: "x=5, y=3, z = 5 + 3 = 8"
  },
  {
    id: 30, phase: 2, category: "Variáveis", points: 150,
    title: "Produto em Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 5\ny = 3\nz = x * y\nprint(z)`,
    answer: "15",
    hint: "z recebe 5 × 3",
    explanation: "z = x * y = 5 * 3 = 15"
  },
  {
    id: 31, phase: 2, category: "Variáveis", points: 150,
    title: "Divisão Inteira em Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\ny = 4\nz = x // y\nprint(z)`,
    answer: "2",
    hint: "Quantas vezes 4 cabe inteiro em 10?",
    explanation: "10 // 4 = 2 (pois 4×2=8, e 4×3=12 passa de 10)"
  },
  {
    id: 32, phase: 2, category: "Variáveis", points: 150,
    title: "Resto em Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\ny = 4\nz = x % y\nprint(z)`,
    answer: "2",
    hint: "10 ÷ 4 = 2 com resto ?",
    explanation: "10 % 4 = 2 (pois 10 = 4×2 + 2)"
  },
  {
    id: 33, phase: 2, category: "Variáveis", points: 200,
    title: "Potência Grande",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 2\ny = 8\nz = x ** y\nprint(z)`,
    answer: "256",
    hint: "2 elevado à oitava potência",
    explanation: "2 ** 8 = 256 (2,4,8,16,32,64,128,256)"
  },
  {
    id: 34, phase: 2, category: "Variáveis", points: 150,
    title: "Soma em Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a = 10\nb = 20\nc = a + b\nprint(c)`,
    answer: "30",
    hint: "c recebe a soma de a e b",
    explanation: "a + b = 10 + 20 = 30"
  },
  {
    id: 35, phase: 2, category: "Variáveis", points: 150,
    title: "Resto da Divisão",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a = 10\nb = 3\nc = a // b\nd = a % b\nprint(d)`,
    answer: "1",
    hint: "10 ÷ 3 = 3 com qual resto?",
    explanation: "10 // 3 = 3 e 10 % 3 = 1 (pois 3×3=9, 10-9=1)"
  },
  {
    id: 36, phase: 2, category: "Variáveis", points: 200,
    title: "Atualizando Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 5\nx = x + 3\nprint(x)`,
    answer: "8",
    hint: "x recebe seu próprio valor mais 3",
    explanation: "x = 5, depois x = 5 + 3 = 8"
  },
  {
    id: 37, phase: 2, category: "Variáveis", points: 200,
    title: "Dobrando Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nx = x * 2\nprint(x)`,
    answer: "20",
    hint: "x multiplica seu próprio valor por 2",
    explanation: "x = 10, depois x = 10 * 2 = 20"
  },
  {
    id: 38, phase: 2, category: "Variáveis", points: 200,
    title: "Decrementando Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nx = x - 3\nprint(x)`,
    answer: "7",
    hint: "x diminui em 3",
    explanation: "x = 10, depois x = 10 - 3 = 7"
  },
  {
    id: 39, phase: 2, category: "Variáveis", points: 200,
    title: "Incremento Triplo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 0\nx = x + 1\nx = x + 1\nx = x + 1\nprint(x)`,
    answer: "3",
    hint: "x começa em 0 e é incrementado 3 vezes",
    explanation: "0 → 1 → 2 → 3. print(x) = 3"
  },
  {
    id: 40, phase: 2, category: "Variáveis", points: 200,
    title: "Complete o Operador",
    type: "fill_blank",
    question: "Complete para que o print mostre 14:",
    code: `x = 100\ny = 7\nprint(x _____ y)`,
    answer: "//",
    hint: "100 dividido por 7 inteiro = 14",
    explanation: "100 // 7 = 14"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FASE 3 — ATRIBUIÇÃO MÚLTIPLA (Salas 41–60)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    id: 41, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Primeira Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 1, 2\nprint(a)`,
    answer: "1",
    hint: "a recebe o primeiro valor",
    explanation: "a, b = 1, 2 → a = 1, b = 2. print(a) = 1"
  },
  {
    id: 42, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Segunda Variável",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 1, 2\nprint(b)`,
    answer: "2",
    hint: "b recebe o segundo valor",
    explanation: "a, b = 1, 2 → a = 1, b = 2. print(b) = 2"
  },
  {
    id: 43, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Soma das Duas",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 10, 20\nprint(a + b)`,
    answer: "30",
    hint: "Some os valores de a e b",
    explanation: "a = 10, b = 20, a + b = 30"
  },
  {
    id: 44, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Três Variáveis",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x, y, z = 1, 2, 3\nprint(z)`,
    answer: "3",
    hint: "z recebe o terceiro valor",
    explanation: "x=1, y=2, z=3. print(z) = 3"
  },
  {
    id: 45, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Soma de Três",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x, y, z = 1, 2, 3\nprint(x + y + z)`,
    answer: "6",
    hint: "Some os três valores",
    explanation: "1 + 2 + 3 = 6"
  },
  {
    id: 46, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Produto de Duas",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 5, 10\nprint(a * b)`,
    answer: "50",
    hint: "Multiplique os valores de a e b",
    explanation: "a = 5, b = 10, a * b = 50"
  },
  {
    id: 47, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Divisão Inteira",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x, y = 10, 3\nprint(x // y)`,
    answer: "3",
    hint: "10 ÷ 3 cabe quantas vezes inteiro?",
    explanation: "10 // 3 = 3"
  },
  {
    id: 48, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Módulo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x, y = 10, 3\nprint(x % y)`,
    answer: "1",
    hint: "Qual o resto de 10 ÷ 3?",
    explanation: "10 % 3 = 1 (pois 10 = 3×3 + 1)"
  },
  {
    id: 49, phase: 3, category: "Atribuição Múltipla", points: 250,
    title: "Troca de Valores!",
    type: "fill_print",
    question: "O que será impresso? (Isso é um truque Python!)",
    code: `a, b = 3, 7\na, b = b, a\nprint(a)`,
    answer: "7",
    hint: "a, b = b, a troca os valores de a e b",
    explanation: "Antes: a=3, b=7. Depois do swap: a=7, b=3. print(a) = 7"
  },
  {
    id: 50, phase: 3, category: "Atribuição Múltipla", points: 250,
    title: "Troca — Segundo Valor",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 3, 7\na, b = b, a\nprint(b)`,
    answer: "3",
    hint: "Após o swap, b recebe o valor original de a",
    explanation: "Antes: a=3, b=7. Após swap: a=7, b=3. print(b) = 3"
  },
  {
    id: 51, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Potência",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x, y = 4, 3\nprint(x ** y)`,
    answer: "64",
    hint: "4 elevado à 3ª potência",
    explanation: "4 ** 3 = 4 × 4 × 4 = 64"
  },
  {
    id: 52, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Quociente",
    type: "fill_print",
    question: "O que será impresso?",
    code: `n1, n2 = 15, 4\nprint(n1 // n2)`,
    answer: "3",
    hint: "15 ÷ 4 cabe quantas vezes inteiro?",
    explanation: "15 // 4 = 3 (pois 4×3=12 e 4×4=16 passa)"
  },
  {
    id: 53, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Resto",
    type: "fill_print",
    question: "O que será impresso?",
    code: `n1, n2 = 15, 4\nprint(n1 % n2)`,
    answer: "3",
    hint: "15 - (4 × 3) = ?",
    explanation: "15 % 4 = 3 (pois 15 = 4×3 + 3)"
  },
  {
    id: 54, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Divisão Grande",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 100, 7\nprint(a // b)`,
    answer: "14",
    hint: "7 × 14 = 98, e 7 × 15 = 105 (passa de 100)",
    explanation: "100 // 7 = 14"
  },
  {
    id: 55, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Resto Grande",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 100, 7\nprint(a % b)`,
    answer: "2",
    hint: "100 - (7 × 14) = ?",
    explanation: "100 % 7 = 2 (pois 100 = 7×14 + 2)"
  },
  {
    id: 56, phase: 3, category: "Atribuição Múltipla", points: 250,
    title: "Potência de 2",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x, y = 2, 8\nprint(x ** y)`,
    answer: "256",
    hint: "2 elevado à 8ª potência (2, 4, 8, 16, 32, 64, 128, 256)",
    explanation: "2 ** 8 = 256"
  },
  {
    id: 57, phase: 3, category: "Atribuição Múltipla", points: 200,
    title: "Complete o Operador",
    type: "fill_blank",
    question: "Complete para que o print mostre 13:",
    code: `x, y = 10, 3\nprint(x _____ y)`,
    answer: "+",
    hint: "10 + 3 = 13",
    explanation: "10 + 3 = 13"
  },
  {
    id: 58, phase: 3, category: "Atribuição Múltipla", points: 250,
    title: "Troca em Cadeia",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b, c = 1, 2, 3\na, b = b, c\nprint(a)`,
    answer: "2",
    hint: "a, b = b, c → a recebe o valor de b (que era 2)",
    explanation: "a, b, c = 1, 2, 3. Depois a, b = b, c → a=2, b=3. print(a) = 2"
  },
  {
    id: 59, phase: 3, category: "Atribuição Múltipla", points: 250,
    title: "Troca em Cadeia — b",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b, c = 1, 2, 3\na, b = b, c\nprint(b)`,
    answer: "3",
    hint: "a, b = b, c → b recebe o valor de c (que era 3)",
    explanation: "a, b, c = 1, 2, 3. Depois a, b = b, c → a=2, b=3. print(b) = 3"
  },
  {
    id: 60, phase: 3, category: "Atribuição Múltipla", points: 250,
    title: "Troca Manual",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 10, 20\nc = a\na = b\nb = c\nprint(a, b)`,
    answer: "20 10",
    hint: "c guarda a temporariamente para fazer a troca",
    explanation: "c=10, a=20, b=10. print(a, b) = '20 10'"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FASE 4 — ATRIBUIÇÃO AUMENTADA (Salas 61–80)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    id: 61, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Soma Aumentada",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nx += 5\nprint(x)`,
    answer: "15",
    hint: "x += 5 é o mesmo que x = x + 5",
    explanation: "x = 10, x += 5 → x = 10 + 5 = 15"
  },
  {
    id: 62, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Subtração Aumentada",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nx -= 3\nprint(x)`,
    answer: "7",
    hint: "x -= 3 é o mesmo que x = x - 3",
    explanation: "x = 10, x -= 3 → x = 10 - 3 = 7"
  },
  {
    id: 63, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Multiplicação Aumentada",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 4\nx *= 3\nprint(x)`,
    answer: "12",
    hint: "x *= 3 é o mesmo que x = x * 3",
    explanation: "x = 4, x *= 3 → x = 4 * 3 = 12"
  },
  {
    id: 64, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Divisão Aumentada",
    type: "fill_print",
    question: "O que será impresso? (Atenção ao tipo!)",
    code: `x = 20\nx /= 4\nprint(x)`,
    answer: "5.0",
    hint: "/= usa divisão normal, resultado é float",
    explanation: "x = 20, x /= 4 → x = 20 / 4 = 5.0"
  },
  {
    id: 65, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Divisão Inteira Aumentada",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 20\nx //= 3\nprint(x)`,
    answer: "6",
    hint: "x //= 3 é o mesmo que x = x // 3",
    explanation: "x = 20, x //= 3 → x = 20 // 3 = 6"
  },
  {
    id: 66, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Módulo Aumentado",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 20\nx %= 3\nprint(x)`,
    answer: "2",
    hint: "x %= 3 é o mesmo que x = x % 3",
    explanation: "x = 20, x %= 3 → x = 20 % 3 = 2 (pois 20 = 3×6 + 2)"
  },
  {
    id: 67, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Potência Aumentada",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 2\nx **= 4\nprint(x)`,
    answer: "16",
    hint: "x **= 4 é o mesmo que x = x ** 4",
    explanation: "x = 2, x **= 4 → x = 2 ** 4 = 16"
  },
  {
    id: 68, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Dobrando a Si Mesmo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 5\nx += x\nprint(x)`,
    answer: "10",
    hint: "x += x soma x com ele mesmo",
    explanation: "x = 5, x += x → x = 5 + 5 = 10"
  },
  {
    id: 69, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Zerando a Si Mesmo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nx -= x\nprint(x)`,
    answer: "0",
    hint: "Qualquer número menos ele mesmo é 0",
    explanation: "x = 10, x -= x → x = 10 - 10 = 0"
  },
  {
    id: 70, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Quadrado a Si Mesmo",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 3\nx *= x\nprint(x)`,
    answer: "9",
    hint: "x *= x multiplica x por ele mesmo",
    explanation: "x = 3, x *= x → x = 3 * 3 = 9"
  },
  {
    id: 71, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Complete: Resultado 15",
    type: "fill_blank",
    question: "Complete para que o print mostre 15:",
    code: `x = 10\nx _____= 5\nprint(x)`,
    answer: "+",
    hint: "10 ? 5 = 15",
    explanation: "x += 5 → x = 10 + 5 = 15"
  },
  {
    id: 72, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Complete: Resultado 5",
    type: "fill_blank",
    question: "Complete para que o print mostre 5:",
    code: `x = 10\nx _____= 5\nprint(x)`,
    answer: "-",
    hint: "10 ? 5 = 5",
    explanation: "x -= 5 → x = 10 - 5 = 5"
  },
  {
    id: 73, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Complete: Resultado 50",
    type: "fill_blank",
    question: "Complete para que o print mostre 50:",
    code: `x = 10\nx _____= 5\nprint(x)`,
    answer: "*",
    hint: "10 ? 5 = 50",
    explanation: "x *= 5 → x = 10 * 5 = 50"
  },
  {
    id: 74, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Complete: Resultado 2.0",
    type: "fill_blank",
    question: "Complete para que o print mostre 2.0:",
    code: `x = 10\nx _____= 5\nprint(x)`,
    answer: "/",
    hint: "10 ? 5 = 2.0 (divisão normal)",
    explanation: "x /= 5 → x = 10 / 5 = 2.0"
  },
  {
    id: 75, phase: 4, category: "Atribuição Aumentada", points: 200,
    title: "Complete: Resultado 1",
    type: "fill_blank",
    question: "Complete para que o print mostre 1:",
    code: `x = 10\nx _____= 3\nprint(x)`,
    answer: "%",
    hint: "Qual operação com 10 e 3 resulta em 1?",
    explanation: "x %= 3 → x = 10 % 3 = 1 (resto da divisão)"
  },
  {
    id: 76, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Duas Operações",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 10\nx += 5\nx -= 3\nprint(x)`,
    answer: "12",
    hint: "Execute passo a passo: 10 → 15 → 12",
    explanation: "x=10, x+=5→x=15, x-=3→x=12"
  },
  {
    id: 77, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Potência e Adição",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 2\nx **= 3\nx += 8\nprint(x)`,
    answer: "16",
    hint: "2³ = 8, depois 8 + 8 = ?",
    explanation: "x=2, x**=3→x=8, x+=8→x=16"
  },
  {
    id: 78, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Divisão Inteira Grande",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 100\nx //= 7\nprint(x)`,
    answer: "14",
    hint: "7 × 14 = 98, que é o maior múltiplo de 7 menor que 100",
    explanation: "100 // 7 = 14"
  },
  {
    id: 79, phase: 4, category: "Atribuição Aumentada", points: 250,
    title: "Módulo Grande",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 100\nx %= 7\nprint(x)`,
    answer: "2",
    hint: "100 - (7 × 14) = ?",
    explanation: "100 % 7 = 2"
  },
  {
    id: 80, phase: 4, category: "Atribuição Aumentada", points: 300,
    title: "Sequência de Operações",
    type: "fill_print",
    question: "O que será impresso? (Execute passo a passo!)",
    code: `x = 5\nx *= 2\nx += 3\nx //= 2\nprint(x)`,
    answer: "6",
    hint: "Passo 1: 5*2=10. Passo 2: 10+3=13. Passo 3: 13//2=?",
    explanation: "x=5→10→13→6 (pois 13//2=6)"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FASE 5 — DESAFIOS FINAIS (Salas 81–100)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    id: 81, phase: 5, category: "Desafio", points: 300,
    title: "Expressão com Três Variáveis",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 5\ny = 3\nz = x * y - x\nprint(z)`,
    answer: "10",
    hint: "z = 5 × 3 - 5 = ?",
    explanation: "z = 5*3 - 5 = 15 - 5 = 10"
  },
  {
    id: 82, phase: 5, category: "Desafio", points: 300,
    title: "Dobro da Soma",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 4, 6\nc = a + b\nc = c * 2\nprint(c)`,
    answer: "20",
    hint: "Primeiro some a e b, depois dobre",
    explanation: "c = 4+6 = 10, c = 10*2 = 20"
  },
  {
    id: 83, phase: 5, category: "Desafio", points: 300,
    title: "Cubo e Dobro",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 2\nx = x ** 3\nx = x + x\nprint(x)`,
    answer: "16",
    hint: "2³ = 8, depois 8 + 8 = ?",
    explanation: "x=2, x=2³=8, x=8+8=16"
  },
  {
    id: 84, phase: 5, category: "Desafio", points: 300,
    title: "Produto de Três",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b, c = 1, 2, 3\nprint(a * b * c)`,
    answer: "6",
    hint: "1 × 2 × 3 = ?",
    explanation: "1 * 2 * 3 = 6"
  },
  {
    id: 85, phase: 5, category: "Desafio", points: 300,
    title: "Quociente e Resto",
    type: "fill_print",
    question: "O que será impresso? (dois números separados por espaço)",
    code: `x = 10\ny = x // 3\nz = x % 3\nprint(y, z)`,
    answer: "3 1",
    hint: "10 // 3 = 3 e 10 % 3 = 1",
    explanation: "y=3, z=1. print(y, z) imprime '3 1'"
  },
  {
    id: 86, phase: 5, category: "Desafio", points: 300,
    title: "Divisão Euclidiana",
    type: "fill_print",
    question: "O que será impresso?",
    code: `n = 17\nresto = n % 5\ninteiro = n // 5\nprint(inteiro, resto)`,
    answer: "3 2",
    hint: "17 ÷ 5 = ? com resto ?",
    explanation: "17 // 5 = 3 e 17 % 5 = 2. print = '3 2'"
  },
  {
    id: 87, phase: 5, category: "Desafio", points: 300,
    title: "Precedência",
    type: "fill_print",
    question: "O que será impresso? (Atenção à ordem!)",
    code: `a = 2\nb = 3\nc = 4\nprint(a + b * c)`,
    answer: "14",
    hint: "Multiplicação antes da adição: b*c primeiro",
    explanation: "b*c = 3*4 = 12, a + 12 = 2 + 12 = 14"
  },
  {
    id: 88, phase: 5, category: "Desafio", points: 300,
    title: "Parênteses Primeiro",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a = 2\nb = 3\nc = 4\nprint((a + b) * c)`,
    answer: "20",
    hint: "Os parênteses são calculados primeiro",
    explanation: "(a+b) = 5, 5*c = 5*4 = 20"
  },
  {
    id: 89, phase: 5, category: "Desafio", points: 350,
    title: "Teorema de Pitágoras",
    type: "fill_print",
    question: "O que será impresso?",
    code: `a, b = 3, 4\nc = a ** 2 + b ** 2\nprint(c)`,
    answer: "25",
    hint: "3² + 4² = 9 + 16 = ?",
    explanation: "3² + 4² = 9 + 16 = 25 (triângulo 3-4-5!)"
  },
  {
    id: 90, phase: 5, category: "Desafio", points: 350,
    title: "Mais 3, Vezes 2",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 5\nx += 3\nx *= 2\nprint(x)`,
    answer: "16",
    hint: "5+3=8, depois 8*2=?",
    explanation: "x=5, x+=3→x=8, x*=2→x=16"
  },
  {
    id: 91, phase: 5, category: "Desafio", points: 350,
    title: "Vezes 2, Mais 3",
    type: "fill_print",
    question: "O que será impresso? (A ORDEM IMPORTA!)",
    code: `x = 5\nx *= 2\nx += 3\nprint(x)`,
    answer: "13",
    hint: "5*2=10, depois 10+3=?",
    explanation: "x=5, x*=2→x=10, x+=3→x=13. A ordem muda o resultado!"
  },
  {
    id: 92, phase: 5, category: "Desafio", points: 350,
    title: "Divisão e Resto Juntos",
    type: "fill_print",
    question: "O que será impresso? (dois números separados por espaço)",
    code: `a, b = 10, 3\nprint(a // b, a % b)`,
    answer: "3 1",
    hint: "10 // 3 = ? e 10 % 3 = ?",
    explanation: "10 // 3 = 3 e 10 % 3 = 1. print = '3 1'"
  },
  {
    id: 93, phase: 5, category: "Desafio", points: 350,
    title: "Dividindo Duas Vezes",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 16\nx //= 2\nx //= 2\nprint(x)`,
    answer: "4",
    hint: "16÷2=8, depois 8÷2=?",
    explanation: "x=16, x//=2→x=8, x//=2→x=4"
  },
  {
    id: 94, phase: 5, category: "Desafio", points: 350,
    title: "Rotação de Três",
    type: "fill_print",
    question: "O que será impresso? (três números separados por espaço)",
    code: `a, b, c = 1, 2, 3\na, b, c = c, a, b\nprint(a, b, c)`,
    answer: "3 1 2",
    hint: "a recebe c(3), b recebe a(1), c recebe b(2)",
    explanation: "a=3, b=1, c=2. print = '3 1 2'"
  },
  {
    id: 95, phase: 5, category: "Desafio", points: 350,
    title: "Polinômio",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 7\nprint(x * x - x + 1)`,
    answer: "43",
    hint: "7² - 7 + 1 = 49 - 7 + 1 = ?",
    explanation: "7*7 = 49, 49 - 7 = 42, 42 + 1 = 43"
  },
  {
    id: 96, phase: 5, category: "Desafio", points: 350,
    title: "Divisão Exata",
    type: "fill_print",
    question: "O que será impresso? (dois números separados por espaço)",
    code: `n = 36\nprint(n // 6, n % 6)`,
    answer: "6 0",
    hint: "36 ÷ 6 é divisão exata! Qual o resto?",
    explanation: "36 // 6 = 6, 36 % 6 = 0 (divisão exata)"
  },
  {
    id: 97, phase: 5, category: "Desafio", points: 400,
    title: "Verificação da Divisão",
    type: "fill_print",
    question: "O que será impresso? (Dica: pense no que faz sentido!)",
    code: `a, b = 15, 4\nq = a // b\nr = a % b\nprint(q * b + r)`,
    answer: "15",
    hint: "q*b + r sempre reconstrói o dividendo original!",
    explanation: "q=3, r=3. 3*4 + 3 = 12 + 3 = 15. Isso sempre = a!"
  },
  {
    id: 98, phase: 5, category: "Desafio", points: 400,
    title: "Soma de Potências",
    type: "fill_print",
    question: "O que será impresso?",
    code: `x = 2\nresult = x**0 + x**1 + x**2 + x**3\nprint(result)`,
    answer: "15",
    hint: "2⁰ + 2¹ + 2² + 2³ = 1 + 2 + 4 + 8 = ?",
    explanation: "1 + 2 + 4 + 8 = 15"
  },
  {
    id: 99, phase: 5, category: "Desafio", points: 400,
    title: "Troca Aritmética",
    type: "fill_print",
    question: "O que será impresso? (dois números separados por espaço)",
    code: `a, b = 6, 4\na += b\nb = a - b\na = a - b\nprint(a, b)`,
    answer: "4 6",
    hint: "Este algoritmo troca a e b sem usar uma variável temporária!",
    explanation: "a=10,b=10-4=6,a=10-6=4. Valores trocados!"
  },
  {
    id: 100, phase: 5, category: "BOSS", points: 500,
    title: "⚔️ BOSS FINAL",
    type: "fill_print",
    question: "ÚLTIMA SALA! O que será impresso? (dois números separados por espaço)",
    code: `x, y = 3, 5\nx, y = x + y, x * y\nprint(x, y)`,
    answer: "8 15",
    hint: "ATENÇÃO: x e y são calculados COM os valores originais (3 e 5)",
    explanation: "x = 3+5 = 8, y = 3*5 = 15. print = '8 15'. PARABÉNS!"
  }

];

// Exportar para uso no app
if (typeof module !== 'undefined') module.exports = QUESTIONS;
