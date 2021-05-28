//  主题切换
const cut = (cutcheack) => {
  document.getElementsByTagName("body")[0].style.setProperty("--backgroundColor", cutcheack ? "#121212" : "#fff")
  document.getElementsByTagName("body")[0].style.setProperty("--fonntColor", cutcheack ? "#cecece" : "#333")
  document.getElementsByTagName("body")[0].style.setProperty("--backgroundMColor", cutcheack ? "#333" : "#eee")
  document.getElementsByTagName("body")[0].style.setProperty("--tableColor", cutcheack ? "#000" : "#d8d8d8")
  document.getElementsByTagName("body")[0].style.setProperty("--tablesColor", cutcheack ? "#222" : "#fff")
  document.getElementsByTagName("body")[0].style.setProperty("--inputColor", cutcheack ? "#666" : "#fff")
  document.getElementsByTagName("body")[0].style.setProperty("--borderColor", cutcheack ? "#666" : "#fff")
};
export default cut
