// Get data from DB
const getTaskData = () => {
	// Get tasks from db through electronAPI ipcHandler
	/*
		Prepare tasks into an object structure like
			[
		{ title: 'Total Tasks', count: 10, className: 'card' },
		{ title: 'Open Tasks', count: 5, className: 'card active' },
		{ title: 'In Progress Tasks', count: 3, className: 'card progress' },
		{ title: 'Closed Tasks', count: 2, className: 'card done' }
		];

		first object contains all data
		second object contains tasks that status is open
		third status is in progress
		and forth one is closed
	*/
	return tasks;
};

// Function to create a card element
const createCard = ({ title, count, className }) => {
	// Create the main card element
	const card = document.createElement('article');
	card.className = className;

	// Create and set up the card title
	const cardTitle = document.createElement('div');
	cardTitle.className = 'card-title';
	const titleElement = document.createElement('h2');
	titleElement.textContent = title;
	cardTitle.appendChild(titleElement);

	// Create and set up the card body
	const cardBody = document.createElement('div');
	cardBody.className = 'card-body';
	const countElement = document.createElement('p');
	countElement.textContent = count;
	cardBody.appendChild(countElement);

	// Append the title and body to the card
	card.appendChild(cardTitle);
	card.appendChild(cardBody);

	return card;
};

const createDashboard = () => {
	const dashboard = document.createElement('section');
	dashboard.className = 'dashboard';
	// get data through getTaskData and store in tasks variable
	// for each task create card
	// append each card into dashboard
	return dashboard;
};

export { createDashboard };
