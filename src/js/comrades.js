const comradeButtons = document.querySelectorAll(".comrade-button");

for (i = 0; i < comradeButtons.length; i++) {
  let button = comradeButtons[i];

  button.addEventListener("click", () => {
    let linksWrapper = button.lastElementChild;
    if (button.getAttribute("data-status") === "closed") {
      button.setAttribute("data-status", "open");
      linksWrapper.setAttribute("data-status", "open");
      let links = button.lastElementChild.children;
      let totalWidth = 120 + links.length * 110;
      for (i = 0; i < links.length; i++) {
        let link = links[i];

        link.style.zIndex = "1000";
        setTimeout(function () {
          link.setAttribute("data-status", "active");
        }, 800);

        links[i].style.left = ((i + 1) / (links.length + 1)) * 100 + "%";
      }

      linksWrapper.style.width = totalWidth + "px";
    } else {
      button.setAttribute("data-status", "closed");
      linksWrapper.style.width = 0;
      linksWrapper.setAttribute("data-status", "closed");
      let links = button.lastElementChild.children;
      for (i = 0; i < links.length; i++) {
        let link = links[i];

        link.style.zIndex = "-1";
        link.setAttribute("data-status", "inactive");
      }
    }
  });
}
