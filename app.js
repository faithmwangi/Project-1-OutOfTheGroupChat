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




//GENERATE PDF
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
      //TRANSPORTATION BOOKING
      var transportGoing = "Going by: " + $('input[name="transport"]:checked').val();
      var transportBooked = "Booked: " + $("#bGoing").val();
      var transportReturn = "Returning by: " + $('input[name="transport-2"]:checked').val();
      var returnBooked = "Booked: " + $("#bReturn").val();
      //BUDGET
      var budget = "Trip Budget: Ksh " + $('input[name="budget"]').val();
      var transportCost = "Transport: Ksh " + $('input[name="t-cost"]').val();
      var accomodationCost = "Accomodation: Ksh " + $('input[name="a-cost"]').val();
      var groceriesCost = "Groceries: Ksh " + $('input[name="g-cost"]').val();
      var drinksCost = "Drinks: Ksh " + $('input[name="d-cost"]').val();
      var entertainmentCost = "Entertainment: Ksh " + $('input[name="e-cost"]').val();
      //PACKING LIST
      var travelDocuments = "Travel Documents:" + $('input[name="pl-1"]').val();
      var hygienceMedical = "Hygiene & Medical:" + $('input[name="pl-2"]').val();
      var clothingShoesBeauty = "Clothing, Footwear & Beauty:" + $('input[name="pl-2"]').val();
      var electronics = "Electronics:" + $('input[name="pl-3"]').val();
      //ITINERARY
      var eatingSpots = "Eating Spots:" + $('input[name="eating"]').val(); //add reminder to reserve
      var siteSeeing = "Site-seeing:" + $('input[name="site-seeing"]').val();
      var tripActivities = "Activities:" + $('input[name="activities"]').val();
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
      doc.text(transportGoing, 20, 140);
      doc.text(transportBooked, 20, 150)
      doc.text(transportReturn, 20, 160);
      doc.text(returnBooked, 20, 170)
      //BUDGET
      doc.text(budget, 20, 190)
      doc.text(transportCost, 20, 200)
      doc.text(accomodationCost, 20, 210)
      doc.text(groceriesCost, 20, 220)
      doc.text(drinksCost, 20, 230)
      doc.text(entertainmentCost, 20, 240)
      // new page
      doc.addPage();
      //PACKING LIST
      doc.text(travelDocuments, 20, 30)
      doc.text(hygienceMedical, 20, 40)
      doc.text(clothingShoesBeauty, 20, 50)
      doc.text(electronics, 20, 60)
      //ITINERARY
      doc.text(eatingSpots, 20, 80)
      doc.text(siteSeeing, 20, 90)
      doc.text(tripActivities, 20, 100)

      
      doc.save("outOfTheGroupChat.pdf");
      
  });