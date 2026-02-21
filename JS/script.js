const LANGUAGE_KEY = 'preferredLanguage';
const THEME_KEY = 'preferredTheme';

// Text used across all pages. Each block is scoped to a page/section for clarity.
const translations = {
	en: {
		// Global brand + navigation + footer (all pages)
		brand: 'Marfeyx',
		'nav.home': 'Home',
		'nav.about': 'Offers',
		'nav.customisation': 'Customisation',
		'nav.socials': 'Socials',
		langToggle: 'Deutsch',
		'footer.home': 'Home',
		'footer.about': 'Offers',
		'footer.customisation': 'Customisation',
		'footer.socials': 'Socials',
		'footer.email': 'contact.marfeyx@gmail.com',
		'footer.copy': 'Built with intention - Always responsive',

		// Home page hero (index.html)
		'hero.eyebrow': 'Creative engineering meets clarity',
		'hero.title': 'Digital services crafted with precision.',
		'hero.body': 'I design and build clean, performant products with your aesthetic.',
		'hero.ctaPrimary': 'Offers',
		'hero.ctaSecondary': 'Socials',
		'hero.ctaCustom': 'Customise a package',
		'hero.meta1': 'Based in Aargau, Switzerland',
		'hero.meta2': 'Frontend · Webdesign',
		'hero.card1.label': 'Quick Delivery',
		'hero.card1.value': '1 Month Delivery',
		'hero.card1.hint': 'Websites will be shipped within one month unless specified.',
		'hero.card2.label': 'Design',
		'hero.card2.value': 'Your Design',
		'hero.card2.hint': 'Wether you only have a few ideas or a ready Mockup, I will make sure the website looks exactly like you pictured.',
		'hero.card3.label': 'Documentation',
		'hero.card3.value': 'Clear Documentation',
		'hero.card3.hint': 'I write good documentation so anyone can understand and change my code if wanted.',

		// Offers page hero + packages (offers.html)
		'offers.eyebrow': 'Offers',
		'offers.title': 'Pick the build that matches your scope.',
		'offers.body': 'From a fast, one page website to a full progressive web app. Each offer comes with clean code, responsive layouts and clear documentation.',
		'offers.packages.eyebrow': 'Packages',
		'offers.packages.title': 'Choose your scope',
		'offers.pkg1.tier': 'Personal Project',
		'offers.pkg1.title': 'Full Static Website',
		'offers.pkg1.price': '200 CHF + 50 CHF / Page',
		'offers.pkg1.feat1': '✅ Unlimited Amount Of Pages',
		'offers.pkg1.feat2': '✅ SEO-Ready with Metadata',
		'offers.pkg1.feat3': '✅ Well Documented',
		'offers.pkg1.feat4': '\u00a0',
		'offers.pkg1.feat5': '\u00a0',
		'offers.pkg1.meta': 'Estimate: 2-4 Weeks',
		'offers.pkg3.tier': 'Product',
		'offers.pkg3.title': 'Full Progressive Web App',
		'offers.pkg3.price': 'CHF 400 + 50 CHF / Page',
		'offers.pkg3.feat1': '✅ Unlimited Amount Of Pages',
		'offers.pkg3.feat2': '✅ SEO-Ready with Metadata',
		'offers.pkg3.feat3': '✅ Well Documented',
		'offers.pkg3.feat4': '✅ Downloadable',
		'offers.pkg3.feat5': '✅ Available Offline',
		'offers.pkg3.meta': 'Estimate: 3-4 Weeks',

		// Offers process steps (offers.html)
		'offers.process.eyebrow': 'Process',
		'offers.process.title': 'How we deliver',
		'offers.process.step1.title': 'Scope + schedule',
		'offers.process.step1.body': 'Discuss pages, overall design and deadlines.',
		'offers.process.step2.title': 'Demo Build',
		'offers.process.step2.body': 'Before I start with the actual project, I will create a small demo build to confirm expectations.',
		'offers.process.step3.title': 'Build',
		'offers.process.step3.body': 'Building the actual webpage with continuous feedback from you.',
		'offers.process.step4.title': 'Delivery',
		'offers.process.step4.body': 'I deliver the final product and we finalize everything.',
		'offers.process.step5.title': 'Launch',
		'offers.process.step5.body': 'I help you set up your website and host it.',

		// Offers add-ons grid (offers.html)
		'offers.addons.subtitle': 'Extras',
		'offers.addons.seo.tag': 'Customer Favourite',
		'offers.addons.seo.title': 'Premium SEO Setup',
		'offers.addons.seo.body': 'Average 95%+ SEO rating guaranteed for each page',
		'offers.addons.seo.price': '39.95 CHF',
		'offers.addons.seo.unit': '*',
		'offers.addons.analytics.tag': 'Fast and Reliable',
		'offers.addons.analytics.title': 'Lighthouse Performance Rating 95%+ Guaranteed',
		'offers.addons.analytics.body': 'Optimize images and elements for optimal performance for each page.',
		'offers.addons.analytics.price': '39.95 CHF',
		'offers.addons.analytics.unit': '*',
		'offers.addons.cms.tag': 'Flexible',
		'offers.addons.cms.title': 'Multi-Language',
		'offers.addons.cms.body': 'Have up to 3 built in website translations.',
		'offers.addons.cms.price': '49.95 CHF',

		// Customisation page (customisation.html)
		'custom.eyebrow': 'custom offer',
		'custom.title': 'Customise an order and make a request.',
		'custom.body': 'Choose a package, add-ons and view expected cost.',
		'custom.pkg3.tier': 'Application',
		'custom.addons.eyebrow': 'Addons',
		'custom.addons.title': 'Choose the addons',
		'custom.addons.seo.tag': 'Recommended',
		'custom.addons.seo.title': 'Premium SEO Setup',
		'custom.addons.seo.body': 'Average 95%+ SEO rating guaranteed for each page.',
		'custom.addons.seo.price': '39.95 CHF',
		'custom.addons.performance.tag': 'Fast and Reliable',
		'custom.addons.performance.title': 'Premium Performance Setup',
		'custom.addons.performance.body': 'Average 95%+ Performance Lighthouse rating guaranteed for each page.',
		'custom.addons.performance.price': '39.95 CHF',
		'custom.addons.cms.tag': 'International',
		'custom.addons.cms.title': 'Multi-Language Setup',
		'custom.addons.cms.body': 'Have a second language built in with translations.',
		'custom.addons.cms.price': '49.95 CHF',

		// Custom checkout flow (customisation.html)
		'custom.checkout.eyebrow': 'Book a review',
		'custom.checkout.title': 'Review and send your request',
		'custom.checkout.body': 'This does not charge you yet—this only creates a request for me to review.',
		'custom.checkout.selectedPackage': 'Selected package',
		'custom.checkout.packageFallback': 'Select a package to continue',
		'custom.checkout.addonsLabel': 'Selected add-ons',
		'custom.checkout.noAddons': 'No add-ons selected',
		'custom.checkout.pagesLabel': 'How many pages? (Homepage, About Page, Product Page etc.)',
		'custom.checkout.total': 'Estimated total',
		'custom.checkout.notice': 'You are not charged now. I will reply with the final quote.',
		'custom.checkout.name': 'Name',
		'custom.checkout.email': 'Email',
		'custom.checkout.emailPlaceholder': 'name@example.com',
		'custom.checkout.phone': 'Phone number',
		'custom.checkout.phonePlaceholder': '+41 00 000 00 00',
		'custom.checkout.notes': 'Project notes (optional)',
		'custom.checkout.notesPlaceholder': 'Anything specific you want to add?',
		'custom.checkout.submit': 'Create request',
		'custom.checkout.disclaimer': 'Submitting creates a request only. No payment is processed yet.',

		// Socials/contact hero (socials.html + contact.html)
		'socials.eyebrow': 'Connect',
		'socials.title': 'Get in Touch',
		'socials.body': 'Have a question or a project in mind? Use the form below, or contact me directly.',

		// Socials cards (socials.html)
		'socials.card.github.title': 'GitHub',
		'socials.card.github.body': 'Check out my projects and contributions.',
		'socials.card.github.cta': 'View Profile',
		'socials.card.discord.title': 'Discord',
		'socials.card.discord.body': 'Join the community and chat with me directly.',
		'socials.card.discord.cta': 'Join Server',
		'socials.card.email.title': 'Email',
		'socials.card.email.body': 'Send me an email for any inquiries.',
		'socials.card.email.cta': 'Send Email',

		// Contact form (socials.html + contact.html)
		'form.eyebrow': 'Message',
		'form.title': 'Contact me directly',
		'form.body': 'Contact me directly about projects.',
		'form.name': 'Name',
		'form.email': 'Email',
		'form.project': 'Message',
		'form.submit': 'Send message',
		'form.status.success': 'Thank you! I will reply soon.',
		'form.status.error': 'Something went wrong. Please try again.',
		'form.status.network': 'Network error. Please try later.',

		// 404 page (404.html)
		'nf.code': '404',
		'nf.title': 'Page not found',
		'nf.body': 'The link you followed is broken or the page has moved. Choose a destination below.',
		'nf.home': 'Go home',
		'nf.offers': 'View offers',
		'nf.custom': 'Customise a package',
		'nf.contact': 'Contact me'
	},
	de: {
		// Global brand + navigation + footer (all pages)
		brand: 'Marfeyx',
		'nav.home': 'Home',
		'nav.about': 'Angebote',
		'nav.customisation': 'Anpassen',
		'nav.socials': 'Socials',
		langToggle: 'English',
		'footer.home': 'Home',
		'footer.about': 'Angebote',
		'footer.customisation': 'Anpassen',
		'footer.socials': 'Socials',
		'footer.email': 'contact.marfeyx@gmail.com',
		'footer.copy': 'Mit Anspruch gebaut · Immer responsive',

		// Home page hero (index.html)
		'hero.eyebrow': 'Engineering mit Klarheit',
		'hero.title': 'Gute Webseiten, präzise gemacht.',
		'hero.body': 'Ich gestalte und erstelle saubere, performante Webseiten in deinem Stil.',
		'hero.ctaPrimary': 'Angebote',
		'hero.ctaSecondary': 'Kontakt',
		'hero.ctaCustom': 'Paket anpassen',
		'hero.meta1': 'Aargau, Schweiz',
		'hero.meta2': 'Frontend · Webdesign',
		'hero.card1.label': 'Lieferung',
		'hero.card1.value': 'Lieferung in 30 Tagen',
		'hero.card1.hint': 'Lieferung in 30 Tagen, falls nicht anders abgesprochen.',
		'hero.card2.label': 'Design',
		'hero.card2.value': 'Dein Design',
		'hero.card2.hint': 'Ob nur eine grobe Idee oder einem kompletten Mockup. Ich setze deine Ideen und Design um.',
		'hero.card3.label': 'Dokumentation',
		'hero.card3.value': 'Klare Dokumentation',
		'hero.card3.hint': 'Saubere Dokumentation, damit jeder meinen Code verstehen kann.',

		// Offers page hero + packages (offers.html)
		'offers.eyebrow': 'Angebote',
		'offers.title': 'Wähle das Angebot, dass zu dir passt.',
		'offers.body': 'Von einfachen Webseiten zu vollen PWAs. Alles kommt mit sauberem Code, responsiven Layouts und klarer Dokumentation.',
		'offers.packages.eyebrow': 'Pakete',
		'offers.packages.title': 'Meine Angebote',
		'offers.pkg1.tier': 'Eigenes Projekt',
		'offers.pkg1.title': 'Statische Website',
		'offers.pkg1.price': '200 CHF + 50 CHF / Seite',
		'offers.pkg1.feat1': '✅ Beliebig viele Seiten',
		'offers.pkg1.feat2': '✅ SEO-ready + Metadaten',
		'offers.pkg1.feat3': '✅ Sauber dokumentiert',
		'offers.pkg1.feat4': '\u00a0',
		'offers.pkg1.feat5': '\u00a0',
		'offers.pkg1.meta': 'Dauer: 2–4 Wochen',
		'offers.pkg3.tier': 'Produkt',
		'offers.pkg3.title': 'Progressive Web App',
		'offers.pkg3.price': 'CHF 400 + 50 CHF / Seite',
		'offers.pkg3.feat1': '✅ Beliebig viele Seiten',
		'offers.pkg3.feat2': '✅ SEO-ready + Metadaten',
		'offers.pkg3.feat3': '✅ Sauber dokumentiert',
		'offers.pkg3.feat4': '✅ Installierbar',
		'offers.pkg3.feat5': '✅ Offline nutzbar',
		'offers.pkg3.meta': 'Dauer: 3–4 Wochen',

		// Offers process steps (offers.html)
		'offers.process.eyebrow': 'Prozess',
		'offers.process.title': 'So gehe ich vor',
		'offers.process.step1.title': 'Planung',
		'offers.process.step1.body': 'Seiten, Look und Deadline abklären.',
		'offers.process.step2.title': 'Demo Build',
		'offers.process.step2.body': 'Erst ein Mini-Demo, damit Erwartungen klar sind.',
		'offers.process.step3.title': 'Build',
		'offers.process.step3.body': 'Ich baue die Seite, du gibst laufend Feedback.',
		'offers.process.step4.title': 'Übergabe',
		'offers.process.step4.body': 'Ich liefere die Webseite und mache letze Änderungen.',
		'offers.process.step5.title': 'Hosting',
		'offers.process.step5.body': 'Ich helfe dir die Webseite zu hosten.',

		// Offers add-ons grid (offers.html)
		'offers.addons.subtitle': 'Extras',
		'offers.addons.seo.tag': 'Bestseller',
		'offers.addons.seo.title': 'Premium SEO Setup',
		'offers.addons.seo.body': '95%+ durchschnitts SEO Score bei jeder Seite.',
		'offers.addons.seo.price': '39.95 CHF',
		'offers.addons.seo.unit': '*',
		'offers.addons.analytics.tag': 'Gute Performance',
		'offers.addons.analytics.title': 'Premium Performance Setup',
		'offers.addons.analytics.body': '95%+ durchschnitts Performance Score bei jeder Seite.',
		'offers.addons.analytics.price': '29.95 CHF',
		'offers.addons.analytics.unit': '*',
		'offers.addons.cms.tag': 'Flexibel',
		'offers.addons.cms.title': 'Mehrsprachig',
		'offers.addons.cms.body': 'Bis zu 3 Sprachen direkt eingebaut.',
		'offers.addons.cms.price': '49.95 CHF',

		// Customisation page (customisation.html)
		'custom.eyebrow': 'Individuelles Angebot',
		'custom.title': 'Bestellung anpassen und Anfrage stellen.',
		'custom.body': 'Paket wählen, Add-ons hinzufügen und Preis ansehen.',
		'custom.pkg3.tier': 'Application',
		'custom.addons.eyebrow': 'Addons',
		'custom.addons.title': 'Addons auswählen',
		'custom.addons.seo.tag': 'Empfohlen',
		'custom.addons.seo.title': 'Premium SEO Setup',
		'custom.addons.seo.body': '95%+ durchschnittlicher SEO-Score pro Seite.',
		'custom.addons.seo.price': '39.95 CHF',
		'custom.addons.performance.tag': 'Schnell & Zuverlässig',
		'custom.addons.performance.title': 'Premium Performance Setup',
		'custom.addons.performance.body': '95%+ Performance Lighthouse-Score pro Seite.',
		'custom.addons.performance.price': '39.95 CHF',
		'custom.addons.cms.tag': 'International',
		'custom.addons.cms.title': 'Mehrsprachiges Setup',
		'custom.addons.cms.body': 'Bis zu 3 Sprachen eingebaut.',
		'custom.addons.cms.price': '49.95 CHF',

		// Custom checkout flow (customisation.html)
		'custom.checkout.eyebrow': 'Review buchen',
		'custom.checkout.title': 'Prüfen und Anfrage senden',
		'custom.checkout.body': 'Das löst noch keine Zahlung aus – es erstellt nur eine Anfrage zur Prüfung.',
		'custom.checkout.selectedPackage': 'Gewähltes Paket',
		'custom.checkout.packageFallback': 'Wähle ein Paket, um fortzufahren',
		'custom.checkout.addonsLabel': 'Gewählte Add-ons',
		'custom.checkout.noAddons': 'Keine Add-ons gewählt',
		'custom.checkout.pagesLabel': 'Wie viele Seiten? (Homepage, About, Produktseite etc.)',
		'custom.checkout.total': 'Geschätzte Summe',
		'custom.checkout.notice': 'Keine Zahlung jetzt. Ich melde mich mit dem finalen Angebot.',
		'custom.checkout.name': 'Name',
		'custom.checkout.email': 'E-Mail',
		'custom.checkout.emailPlaceholder': 'name@example.com',
		'custom.checkout.phone': 'Telefonnummer',
		'custom.checkout.phonePlaceholder': '+41 00 000 00 00',
		'custom.checkout.notes': 'Projekt-Notizen (optional)',
		'custom.checkout.notesPlaceholder': 'Gibt es etwas Spezielles?',
		'custom.checkout.submit': 'Anfrage erstellen',
		'custom.checkout.disclaimer': 'Das ist nur eine Anfrage. Es wird noch nichts abgebucht.',

		// Socials/contact hero (socials.html + contact.html)
		'socials.eyebrow': 'Kontakt',
		'socials.title': 'Lass uns was Klareres bauen.',
		'socials.body': 'Fragen zu Code, Paketen oder etwas anderem?',

		// Socials cards (socials.html)
		'socials.card.github.title': 'GitHub',
		'socials.card.github.body': 'Sieh dir meine Projekte und Beiträge an.',
		'socials.card.github.cta': 'Profil öffnen',
		'socials.card.discord.title': 'Discord',
		'socials.card.discord.body': 'Tritt der Community bei und chatte direkt mit mir.',
		'socials.card.discord.cta': 'Server beitreten',
		'socials.card.email.title': 'E-Mail',
		'socials.card.email.body': 'Schreib mir bei Fragen oder Anfragen.',
		'socials.card.email.cta': 'E-Mail senden',

		// Contact form (socials.html + contact.html)
		'form.eyebrow': 'Nachricht',
		'form.title': 'Direkt schreiben',
		'form.body': 'Schreib mir kurz zu deinem Projekt.',
		'form.name': 'Name',
		'form.email': 'E-Mail',
		'form.project': 'Nachricht',
		'form.submit': 'Senden',
		'form.status.success': 'Danke! Ich melde mich bald.',
		'form.status.error': 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
		'form.status.network': 'Netzwerkfehler. Bitte später versuchen.',

		// 404 page (404.html)
		'nf.code': '404',
		'nf.title': 'Seite nicht gefunden',
		'nf.body': 'Der Link ist defekt oder die Seite wurde verschoben. Wähle ein Ziel unten.',
		'nf.home': 'Zur Startseite',
		'nf.offers': 'Angebote ansehen',
		'nf.custom': 'Paket anpassen',
		'nf.contact': 'Kontakt'
	}
};

