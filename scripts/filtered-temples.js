document.addEventListener("DOMContentLoaded", function () {
  // Toggle Navigation Menu
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuToggle.innerHTML = navMenu.classList.contains("active") ? "&#10006;" : "&#9776;";
  });

  // Footer date updates
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

  // Temple Data Array
  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Bern Switzerland Temple",
          location: "Tempelstrasse 2 CH-3052 Zollikofen Switzerland",
          dedicated: "1955, September, 11",
          area: 35546,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
      },
      {
          templeName: "Montreal Quebec Temple",
          location: "1450 Blvd Marie-Victorin Longueuil, Quebec, Canada",
          dedicated: "2000, June, 4",
          area: 11550,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
      },
      {
          templeName: "Nauvoo Illinois Temple",
          location: "50 N Wells St Nauvoo, Illinois, United States",
          dedicated: "2002, June, 27",
          area: 54000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
      }
  ];

  // Function to display temples
  function displayTemples(templesList = temples) {
      const templeContainer = document.getElementById("temple-container");
      templeContainer.innerHTML = ""; // Clear previous content

      templesList.forEach(temple => {
          const card = document.createElement("div");
          card.classList.add("temple-card");

          card.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <h2>${temple.templeName}</h2>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
          `;
          templeContainer.appendChild(card);
      });
  }

  // Function to filter temples
  function filterTemples(category) {
      let filtered = temples;
      if (category === "Old") {
          filtered = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1950);
      } else if (category === "New") {
          filtered = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) >= 2000);
      } else if (category === "Large") {
          filtered = temples.filter(temple => temple.area > 50000);
      } else if (category === "Small") {
          filtered = temples.filter(temple => temple.area <= 50000);
      }
      displayTemples(filtered); // Display filtered list
  }

  // Event listeners for menu filters
  document.querySelectorAll(".menu-link a").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const category = this.textContent;
          filterTemples(category);
      });
  });

  // Display all temples on initial load
  displayTemples();
});
