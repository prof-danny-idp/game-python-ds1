# Configuracao do Google Sheets para Python Dungeon

## Passo 1: Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie a primeira aba para **Resultados**
4. Na linha 1, adicione os cabecalhos:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Nome | RA | Pontos | Salas | Sala Atual | Aproveitamento | Data Inicio | Data Fim |

## Passo 2: Criar o Apps Script

1. Na planilha, va em **Extensoes > Apps Script**
2. Apague o conteudo padrao do editor
3. Copie e cole o conteudo do arquivo `google-apps-script.gs` deste projeto
4. Salve (Ctrl+S)

## Passo 3: Fazer o Deploy

1. Clique em **Implantar > Nova implantacao**
2. Clique na engrenagem e selecione **App da Web**
3. Configure:
   - **Descricao:** Python Dungeon
   - **Executar como:** Eu (seu email)
   - **Quem tem acesso:** Qualquer pessoa
4. Clique em **Implantar**
5. Autorize o acesso quando solicitado
6. **Copie a URL** gerada (algo como `https://script.google.com/macros/s/XXXXX/exec`)

## Passo 4: Configurar o Jogo

1. Abra o arquivo `js/config.js`
2. Cole a URL no campo `GOOGLE_SHEETS_URL`:

```js
GOOGLE_SHEETS_URL: "https://script.google.com/macros/s/SUA_URL_AQUI/exec",
```

3. Faca commit e push para o GitHub

## Passo 5: GitHub Pages

1. No repositorio do GitHub, va em **Settings > Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch **main** e a pasta **/ (root)**
4. Clique em **Save**
5. O jogo estara disponivel em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

## Dados Salvos

Cada vez que um aluno completa o jogo, uma nova linha e adicionada na planilha com:

- **Nome** do aluno
- **RA** do aluno
- **Pontos** conquistados
- **Total de Salas** do jogo
- **Sala Atual** alcancada
- **Aproveitamento** em porcentagem
- **Data/Hora de Inicio** da sessao
- **Data/Hora de Fim** da sessao