const applyTheme = (theme) => {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem(THEME_KEY, theme);

	const icon = document.querySelector('#theme-toggle .theme-icon');
	if (icon) icon.textContent = theme === 'light' ? '🌞' : '🌙';
};

const getStoredLanguage = () => localStorage.getItem(LANGUAGE_KEY);

const applyLanguage = (lang, { persist = false } = {}) => {
	const dict = translations[lang] || translations.en;

	document.body.setAttribute('data-lang', lang);
	document.documentElement.setAttribute('lang', lang);
	if (persist) localStorage.setItem(LANGUAGE_KEY, lang);

	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.dataset.i18n;
		if (key && dict[key]) {
			el.textContent = dict[key];
		}
	});

	document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
		const key = el.dataset.i18nPlaceholder;
		if (key && dict[key]) {
			el.placeholder = dict[key];
		}
	});

	const langToggle = document.getElementById('lang-toggle');
	if (langToggle) {
		const label = langToggle.querySelector('.lang-label');
		if (label && dict.langToggle) label.textContent = dict.langToggle;
	}
};

const toggleLanguage = () => {
	const current = document.body.getAttribute('data-lang') === 'de' ? 'de' : 'en';
	const next = current === 'en' ? 'de' : 'en';
	applyLanguage(next, { persist: true });
};

