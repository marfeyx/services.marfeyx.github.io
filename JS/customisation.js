(function () {
	const packageCards = Array.from(document.querySelectorAll('[data-package-id]'));
	const addonCards = Array.from(document.querySelectorAll('[data-addon-id]'));
	const pageInput = document.getElementById('page-count');

	const selectedPackageLabel = document.getElementById('selected-package');
	const selectedPackageInput = document.getElementById('selected-package-input');

	const selectedAddonsList = document.getElementById('selected-addons');
	const selectedAddonsInput = document.getElementById('selected-addons-input');

	const pageCountInput = document.getElementById('page-count-input');
	const estimatedTotalInput = document.getElementById('estimated-total-input');

	const totalPriceEl = document.getElementById('total-price');
	const addonWarning = document.getElementById('addon-warning');

	const form = document.querySelector('.checkout-form');
	const formStatus = document.getElementById('form-status');

	const pageBreakdownEl = document.getElementById('page-breakdown');
	const pagesError = document.getElementById('pages-error');

	let selectedPackage = null;
	const selectedAddons = new Map();

	const PER_PAGE_PRICE = 75;

	const formatPrice = (value) => {
		const rounded = Number(value || 0).toFixed(2);
		return `${rounded} CHF`;
	};

	const setPagesError = (msg) => {
		if (!pagesError) return;
		pagesError.textContent = msg || '';
		pagesError.classList.toggle('error', Boolean(msg));
	};

	const hidePageBreakdown = () => {
		if (!pageBreakdownEl) return;
		pageBreakdownEl.style.display = 'none';
		pageBreakdownEl.textContent = '';
	};

	const showPageBreakdown = (pages, pageTotal) => {
		if (!pageBreakdownEl) return;
		pageBreakdownEl.style.display = '';
		pageBreakdownEl.textContent = `${pages} Page${pages > 1 ? 's' : ''} (${formatPrice(pageTotal)})`;
	};

	const addonsTotal = () => {
		let sum = 0;
		selectedAddons.forEach((a) => (sum += a.price));
		return sum;
	};

	const renderAddons = () => {
		selectedAddonsList.innerHTML = '';

		if (!selectedAddons.size) {
			const li = document.createElement('li');
			li.textContent = 'No add-ons selected';
			li.dataset.i18n = 'custom.checkout.noAddons';
			selectedAddonsList.appendChild(li);
			selectedAddonsInput.value = '';
			return;
		}

		const names = [];
		selectedAddons.forEach((addon) => {
			const li = document.createElement('li');
			li.textContent = `${addon.name} (${formatPrice(addon.price)})`;
			selectedAddonsList.appendChild(li);
			names.push(addon.name);
		});

		selectedAddonsInput.value = names.join(', ');
	};

	const getPagesValidation = () => {
		const raw = (pageInput?.value || '').trim();

		if (raw === '') {
			return { state: 'empty', pages: null, error: '' };
		}

		const pages = parseInt(raw, 10);

		if (!Number.isFinite(pages)) {
			return { state: 'invalid', pages: null, error: 'Please enter a valid number.' };
		}
		if (pages <= 0) {
			return { state: 'invalid', pages, error: 'Pages must be at least 1.' };
		}
		if (pages > 20) {
			return { state: 'invalid', pages, error: 'Max 20 pages allowed.' };
		}

		return { state: 'valid', pages, error: '' };
	};

	const updateTotals = () => {
		const { state, pages, error } = getPagesValidation();

		addonWarning.textContent = Number.isFinite(pages) && pages > 8 ? 'Addons not available with 9+ Pages' : '';

		pageCountInput.value = Number.isFinite(pages) ? pages : '';


		const addOnSum = addonsTotal();
		const base = selectedPackage ? selectedPackage.basePrice : 0;

		// Always reflect the chosen package immediately, even before page count is set
		if (selectedPackage) {
			selectedPackageLabel.textContent = `${selectedPackage.name} (${formatPrice(base)})`;
			selectedPackageInput.value = selectedPackage.name;
		} else {
			selectedPackageLabel.textContent = 'Select a package to continue';
			selectedPackageInput.value = '';
			hidePageBreakdown();
		}

		const partialTotal = base + addOnSum;

		if (state === 'empty') {
			setPagesError('');
			hidePageBreakdown();

			totalPriceEl.textContent = (selectedPackage || addOnSum > 0) ? formatPrice(partialTotal) : '0 CHF';
			estimatedTotalInput.value = '';
			return;
		}

		if (state === 'invalid') {
			setPagesError(error);
			hidePageBreakdown();

			totalPriceEl.textContent = (selectedPackage || addOnSum > 0) ? formatPrice(partialTotal) : '0 CHF';
			estimatedTotalInput.value = '';
			return;
		}

		setPagesError('');

		let total = partialTotal;

		if (selectedPackage) {
			const pageTotal = pages * PER_PAGE_PRICE;
			total += pageTotal;
			showPageBreakdown(pages, pageTotal);
		} else {
			hidePageBreakdown();
		}

		estimatedTotalInput.value = selectedPackage ? Number(total).toFixed(2) : '';
		totalPriceEl.textContent = (selectedPackage || addOnSum > 0) ? formatPrice(total) : '0 CHF';
	};

	const handlePackageSelect = (card) => {
		packageCards.forEach((pkg) => pkg.classList.remove('active'));
		card.classList.add('active');

		selectedPackage = {
			id: card.dataset.packageId,
			name: card.dataset.packageName,
			basePrice: Number(card.dataset.basePrice || 0),
		};

		formStatus.textContent = '';
		updateTotals();
	};

	const handleAddonToggle = (card) => {
		const id = card.dataset.addonId;
		const name = card.dataset.addonName;
		const price = Number(card.dataset.addonPrice || 0);

		if (selectedAddons.has(id)) {
			selectedAddons.delete(id);
			card.classList.remove('active');
		} else {
			selectedAddons.set(id, { id, name, price });
			card.classList.add('active');
		}

		renderAddons();
		updateTotals();
	};

	const attachInteractive = (elements, handler) => {
		elements.forEach((el) => {
			el.addEventListener('click', () => handler(el));
			el.addEventListener('keydown', (event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					handler(el);
				}
			});
		});
	};

	attachInteractive(packageCards, handlePackageSelect);
	attachInteractive(addonCards, handleAddonToggle);
	pageInput?.addEventListener('input', updateTotals);

	form?.addEventListener('submit', (event) => {
		if (!selectedPackage) {
			event.preventDefault();
			formStatus.textContent = 'Please choose a package before creating the request.';
			return;
		}

		const { state, pages } = getPagesValidation();
		if (state !== 'valid' || !Number.isFinite(pages)) {
			event.preventDefault();
			formStatus.textContent = 'Please enter a valid page count (1–20).';
			return;
		}

		formStatus.textContent = 'Creating your request…';
	});

	renderAddons();
	updateTotals();
})();
