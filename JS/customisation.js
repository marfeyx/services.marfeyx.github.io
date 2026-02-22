(function () {
	if (document.body?.getAttribute('data-page') !== 'customisation') return;
	const t = (key, fallback) => (window.t ? window.t(key, fallback) : (fallback || ''));

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

	const formatMoney = (value) => {
		const num = Number(value || 0);
		const fixed = num.toFixed(2);
		return `${fixed.replace(/\.00$/, '')} CHF`;
	};

	packageCards.forEach((card) => {
		const base = Number(card.dataset.basePrice || 0);
		const perPage = Number(card.dataset.pagePrice || 0);
		const priceLabel = card.querySelector('.price');
		if (priceLabel) {
			priceLabel.textContent = `${formatMoney(base)} + ${formatMoney(perPage)} ${t('unit.perPage', '/ Page')}`;
		}
	});

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
		pageBreakdownEl.textContent = `${pages} ${pages > 1 ? t('unit.pages','Pages') : t('unit.page','Page')} (${formatPrice(pageTotal)})`;
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
			li.textContent = t('custom.checkout.noAddons', 'No add-ons selected');
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
			return { state: 'invalid', pages: null, error: t('custom.error.pages.nan', 'Please enter a valid number.') };
		}
		if (pages <= 0) {
			return { state: 'invalid', pages, error: t('custom.error.pages.min', 'Pages must be at least 1.') };
		}
		if (pages > 20) {
			return { state: 'invalid', pages, error: t('custom.error.pages.max', 'Max 20 pages allowed.') };
		}

		return { state: 'valid', pages, error: '' };
	};

	const updateTotals = () => {
		const { state, pages, error } = getPagesValidation();

		if (addonWarning) addonWarning.textContent = Number.isFinite(pages) && pages > 8 ? t('custom.warn.addonsUnavailable', 'Add-ons are not available with 9+ pages.') : '';

		pageCountInput.value = Number.isFinite(pages) ? pages : '';

		const addOnSum = addonsTotal();
		const base = selectedPackage ? selectedPackage.basePrice : 0;

		if (selectedPackage) {
			selectedPackageLabel.textContent = `${selectedPackage.name} (${formatPrice(base)})`;
			selectedPackageInput.value = selectedPackage.name;
		} else {
			selectedPackageLabel.textContent = t('custom.checkout.packageFallback', 'Select a package to continue');
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
			const perPage = Number(selectedPackage.pagePrice || 0);
			const pageTotal = pages * perPage;
			total += pageTotal;
			showPageBreakdown(pages, pageTotal);
		} else {
			hidePageBreakdown();
		}

		estimatedTotalInput.value = selectedPackage ? Number(total).toFixed(2) : '';
		totalPriceEl.textContent = (selectedPackage || addOnSum > 0) ? formatPrice(total) : '0 CHF';
	};

	const setActiveCard = (cards, activeCard) => {
		cards.forEach((c) => c.classList.toggle('active', c === activeCard));
	};

	const selectPackage = (card) => {
		selectedPackage = {
			id: card.dataset.packageId,
			name: card.dataset.packageName,
			basePrice: Number(card.dataset.basePrice || 0),
			pagePrice: Number(card.dataset.pagePrice || 0)
		};

		setActiveCard(packageCards, card);
		updateTotals();
	};

	const toggleAddon = (card) => {
		const id = card.dataset.addonId;
		const name = card.dataset.addonName;
		const price = Number(card.dataset.addonPrice || 0);

		if (selectedAddons.has(id)) {
			selectedAddons.delete(id);
		} else {
			selectedAddons.set(id, { id, name, price });
		}

		card.classList.toggle('active', selectedAddons.has(id));
		renderAddons();
		updateTotals();
	};

	packageCards.forEach((card) => {
		card.addEventListener('click', () => selectPackage(card));
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				selectPackage(card);
			}
		});
	});

	addonCards.forEach((card) => {
		card.addEventListener('click', () => toggleAddon(card));
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleAddon(card);
			}
		});
	});

	pageInput?.addEventListener('input', updateTotals);

	renderAddons();
	updateTotals();

	if (form && formStatus) {
		formStatus.textContent = '';
	}
})();