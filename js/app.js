const loadPhones = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
  <div class="card">
  <img src="${phone.image}" class="card-img-top rounded " alt="..." />
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">
      This is a longer card with supporting text below as a natural
      lead-in to additional content. This content is a little bit
      longer.
    </p>
  </div>
</div>
  `;

    phoneContainer.appendChild(phoneDiv);
  });
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
