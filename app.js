

//DISPLAY THE NUMBER OF DAYS
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const numDaysInput = document.getElementById("NumDays");

endInput.addEventListener("change", () => {
  const startDate = new Date(startInput.value);
  const endDate = new Date(endInput.value);
  const diffTime = Math.abs(endDate - startDate + 1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  numDaysInput.value = diffDays;
});

//CONTACT INFO

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
      var typeOfTrip = "Trip Type: " + $('input[name="trip-type"]').val();
      //TRIP DATE
      var tripDuration = "Trip duration (days): " + $('input[name="NumDays"]').val();
      var tripStart = "Start date: " + $('input[name="trip-start"]').val();
      var tripEnd = "End date: " + $('input[name="trip-end"]').val();
      // THE CREW
      var contactsList = "";
      for (var i = 0; i < contacts.length; i++) {
        contactsList += contacts[i].crewName + " - " + contacts[i].phone + "\n" + "Emergency Contact: " + contacts[i].emergencyName + " - " + contacts[i].emergencyPhone + "\n";
      }
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
      //CALCULATE COST
      const numOfPeople = document.getElementById('num-people').value;

      const budgetInput = document.getElementById('budget').value;
      const costPerPerson = budgetInput / numOfPeople;

      const transportInputPerPerson = document.getElementById('t-cost').value;
      const transportCostPerPerson = transportInputPerPerson / numOfPeople;

      const accomodationInputPerPerson = document.getElementById('a-cost').value;
      const accomodationCostPerPerson = accomodationInputPerPerson / numOfPeople;

      const groceriesInputPerPerson = document.getElementById('g-cost').value;
      const groceriesCostPerPerson = groceriesInputPerPerson / numOfPeople;

      const drinksInputPerPerson = document.getElementById('d-cost').value;
      const drinksCostPerPerson = drinksInputPerPerson / numOfPeople;

      const entertainmentInputPerPerson = document.getElementById('a-cost').value;
      const entertainmentCostPerPerson = entertainmentInputPerPerson / numOfPeople;

      //ACCOMODATION
      var accomOpt1 = "Accomodation Option 1: " + '\n' + $('input[name="option1Name"]').val() + '\n' 
                    + $('input[name="option1Cost"]').val() + '\n' + $('input[name="option1Rooms"]').val() + '\n' + $('textarea[name="option1Features"]').val();
      var accomOpt2 = "Accomodation Option 2: " + '\n' + $('input[name="option2Name"]').val() + '\n' 
                    + $('input[name="option2Cost"]').val() + '\n' + $('input[name="option2Rooms"]').val() + '\n' + $('textarea[name="option2Features"]').val();
      var accomOpt3 = "Accomodation Option 3: " + '\n' + $('input[name="option3Name"]').val() + '\n' 
                    + $('input[name="option3Cost"]').val() + '\n' + $('input[name="option3Rooms"]').val() + '\n' + $('textarea[name="option3Features"]').val();
      //PACKING LIST
      var pl1 = "Travel documents: " + $('input[name="pl-1"]').val();
      var pl2 = "Hygiene & Medical: " + $('input[name="pl-2"]').val();
      var pl3 = "Clothing, Footwear & Beauty: " + $('input[name="pl-3"]').val();
      var pl4 = "Electronics: " + $('input[name="pl-4"]').val();
      //ITINERARY
      var dayOne = "Day One:" + $('input[name="first-day"]').val(); 
      var dayTwo = "Day Two:" + $('input[name="second-day"]').val(); 
      var dayThree = "Day Three:" + $('input[name="third-day"]').val(); 
      var dayFour = "Day Four:" + $('input[name="fourth-day"]').val(); 
      var dayFive = "Day Five:" + $('input[name="fifth-day"]').val(); 
      var daySix = "Day Six:" + $('input[name="sixth-day"]').val(); 
      var daySeven = "Day Seven:" + $('input[name="seventh-day"]').val(); 

      //PAGE TITLE
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(pageTitle, 100, 20, { align: "center" });
      doc.setTextColor('#d55b3e')
      doc.setFont("Dancing Script", "cursive");
      doc.setFontSize(30);
      doc.text(tripName, 100, 40, { align: "center" });

      //SECTION TITLES
      doc.setFontSize(18);
      doc.setTextColor('#008b81');
      doc.text("TRIP INFO", 20, 50);
      doc.setTextColor('#d55b3e')
      doc.text("TRIP DURATION", 20, 90);
      doc.setTextColor('#008b81');
      doc.text("TRANSPORT", 20, 130);
      doc.setTextColor('#d55b3e')
      doc.text("ACCOMMODATION", 20, 190);
      
      doc.setFontSize(14);
      doc.setFont("Dancing Script", "cursive");
      doc.setTextColor(0, 0, 0); 
      //TRIP INFO
      doc.text(tripDestination, 30, 60);
      doc.text(numPeople, 30, 70);
      doc.text(typeOfTrip, 30, 80);
      //TRIP DURATION
      doc.text(tripDuration, 30, 100);
      doc.text(tripStart,30, 110);
      doc.text(tripEnd, 30, 120);  
      //TRANSPORT
      doc.text(transportGoing, 30, 140);
      doc.text(transportBooked, 30, 150);
      doc.text(transportReturn, 30, 160);
      doc.text(returnBooked, 30, 170);
      //ACCOM
      doc.text(accomOpt1, 30, 200);
      doc.text(accomOpt2, 100, 200);
      doc.text(accomOpt3, 170, 200);
      
      // new page
      doc.addPage();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(pageTitle, 100, 20, { align: "center" });
      //SECTION TITLES
      doc.setFontSize(18);
      doc.setTextColor('#008b81');
      doc.text("BUDGET", 20, 30);
      doc.setTextColor('#d55b3e');
      doc.text("ITINERARY", 20, 110);
      doc.setTextColor('#008b81');
      doc.text("PACKING LIST", 20, 200);
      
      doc.setFontSize(14);
      doc.setFont("Dancing Script", "cursive");
      doc.setTextColor(0, 0, 0); 
      //BUDGET
      doc.text(budget, 30, 40);
      doc.text(transportCost, 30, 50);
      doc.text(accomodationCost, 30, 60);
      doc.text(groceriesCost, 30, 70);
      doc.text(drinksCost, 30, 80);
      doc.text(entertainmentCost, 30, 90);
      doc.text(`per person Ksh: ${costPerPerson}`, 100, 40);
      doc.text(`per person Ksh: ${transportCostPerPerson}`, 100, 50);
      doc.text(`per person Ksh: ${accomodationCostPerPerson}`, 100, 60);
      doc.text(`per person Ksh: ${groceriesCostPerPerson}`, 100, 70);
      doc.text(`per person Ksh: ${drinksCostPerPerson}`, 100, 80);
      doc.text(`per person Ksh: ${entertainmentCostPerPerson}`, 100, 90);
    
      //ITINERARY
      doc.text(dayOne, 30, 120);
      doc.text(dayTwo, 30, 130);
      doc.text(dayThree, 30, 140);
      doc.text(dayFour, 30, 150);
      doc.text(dayFive, 30, 160);
      doc.text(daySix, 30, 170);
      doc.text(daySeven, 30, 180);
      
      //PACKING  LIST
      doc.text(pl1, 30, 210);
      doc.text(pl2, 30, 220);
      doc.text(pl3 , 30, 230);
      doc.text(pl4 , 30, 240);

      // new page
      doc.addPage();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(pageTitle, 100, 20, { align: "center" });
      doc.setFontSize(18);
      doc.setTextColor('#d55b3e')
      doc.text("CONTACT INFORMATION", 20, 40);


      doc.setFontSize(14);
      doc.setFont("Dancing Script", "cursive");
      doc.setTextColor(0, 0, 0); 
      //CONTACT LIST
      doc.text(contactsList, 30, 50);

      doc.setFontSize(20);
      doc.setTextColor(128, 128, 128);
      doc.text("Remember to book on time!", 100, 200, { align: "center" });
      doc.save("outOfTheGroupChat.pdf");
      
  });