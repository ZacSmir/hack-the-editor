var editor = $(parent.document.body)
var topbar = $(parent.parent.document.body).find("#topbar")

editor.find("div").css({background:"black"})

topbar.find("input").css({"font-family": '"Comic Sans MS", "Comic Sans", cursive'})

var allDivsInTheEditor = editor.find("div")

topbar



// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked