// // Listen for cmd+s
// document.addEventListener("keydown", (e) => {
//   if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
//     e.preventDefault();
//     this.$parent.notify("Saved");
//     // TODO: Actually save it here
//   }
// }, false);

function macro(key, meta, handler) {
  console.log('registering macro with code ' + key);
  document.addEventListener("keydown", (e) => {
    if (e.key == key && e.metaKey == meta) {
      e.preventDefault();
      handler();
    }
  });
}

export default macro;
