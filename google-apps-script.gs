// ============================================================
// PYTHON DUNGEON — Google Apps Script
// Cole este codigo no Apps Script da sua planilha Google Sheets
//
// INSTRUCOES:
// 1. Crie uma planilha no Google Sheets
// 2. Renomeie a primeira aba para "Resultados"
// 3. Na linha 1, coloque os cabecalhos:
//    A1: Nome | B1: RA | C1: Pontos | D1: Salas | E1: Sala Atual
//    F1: Aproveitamento | G1: Data Inicio | H1: Data Fim
// 4. Va em Extensoes > Apps Script
// 5. Apague o conteudo padrao e cole este codigo
// 6. Clique em "Implantar" > "Nova implantacao"
// 7. Tipo: "App da Web"
// 8. Executar como: "Eu" (sua conta)
// 9. Quem tem acesso: "Qualquer pessoa"
// 10. Clique em "Implantar"
// 11. Copie a URL gerada
// 12. Cole a URL no arquivo js/config.js no campo GOOGLE_SHEETS_URL
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Resultados");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.nome || "",
      data.ra || "",
      data.pontos || 0,
      data.totalSalas || 0,
      data.salaAtual || 0,
      (data.aproveitamento || 0) + "%",
      data.dataInicio || "",
      data.dataFim || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Python Dungeon API ativa" }))
    .setMimeType(ContentService.MimeType.JSON);
}