const showLanguagePrompt = () => {
	if (getStoredLanguage()) return;
	const prefersGerman = (navigator.language || '').toLowerCase().startsWith('de');
	if (prefersGerman) {
		applyLanguage('de', { persist: true });
	}
};

const init = () => {
	const storedTheme = localStorage.getItem(THEME_KEY) || 'dark';
	applyTheme(storedTheme);

	const storedLang = getStoredLanguage();
	if (storedLang) {
		applyLanguage(storedLang);
	} else {
		applyLanguage('en');
		showLanguagePrompt();
	}

	const themeToggle = document.getElementById('theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
			applyTheme(current);
		});
	}

	const langToggle = document.getElementById('lang-toggle');
	if (langToggle) {
		langToggle.addEventListener('click', toggleLanguage);
	}

	const form = document.querySelector('form');
	if (form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();

			const status = document.getElementById('form-status');
			const locale = document.body.getAttribute('data-lang') === 'de' ? 'de' : 'en';
			const dict = translations[locale];

			const setStatus = (key, color) => {
				if (!status) return;
				status.textContent = dict[key] || '';
				status.style.color = color;
			};

			try {
				const response = await fetch(form.action, {
					method: 'POST',
					body: new FormData(form),
					headers: { Accept: 'application/json' }
				});

				if (response.ok) {
					form.reset();
					setStatus('form.status.success', '#4ade80');
				} else {
					setStatus('form.status.error', '#f87171');
				}
			} catch (error) {
				setStatus('form.status.network', '#f87171');
			}
		});
	}
};

document.addEventListener('DOMContentLoaded', init);
