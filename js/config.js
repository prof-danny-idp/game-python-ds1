// ============================================================
// PYTHON DUNGEON — CONFIGURAÇÕES
// ⚠️  EDITE ESTE ARQUIVO antes de publicar!
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // 🔑 SENHA DA AULA
  // Troque esta senha a cada semestre ou turma.
  // Você dirá a senha aos alunos durante a aula.
  // ----------------------------------------------------------
  CLASS_PASSWORD: "python2025",

  // ----------------------------------------------------------
  // 📛 NOME DO JOGO (aparece no título)
  // ----------------------------------------------------------
  GAME_TITLE: "Python Dungeon",
  GAME_SUBTITLE: "Conquiste o labirinto dominando Python!",

  // ----------------------------------------------------------
  // 🔥 FIREBASE (deixe vazio para jogar sem login/salvamento)
  //
  // Para ativar o Firebase:
  // 1. Crie um projeto em https://console.firebase.google.com
  // 2. Ative Authentication → Google
  // 3. Crie um banco Firestore
  // 4. Vá em Configurações do Projeto → Seus apps → </> Web
  // 5. Copie os valores e cole aqui abaixo
  //
  // No arquivo SETUP.md há um guia passo a passo com imagens.
  // ----------------------------------------------------------
  FIREBASE: {
    apiKey: "AIzaSyBlRWL42uLprs3XpB78WkTf9fEjuz9okv8",
    authDomain: "python-game-ds1.firebaseapp.com",
    projectId: "python-game-ds1",
    storageBucket: "python-game-ds1.firebasestorage.app",
    messagingSenderId: "158213289255",
    appId: "1:158213289255:web:3a1997f9781dbcf0fe6502",
    measurementId: "G-HHZC8RX0YX"
  },

  // ----------------------------------------------------------
  // ⚙️  CONFIGURAÇÕES DO JOGO
  // ----------------------------------------------------------
  GAME: {
    // Pontos descontados ao usar uma dica
    HINT_PENALTY: 50,

    // Bônus de velocidade (segundos para ganhar bônus)
    SPEED_BONUS_SECONDS: 15,
    SPEED_BONUS_POINTS: 25,

    // Quantas tentativas erradas antes de mostrar a dica automaticamente
    AUTO_HINT_AFTER: 3,
  }

};
