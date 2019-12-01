function disableAutoComplete() {
  if (document.getElementsByTagName) {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; inputElements[i]; i++) {
      inputElements[i].autocomplete = "off";
    }
  }
}

export default disableAutoComplete;
