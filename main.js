let pictures = ['']

let employee_wrapper = document.getElementById('employee_wrapper');

customers.results.map((database) => {
	let employee_profile = document.createElement('li');
	employee_profile.setAttribute('class', 'employee_profile')
	employee_wrapper.appendChild(employee_profile);

	// template literal
	content = `
		<img src="${database.picture.large}"/>
		<h3 class="fullname">${database.name.first} ${database.name.last}</h3>
		<h3 class="email">${database.email}</h3>
		<p class="address">${database.location.street}</p>
		<p class="address">${database.location.city}, ${database.location.state} ${database.location.postcode}</p>
		<p>${database.phone}</p>
		<p class="ssn">${database.id.value}</p>
	`
	employee_profile.innerHTML = content;
})









