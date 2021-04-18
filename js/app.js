//format can be changed depeding on country standard
const localFormat = 'en-EN';
const selectElement = document.getElementById('timeslots');

// Call json file
fetch("dates.json")
	.then(response => response.json())
	.then(data => {
			//Left console.log to check object has been parsed.
			console.log(data.result)


		for (let i = 0; i < data.result.length; i++) {

			//Create Start and End Dates
			const startDate = new Date(data.result[i].start);
			const endDate = new Date(data.result[i].end);


			//Can use 'full, long, medium, short' to change the time Style
			const start = new Intl.DateTimeFormat(localFormat, {
				dateStyle: 'long',
				timeStyle: 'short'
			}).format(startDate);

			const end = new Intl.DateTimeFormat(localFormat, {
				timeStyle: 'short'
			}).format(endDate);


			const formatted = `${start} - ${end}`;

			// An option element has been created
			const option = document.createElement('option');

			option.innerHTML = formatted;
			option.value = i;

			selectElement.appendChild(option);
		}

	})


//Hamburger Menu
function openNav() {
	document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}






