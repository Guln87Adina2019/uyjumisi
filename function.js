let word1 =prompt ("Бірінші сөзді жаз")
let word2=prompt ("Екінші сөзді жаз")
function compareWords(word1, word2) {
    // Сөздерді кіші әріпке өзгертіп салыстырамыз
    if (word1.toLowerCase("Бірінші сөзді жаз") == word2.toLowerCase("Екінші сөзді жаз")) {
      return "Сөздер бірдей";
    } else {
      return "Сөздер әртүрлі";
    }
  }
  alert (compareWords(word1, word2));