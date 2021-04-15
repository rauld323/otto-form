const localFormat = 'en-EN'; //format can be changed depeding on country standard
const selectElement = document.getElementById('timeslots');



fetch("dates.json")
	.then(response => response.json())
	.then(data => {
			//Left console.log to check object has been parsed.
			console.log(data.result)


		for (let i = 0; i < data.result.length; i++) {

			const startDate = new Date(data.result[i].start);
			const endDate = new Date(data.result[i].end);

			const start = new Intl.DateTimeFormat(localFormat, {
				dateStyle: 'long',
				timeStyle: 'short'
			}).format(startDate);

			const end = new Intl.DateTimeFormat(localFormat, {
				timeStyle: 'short'
			}).format(endDate);

			const formatted = `${start} - ${end}`;

			const opt = document.createElement('option');

			opt.innerHTML = formatted;
			opt.value = i;

			selectElement.appendChild(opt);
		}


	})










