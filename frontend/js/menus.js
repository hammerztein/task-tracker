const sidebarBtn = document.querySelector('#toggle-btn');
const sidebar = document.querySelector('#sidebar');

function toggleSubMenu(button) {
	const subMenu = button.nextElementSibling;
	subMenu.classList.toggle('show');
	button.classList.toggle('rotate');

	if (sidebar.classList.contains('close')) {
		sidebar.classList.toggle('close');
		sidebarBtn.classList.toggle('rotate');
	}
}

function toggleSidebar() {
	sidebar.classList.toggle('close');
	sidebarBtn.classList.toggle('rotate');

	const subMenu = sidebar.querySelectorAll('.show');

	subMenu.forEach((sub) => {
		sub.classList.remove('show');
		sub.previousElementSibling.classList.remove('rotate');
	});
}

export { toggleSidebar, toggleSubMenu };
