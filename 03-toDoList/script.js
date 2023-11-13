/* alert("hola") */

const $noteContainer = document.querySelector (".container-notes"),
    $createBtn = document.querySelector (".create-note"),
    $inputNote = document.querySelector (".input-note");
//-------------------------------------------------
$createBtn.addEventListener("click", ()=>{
    const $notesPile = document.createElement("div"),
        $inputBox = document.createElement("input"),
        $deleteNoteButton = document.createElement("button"),
        $buttonText = document.createTextNode("Delete");
    
    $notesPile.classList.add("pileOf-notes");
    $inputBox.classList.add("input-pileOf-notes");
    $deleteNoteButton.classList.add("delete-note");

    $inputBox.value = $inputNote.value

    $deleteNoteButton.appendChild($buttonText)
    $notesPile.appendChild($inputBox)
    $notesPile.appendChild($deleteNoteButton)
    $noteContainer.appendChild($notesPile);  

    $inputNote.value = "";
    //-----------------------------------------------
    $deleteNoteButton.addEventListener("click", function (e){
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    })
})



/* 
"Los instruidos son libres"
Meeting Monday 7PM 
LangCLub friday 8Pm
Eu tenho uma casa grande
*/