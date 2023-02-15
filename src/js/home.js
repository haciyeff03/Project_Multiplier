const Tab = document.querySelectorAll(".tab");
const Tabcont = document.querySelectorAll(".tab-cont");

for (let j = 0; j < Tab.length; j++) {
  Tab[j].addEventListener("click", () => {
    console.log("salam");
    for (let k = 0; k < Tab.length; k++) {
      if (k != j && Tab[k].classList.contains("active-tab")) {
        Tab[k].classList.remove("active-tab");
        Tabcont[k].classList.remove("active-tabcont");
      }
    }
    Tab[j].classList.add("active-tab");
    Tabcont[j].classList.add("active-tabcont");
  });
}
