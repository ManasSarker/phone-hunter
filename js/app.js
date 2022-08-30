const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  const phoneCOntainer = document.getElementById("phone-container");
};

loadPhones();
// const displayPhones = (phones, dataLimit) => {
//   const phonesContainer = document.getElementById("phones-container");
//   phonesContainer.textContent = "";
//   // display 10 phones only
//   const showAll = document.getElementById("show-all");
//   if (dataLimit && phones.length > 10) {
//     phones = phones.slice(0, 10);
//     showAll.classList.remove("d-none");
//   } else {
//     showAll.classList.add("d-none");
//   }
// };
