document.addEventListener("DOMContentLoaded", () => {
    let kaverit = [];
    let selectedName = null;
    const MAX_NAMES = 10;
    const nameInput = document.getElementById("nameInput");
    const addButton = document.getElementById("addButton");
    const sortButton = document.getElementById("sortButton");
    const removeButton = document.getElementById("removeButton");
    const tulostusDiv = document.getElementById("tulostus");
    
    function addFriend() {
      if (kaverit.length >= MAX_NAMES) {
        alert("Voit lisätä enintään " + MAX_NAMES + " nimeä.");
        return;
      }
      
      const nimi = nameInput.value.trim();
      if (nimi !== "") {
        kaverit.push(nimi);
        nameInput.value = "";
        renderFriends();
      }
      nameInput.focus(); //  kursori vilkkumaan 
    }
  
    addButton.addEventListener("click", addFriend);
    
    nameInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addFriend();    // kutsutaan funktiota ja lisätään kaveri Enter-painalluksella 
      }
    });
  
    sortButton.addEventListener("click", () => {
      kaverit.sort();
      renderFriends();
    });
  
    removeButton.addEventListener("click", () => {
      if (selectedName) {
        kaverit = kaverit.filter(nimi => nimi !== selectedName);
        selectedName = null;
        renderFriends();
      }
    });
  
    function renderFriends() {
      tulostusDiv.innerHTML = "<h2>Kaverit:</h2>";
      
      const list = document.createElement("div");
      kaverit.forEach(nimi => {
        const listItem = document.createElement("p");
        listItem.textContent = nimi;
        listItem.style.cursor = "pointer";
        listItem.addEventListener("click", () => {
          selectedName = nimi;
          document.querySelectorAll("p").forEach(p => p.style.fontWeight = "normal");
          listItem.style.fontWeight = "bold";
        });
        list.appendChild(listItem);
      });
      tulostusDiv.appendChild(list);
    }
  });
  