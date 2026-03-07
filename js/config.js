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
    apiKey:            "",   // ex: "AIzaSyAbc123..."
    authDomain:        "",   // ex: "meu-projeto.firebaseapp.com"
    projectId:         "",   // ex: "meu-projeto"
    storageBucket:     "",   // ex: "meu-projeto.appspot.com"
    messagingSenderId: "",   // ex: "123456789"
    appId:             ""    // ex: "1:123:web:abc..."
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
