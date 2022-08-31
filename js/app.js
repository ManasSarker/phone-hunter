const loadPhones = async (search) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  console.log("Phones are here", phones);

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ``;

  const noPhone = document.getElementById("no-found-alert");

  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else if (phones.length > 10) {
    phones = phones.slice(0, 10);
    const showAll = document.getElementById("show-all");
    showAll.classList.remove("d-none");
  }

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

//loadPhones();

/*  Searching Function  */

document.getElementById("btn-search").addEventListener("click", function () {
  const searchFiled = document.getElementById("search-field");

  const searchText = searchFiled.value;

  loadPhones(searchText);
});
