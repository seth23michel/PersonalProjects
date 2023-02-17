function toggleCSS() {
    // Obtains the <link> element that links to the css (by using its id).
    var currentCSS = document.getElementById('csslink');

    // Change the value of href attribute to change the css file.
    if (currentCSS.getAttribute('href') == 'css/main.css') {
      currentCSS.setAttribute('href', 'css/alternate.css');
    } else {
      currentCSS.setAttribute('href', 'css/main.css');
    }
}