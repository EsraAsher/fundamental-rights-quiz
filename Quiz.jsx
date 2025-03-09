function createGoogleForm() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var form = FormApp.create("UPSC Fundamental Rights MCQ Test");
  form.setDescription("Practice test on Fundamental Rights for UPSC.");
  
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var question = data[i][0];
    var options = [data[i][1], data[i][2], data[i][3], data[i][4]];
    var correctAnswer = data[i][5];
    
    var item = form.addMultipleChoiceItem();
    item.setTitle(question)
        .setChoices(options, true)
        .showOtherOption(false);
    
    for (var j = 0; j < options.length; j++) {
      if (options[j] === correctAnswer) {
        item.setPoints(1);
        item.setFeedbackForCorrect(FormApp.createFeedback().setText("Correct Answer!").build());
        item.setFeedbackForIncorrect(FormApp.createFeedback().setText("Try again!").build());
      }
    }
  }
  
  Logger.log("Google Form URL: " + form.getPublishedUrl());
}

