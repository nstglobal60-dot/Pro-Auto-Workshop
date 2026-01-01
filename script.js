const services = [
  { name: "Engine Repair", description: "Full engine diagnostics and repair for all car models.", image: "images/Engine Repair.jpeg" },
  { name: "Oil Change", description: "Fast and reliable oil change services to keep your engine smooth.", image: "images/Oil Change.jpeg" },
  { name: "Brake Service", description: "Brake inspection, repair, and replacement.", image: "images/Brake Service.jpeg" },
  { name: "Tire Service", description: "Tire replacement, rotation, and alignment services.", image: "images/Tire Service.jpeg" },
  { name: "Battery Replacement", description: "High-quality battery replacement and check-ups.", image: "images/Battery Replacement.jpeg" },
  { name: "AC Repair", description: "Keep your car cool with professional air conditioning service.", image: "images/AC Repair.jpeg" }
  
];

const serviceList = document.getElementById("serviceList");

function displayServices() {
  services.forEach(service => {
    serviceList.innerHTML += `
      <div class="service">
        <img src="${service.image}" alt="${service.name}">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      </div>
    `;
  });
}

displayServices();

// Appointment form handling
const form = document.getElementById("appointmentForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const car = document.getElementById("car").value;
  const date = document.getElementById("date").value;

  message.innerText = `Thank you ${name}! Your appointment for ${car} on ${date} has been booked.`;
  form.reset();
});
