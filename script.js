document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("saveButton");
    const noteArea = document.getElementById("noteArea");

    // Charger la note depuis le stockage local
    noteArea.value = localStorage.getItem("note");

    // Enregistrer la note dans le stockage local lorsque le bouton est cliqué
    saveButton.addEventListener("click", function() {
        localStorage.setItem("note", noteArea.value);
        alert("Note enregistrée avec succès !");
    });
});
