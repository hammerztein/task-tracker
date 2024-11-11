console.log('Renderer Attached');

import { toggleSidebar, toggleSubMenu } from './menus.js';
import { createDashboard } from './dashboard.js';

(() => {
	const container = document.querySelector('.container');
	const dropdownBtns = document.querySelectorAll('.dropdown-btn');
	const sidebarBtn = document.querySelector('#toggle-btn');
	const navBtns = document.querySelectorAll('#sidebar button[data-target');

	const cleanContainer = () => {
		if (container.children.length > 0) {
			container.innerHTML = '';
		}
	};

	const attachEventHandlers = () => {
		dropdownBtns.forEach((btn) =>
			btn.addEventListener('click', () => {
				toggleSubMenu(btn);
			}),
		);

		sidebarBtn.addEventListener('click', toggleSidebar);
	};

	attachEventHandlers();
})();
