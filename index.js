let exclusionList = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
class Formatter {
  //add static methods here
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^\w\s'-]/gi, '')
  }
  static titleize(sentence){
    let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  if (i === 0 || !exclusionList.includes(words[i])) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
}

let capitalizedSentence = words.join(" ");
return capitalizedSentence;
  }
}