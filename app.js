//BACKGROUND CHANGE WITH USER THEME INPUT
const tripTypeSelect = document.getElementById("trip-type");

tripTypeSelect.addEventListener("change", function() {
  const tripType = tripTypeSelect.value;
  
  if (tripType === "beach") {
    document.body.style.backgroundImage = "url('')";
    document.body.style.color = "#000000";
  } else if (tripType === "nature") {
    document.body.style.backgroundImage = "url('')"
  } else if (tripType === "adventure") {
    document.body.style.backgroundImage = "url('')"
  } else if (tripType === "city") {
    document.body.style.backgroundImage = "url('')"
  } else if (tripType === "family") {
    document.body.style.backgroundImage = "url('')"
  } else if (tripType === "romantic") {
    document.body.style.backgroundImage = "url('')"
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  }
});

//DISPLAY THE NUMBER OF DAYS
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const numDaysInput = document.getElementById("NumDays");

endInput.addEventListener("change", () => {
  const startDate = new Date(startInput.value);
  const endDate = new Date(endInput.value);
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  numDaysInput.value = diffDays;
});

//THE CREW

const contacts = [];

const addContactButton = document.getElementById("add-contact-btn");
addContactButton.addEventListener("click", function(event) {
  event.preventDefault();

  const crewName = document.getElementById("crew-name").value;
  const phone = document.getElementById("phone").value;
  const emergencyName = document.getElementById("emergency-name").value;
  const emergencyPhone = document.getElementById("emergency-phone").value;

  const newContact = {
    crewName: crewName,
    phone: phone,
    emergencyName: emergencyName,
    emergencyPhone: emergencyPhone
  };

  contacts.push(newContact);

  const contactList = document.getElementById("contact-list");
  const listItems = contacts.map(contact => `<li>${contact.crewName} - ${contact.phone} - ${contact.emergencyName} - ${contact.emergencyPhone}</li>`).join("");
  contactList.innerHTML = listItems;

  document.getElementById("crew-name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("emergency-name").value = "";
  document.getElementById("emergency-phone").value = "";
});

//TRANSPORT OPTIONS
const goingButtons = document.querySelectorAll('.transport-button');

goingButtons.forEach(button => {
  button.addEventListener('click', () => {
    goingButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
const returnButtons = document.querySelectorAll('.transport-button-1');

returnButtons.forEach(button => {
  button.addEventListener('click', () => {
    returnButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


var button = document.getElementById("generate-pdf");
  button.addEventListener("click", function () {
      var doc = new jsPDF("p", "mm", [300, 300]);
      //PAGE TITLE
      var pageTitle = document.querySelector("#page-title h3").textContent;
      //TRIP INFO
      var tripName =  $('input[name="trip-name"]').val();
      var tripDestination = "Destination: " + $('input[name="destination"]').val();
      var numPeople = "Number of people: " + $('input[name="num-people"]').val();
      var typeOfTrip = "Type of trip " + $('input[name="trip-type"]').val();
      //TRIP DATE
      var tripDuration = "Trip duration (days): " + $('input[name="NumDays"]').val();
      var tripStart = "Start date: " + $('input[name="trip-start"]').val();
      var tripEnd = "End date: " + $('input[name="trip-end"]').val();
      // THE CREW
      var contactsList = "";
      for (var i = 0; i < contacts.length; i++) {
        contactsList += contacts[i].crewName + " - " + contacts[i].phone + " - " + contacts[i].emergencyName + " - " + contacts[i].emergencyEmail + " - " + contacts[i].emergencyPhone + "\n";
      }
      var crewTitle = "The Crew:";
      //TRANSPORT
      //PAGE TITLE
      doc.text(pageTitle, 20, 20);
      //TRIP INFO
      doc.text(tripName, 20, 30);
      doc.text(tripDestination, 20, 40);
      doc.text(numPeople, 20, 50);
      doc.text(typeOfTrip, 20, 60)
      //TRIP DURATION
      doc.text(tripDuration, 20, 70);
      doc.text(tripStart, 20, 80)
      doc.text(tripEnd, 20, 90)
      //THE CREW
      doc.text(crewTitle, 20, 110);
      doc.text(contactsList, 20, 120);
      //TRANSPORT
      doc.save("outOfTheGroupChat.pdf");
      
  });