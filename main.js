let employee_wrapper = document.getElementById('employee_wrapper');


customers.results.map((database) => {
	let employee_profile = document.createElement('li');
	employee_profile.setAttribute('class', 'employee_profile')
	employee_wrapper.appendChild(employee_profile);

	// template literal
	content = `
		<h3 class="fullname">${database.name.first} ${database.name.last}</h3>
		<h3 class="email">${database.email}</h3>
		<p>${database.location.street}</p>
		<p>${database.location.city}, ${database.location.state} ${database.location.postcode}</p>
		<p>${database.phone}</p>
		<p>${database.id.value}</p>
	`
	employee_profile.innerHTML = content;
})









