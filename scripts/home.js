// Function to update footer with current year and last modified date

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
  
  // HOME PAGE SCRIPT
  if (window.location.pathname === '/home.html') {
  
    // Function to change hero content based on localStorage (if available)
    function updateHeroContent() {
      const heroHeading = document.querySelector('.hero h1');
      const heroDescription = document.querySelector('.hero p');
      
      const savedContent = localStorage.getItem('heroContent');
      if (savedContent) {
        const content = JSON.parse(savedContent);
        heroHeading.textContent = content.heading;
        heroDescription.textContent = content.description;
      } else {
        heroHeading.textContent = "🥐 Welcome to Cozy Coner Café!";
        heroDescription.textContent = "Your Neighborhood Gathering Spot Where Every Cup Feels Like Home";
      }
    }
  
    // Function to save new hero content to localStorage
    function saveHeroContent() {
      const heroHeading = document.querySelector('.hero h1').textContent;
      const heroDescription = document.querySelector('.hero p').textContent;
      const heroContent = {
        heading: heroHeading,
        description: heroDescription
      };
      localStorage.setItem('heroContent', JSON.stringify(heroContent));
    }
  
    // Event listener for saving new hero content
    document.getElementById('saveHeroBtn').addEventListener('click', () => {
      saveHeroContent();
      alert('Hero content saved!');
    });
  
    // Function to toggle class on a menu item when clicked
    function toggleHighlightMenu() {
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('highlight');
        });
      });
    }
  
    // Function to check if there's a saved theme in localStorage
    function checkTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    }
  
    // Event listener to toggle theme
    document.getElementById('toggleThemeBtn').addEventListener('click', () => {
      const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', newTheme);
    });
  
    
    updateHeroContent();
    toggleHighlightMenu();
    checkTheme();
  }
  
  // ABOUT PAGE SCRIPT
  if (window.location.pathname === '/about.html') {
  
    // Array to hold team members (object-based)
    const teamMembers = [
      { name: 'Juliet', position: 'Head of Staff', imgSrc: 'images/Headofstaff.jpeg' },
      { name: 'Roland', position: 'Manager', imgSrc: 'images/manager.webp' },
      { name: 'The Team', position: 'Staff at Work', imgSrc: 'images/staffatwork.webp' }
    ];
  
    // Function to display team members dynamically using DOM manipulation
    function displayTeamMembers() {
      const teamSection = document.querySelector('.team-grid');
      teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');
        memberDiv.innerHTML = `
          <img src="${member.imgSrc}" alt="${member.name}">
          <p><strong>${member.name}</strong> - ${member.position}</p>
        `;
        teamSection.appendChild(memberDiv);
      });
    }
  
    // Event listener to dynamically add a new team member to the array
    document.getElementById('addTeamMemberBtn').addEventListener('click', () => {
      const newName = prompt('Enter team member name:');
      const newPosition = prompt('Enter team member position:');
      const newImgSrc = prompt('Enter team member image source:');
      
      // Add new member using array method and conditional branching
      if (newName && newPosition && newImgSrc) {
        teamMembers.push({ name: newName, position: newPosition, imgSrc: newImgSrc });
        localStorage.setItem('teamMembers', JSON.stringify(teamMembers)); // Save to localStorage
        alert('New team member added!');
        location.reload(); // Reload to update team section
      }
    });
  
    // Function to load saved team members from localStorage (if available)
    function loadSavedTeamMembers() {
      const savedMembers = localStorage.getItem('teamMembers');
      if (savedMembers) {
        teamMembers.splice(0, teamMembers.length, ...JSON.parse(savedMembers));
      }
    }
  
    
    loadSavedTeamMembers();
    displayTeamMembers();
  }
  
  // MENU PAGE SCRIPT
  if (window.location.pathname === '/menu.html') {
        // Menu items stored in an object
const menuItems = {
    coffee: ['Americano', 'Cappuccino', 'Latte', 'Mocha'],
    tea: ['Chai Latte', 'Matcha', 'Iced Tea', 'Herbal Infusions'],
    pastries: ['Croissants', 'Muffins', 'Banana Bread', 'Cinnamon Rolls'],
    breakfast: ['Avocado Toast', 'Bagel Sandwich', 'Yogurt Bowl', 'Scrambled Eggs']
};

// Dynamically generate the menu content

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();  // Prevent default form submission

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const order = document.getElementById('order').value;
    const feedback = document.getElementById('feedback').value;

    // Store the order and feedback in localStorage
    const orderDetails = {
        fullname,
        email,
        order,
        feedback,
        timestamp: new Date().toLocaleString()
    };
    
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Your order has been placed! Thank you for your feedback.');

    // Reset form after submission
    event.target.reset();
}

// Display stored orders from localStorage (for admin or user view)
function displayStoredOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersList = document.getElementById('ordersList');
    ordersList.innerHTML = '';

    if (orders.length === 0) {
        ordersList.innerHTML = '<p>No orders placed yet.</p>';
    } else {
        orders.forEach(order => {
            let orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <p><strong>Name:</strong> ${order.fullname}</p>
                <p><strong>Order:</strong> ${order.order}</p>
                <p><strong>Feedback:</strong> ${order.feedback || 'No feedback given'}</p>
                <p><small>Placed on: ${order.timestamp}</small></p>
            `;
            ordersList.appendChild(orderItem);
        });
    }
}

// Event listener for form submission
const orderForm = document.querySelector('.order-form form');
orderForm.addEventListener('submit', handleFormSubmit);

// Display menu and stored orders when the page loads
window.addEventListener('load', () => {
   
    displayStoredOrders();
});

  }


  
  // CONTACT PAGE SCRIPT
  if (window.location.pathname === '/contact.html') {
  
    // Function to handle the contact form submission
    function handleFormSubmission(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        // Save the form data to localStorage
        const formData = {
          name: name,
          email: email,
          message: message
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
  
        // Display a thank-you message
        alert(`Thank you for your message, ${name}! We will get back to you soon.`);

        // Optionally, reset the form after submission
        document.querySelector('.contact-form').reset();
      } else {
        alert('Please fill out all fields before submitting.');
      }
    }
  
    // Attach event listener to the form
    document.querySelector('.contact-form').addEventListener('submit', handleFormSubmission);
  
   
  }
  