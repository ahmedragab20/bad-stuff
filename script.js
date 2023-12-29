addEventListener("DOMContentLoaded", (e) => {
  const d1 = document.querySelector("#d1");
  const d2 = document.querySelector("#d2");
  const drop_zone = document.querySelector("#drop_zone");

  let ondragEl = null;

  d1.addEventListener("dragstart", (e) => {
    console.log("Dargstart 🔥");
    console.log(e);
    ondragEl = e.target;
  });

  d1.addEventListener("dragend", (e) => {
    console.log("Dargend ✅");
    ondragEl = null;
    console.log(ondragEl);
  });

  drop_zone.addEventListener("dragenter", (event) => {
    console.log("Dargenter 🛬");

    event.currentTarget.style.scale = "1.05";

    event.preventDefault();
  });

  drop_zone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    console.log("Dargleave 👋🏻");

    event.currentTarget.style.removeProperty("scale");
  });

  drop_zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("dragover 🦉");
  });

  drop_zone.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log("Dropped 🫳🏻");
    console.log(event);

    if (ondragEl) {
      event.target.appendChild(ondragEl);
    }
  });
});
