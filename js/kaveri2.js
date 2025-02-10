document.addEventListener("DOMContentLoaded", () => {
    let kaverit = [];
    const nameInput = document.getElementById("nameInput");
    const addButton = document.getElementById("addButton");
    const sortButton = document.getElementById("sortButton");
    const removeButton = document.getElementById("removeButton");
    const tulostusDiv = document.getElementById("tulostus");
  
    addButton.addEventListener("click", () => {
      const nimi = nameInput.value.trim();
      if (nimi !== "") {
        kaverit.push(nimi); //Lisätään kavereita listaan
        nameInput.value = "";
        renderFriends();
      }
    });
  
    sortButton.addEventListener("click", () => {
      kaverit.sort(); // Lajitellaan kaverit
      renderFriends();
    });
  
    removeButton.addEventListener("click", () => {
      if (kaverit.length > 0) {
        kaverit.pop(); // Poistaa viimeisen lisätyn kaverin
        renderFriends();
      }
    });
  
    function renderFriends() {
      tulostusDiv.innerHTML = "<h3>Lisätyt kaverit listalle:</h3><p>" + kaverit.join("<br>") + "</p>";
    }
  });
  
  