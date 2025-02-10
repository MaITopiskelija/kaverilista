document.addEventListener("DOMContentLoaded", () => {
  let kaverit = [];
  const max_names = 10;
  const nameInput = document.getElementById("nameInput");
  const addButton = document.getElementById("addButton");
  const tulostusDiv = document.getElementById("tulostus");

  addButton.addEventListener("click", () => {
    if (kaverit.length >= max_names) {
      alert("Voit lisätä enintään " + max_names + " nimeä.");
      return;
    }
    
    const nimi = nameInput.value.trim();
    if (nimi !== "") {
      kaverit.push(nimi);
      nameInput.value = "";
      renderFriends();
    }
  });


  function renderFriends() {
    tulostusDiv.innerHTML = "" + kaverit.join("<br>") + "</p>";
  }
});
