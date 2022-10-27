function getLocale() {
  var lang = navigator.language.valueOf();
  if (lang) {
    return lang.split("-")[1];
  } else {
    return navigator.language[0];
  }
}
