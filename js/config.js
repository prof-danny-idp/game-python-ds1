// ============================================================
// PYTHON DUNGEON — CONFIGURACOES
// Edite este arquivo antes de publicar!
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // SENHA DA AULA
  // Troque esta senha a cada semestre ou turma.
  // ----------------------------------------------------------
  CLASS_PASSWORD: "python2025",

  // ----------------------------------------------------------
  // NOME DO JOGO (aparece no titulo)
  // ----------------------------------------------------------
  GAME_TITLE: "Python Dungeon",
  GAME_SUBTITLE: "Conquiste o labirinto dominando Python!",

  // ----------------------------------------------------------
  // GOOGLE SHEETS (via Google Apps Script)
  //
  // Para ativar o salvamento no Google Sheets:
  // 1. Crie uma planilha no Google Sheets
  // 2. Va em Extensoes > Apps Script
  // 3. Cole o codigo do arquivo google-apps-script.gs
  // 4. Faca o deploy como "Web App" (acesso: qualquer pessoa)
  // 5. Copie a URL gerada e cole aqui abaixo
  //
  // Veja o arquivo SETUP_GOOGLE_SHEETS.md para instrucoes.
  // ----------------------------------------------------------
  GOOGLE_SHEETS_URL: "",

  // ----------------------------------------------------------
  // CONFIGURACOES DO JOGO
  // ----------------------------------------------------------
  GAME: {
    // Pontos descontados ao usar uma dica
    HINT_PENALTY: 50,

    // Bonus de velocidade (segundos para ganhar bonus)
    SPEED_BONUS_SECONDS: 15,
    SPEED_BONUS_POINTS: 25,

    // Quantas tentativas erradas antes de mostrar a dica automaticamente
    AUTO_HINT_AFTER: 3,
  }

};
