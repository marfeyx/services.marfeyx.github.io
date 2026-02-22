const LANGUAGE_KEY = 'preferredLanguage';
const THEME_KEY = 'preferredTheme';

const translations = {
	en: {
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
		'footer.impressum': 'Imprint',
		'footer.privacy': 'Privacy',
		'footer.legal': 'Legal',

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
		'hero.card1.hint': 'Websites will be delivered within one month unless specified.',
		'hero.card2.label': 'Design',
		'hero.card2.value': 'Your Design',
		'hero.card2.hint': 'Whether you only have a few ideas or a ready mockup, I will make sure the website looks exactly like you pictured.',
		'hero.card3.label': 'Documentation',
		'hero.card3.value': 'Clear Documentation',
		'hero.card3.hint': 'I write good documentation so anyone can understand and change my code if wanted.',

		'offers.eyebrow': 'Offers',
		'offers.title': 'Pick the build that matches your scope.',
		'offers.body': 'From a fast, one page website to a progressive web app. Each offer comes with clean code, responsive layouts and clear documentation.',
		'offers.packages.eyebrow': 'Packages',
		'offers.packages.title': 'Choose your scope',
		'offers.pkg1.tier': 'Personal Project',
		'offers.pkg1.title': 'Static Website',
		'offers.pkg1.price': '200 CHF + 50 CHF / Page',
		'offers.pkg1.feat1': '✅ Unlimited Amount Of Pages',
		'offers.pkg1.feat2': '✅ SEO-Ready with Metadata',
		'offers.pkg1.feat3': '✅ Well Documented',
		'offers.pkg1.feat4': '',
		'offers.pkg1.feat5': '',
		'offers.pkg1.meta': 'Estimate: 2-4 Weeks',
		'offers.pkg3.tier': 'Product',
		'offers.pkg3.title': 'Progressive Web App',
		'offers.pkg3.price': '400 CHF + 50 CHF / Page',
		'offers.pkg3.feat1': '✅ Unlimited Amount Of Pages',
		'offers.pkg3.feat2': '✅ SEO-Ready with Metadata',
		'offers.pkg3.feat3': '✅ Well Documented',
		'offers.pkg3.feat4': '✅ Downloadable',
		'offers.pkg3.feat5': '✅ Available Offline',
		'offers.pkg3.meta': 'Estimate: 3-4 Weeks',

		'offers.process.eyebrow': 'Process',
		'offers.process.title': 'How I deliver',
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

		'custom.eyebrow': 'Custom offer',
		'custom.title': 'Customise an order and make a request.',
		'custom.body': 'Choose a package, add-ons and view expected cost.',
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

		'custom.checkout.eyebrow': 'Book a review',
		'custom.checkout.title': 'Review and send your request',
		'custom.checkout.body': 'This does not charge you yet—this only creates a request for me to review.',
		'custom.checkout.selectedPackage': 'Selected package',
		'custom.checkout.packageFallback': 'Select a package to continue',
		'custom.checkout.addonsLabel': 'Selected add-ons',
		'custom.checkout.noAddons': 'No add-ons selected',
		'custom.warn.addonsUnavailable': 'Add-ons are not available with 9+ pages.',
		'custom.error.pages.nan': 'Please enter a valid number.',
		'custom.error.pages.min': 'Pages must be at least 1.',
		'custom.error.pages.max': 'Max 20 pages allowed.',
		'unit.page': 'Page',
		'unit.pages': 'Pages',
		'unit.perPage': '/ Page',
		'custom.checkout.pagesLabel': 'How many pages? (Homepage, About Page, Product Page etc.)',
		'custom.checkout.total': 'Estimated total',
		'custom.checkout.contactTitle': 'Your contact',
		'custom.checkout.notes': 'Notes / request',
		'custom.checkout.submit': 'Send request',
		'custom.pkg3.tier': 'Application',

		'socials.eyebrow': 'Connect',
		'socials.title': 'Get in Touch',
		'socials.body': 'Have a question or a project in mind? Use the form below, or contact me directly.',
		'socials.card.github.title': 'GitHub',
		'socials.card.github.body': 'Check out my projects and contributions.',
		'socials.card.github.cta': 'View Profile',
		'socials.card.discord.title': 'Discord',
		'socials.card.discord.body': 'Join the community and chat with me directly.',
		'socials.card.discord.cta': 'Join Server',
		'socials.card.email.title': 'Email',
		'socials.card.email.body': 'Send me an email for any inquiries.',
		'socials.card.email.cta': 'Send Email',

		'form.eyebrow': 'Message',
		'form.title': 'Contact me directly',
		'form.name': 'Name',
		'form.email': 'Email',
		'form.project': 'Message',
		'form.submit': 'Send message',
		'form.status.success': 'Message sent successfully.',
		'form.status.error': 'Something went wrong. Please try again.',
		'form.status.network': 'Network error. Please try again later.',

		'legal.eyebrow': 'Legal',
		'legal.references.heroTitle': 'Legal',
		'legal.references.sectionTitle': 'Use of reference projects',
		'legal.references.intro': 'Unless explicitly agreed otherwise in writing, I reserve the right to use websites I build, in whole or in part, as reference projects.',
		'legal.references.scopeIntro': 'This specifically includes:',
		'legal.references.item1': 'Publishing in my own GitHub repository',
		'legal.references.item2': 'Showing and linking on my website',
		'legal.references.item3': 'Using screenshots or project descriptions for presentation and promotional purposes',
		'legal.references.confidentiality': 'Confidential or sensitive content will not be published.',

		'imprint.heroTitle': 'Imprint',
		'imprint.heading': 'Details per applicable law',
		'imprint.providerLabel': 'Provider:',
		'imprint.providerValue': 'Marfeyx (Freelancer, Switzerland)',
		'imprint.contactLabel': 'Contact:',
		'imprint.contactValue': 'contact.marfeyx@gmail.com',
		'imprint.noteLabel': 'Note:',
		'imprint.note1': 'Services are agreed individually.',
		'imprint.note2': 'No contracts are concluded or payments processed via this website.',
		'imprint.note3': 'A request submission is non-binding.',

		'privacy.heroTitle': 'Privacy',
		'privacy.statementTitle': 'Privacy Notice',
		'privacy.responsibleLabel': 'Controller:',
		'privacy.responsibleValue': 'Marfeyx (Freelancer, Switzerland)',
		'privacy.email': 'Email: contact.marfeyx@gmail.com',
		'privacy.generalTitle': '1. General',
		'privacy.generalBody1': 'This website showcases my services.',
		'privacy.generalBody2': 'I process personal data only when technically necessary or when you contact me directly.',
		'privacy.logsTitle': '2. Access data (server logs)',
		'privacy.logsBody1': 'When visiting this site, the hosting provider may automatically store technical data, e.g.:',
		'privacy.logsItem1': 'IP address',
		'privacy.logsItem2': 'Date and time of access',
		'privacy.logsItem3': 'Browser type and operating system',
		'privacy.logsBody2': 'This data is used solely to technically provide and secure the website.',
		'privacy.localStorageTitle': '3. Local Storage (language & theme)',
		'privacy.localStorageBody1': 'This website uses no cookies for tracking purposes.',
		'privacy.localStorageBody2': 'Your chosen language and theme are stored in your browser’s local storage.',
		'privacy.localStorageBody3': 'No personal data is processed.',
		'privacy.localStorageBody4': 'The stored information remains only in your browser and is not shared with third parties.',
		'privacy.contactTitle': '4. Contact',
		'privacy.contactBody1': 'If you contact me via email or a request form, the data you provide (e.g., name, email, message) is used to respond to your inquiry.',
		'privacy.contactBody2': 'Your data is not shared with third parties.',
		'privacy.rightsTitle': '5. Your rights',
		'privacy.rightsBody1': 'You may request access, rectification, or deletion of your personal data within legal limits.',
		'privacy.rightsBody2': 'Contact: contact.marfeyx@gmail.com',

		'nf.code': '404',
		'nf.title': 'Page not found',
		'nf.body': 'The link you followed is broken or the page has moved. Choose a destination below.',
		'nf.home': 'Go home',
		'nf.offers': 'View offers',
		'nf.custom': 'Customise a package',
		'nf.contact': 'Contact me'
	},

	de: {
		brand: 'Marfeyx',
		'nav.home': 'Start',
		'nav.about': 'Angebote',
		'nav.customisation': 'Zusammenstellen',
		'nav.socials': 'Socials',
		langToggle: 'English',
		'footer.home': 'Start',
		'footer.about': 'Angebote',
		'footer.customisation': 'Zusammenstellen',
		'footer.socials': 'Socials',
		'footer.email': 'contact.marfeyx@gmail.com',
		'footer.copy': 'Mit Bedacht gebaut - Immer responsive',
		'footer.impressum': 'Impressum',
		'footer.privacy': 'Datenschutz',
		'footer.legal': 'Rechtliches',

		'hero.eyebrow': 'Creative engineering meets clarity',
		'hero.title': 'Digitale Services mit Präzision.',
		'hero.body': 'Ich entwickle saubere, performante Produkte in deinem Stil.',
		'hero.ctaPrimary': 'Angebote',
		'hero.ctaSecondary': 'Socials',
		'hero.ctaCustom': 'Paket anpassen',
		'hero.meta1': 'Aus Aargau, Schweiz',
		'hero.meta2': 'Frontend · Webdesign',
		'hero.card1.label': 'Schnelle Lieferung',
		'hero.card1.value': 'Lieferung in einem Monat',
		'hero.card1.hint': 'Lieferung in maximal 30 Tagen, falls nicht anders abgesprochen.',
		'hero.card2.label': 'Design',
		'hero.card2.value': 'Dein Design',
		'hero.card2.hint': 'Ob du nur eine grobe Idee hast oder ein komplettes Mockup: Ich setze dein Design genau so um, wie du es dir vorstellst.',
		'hero.card3.label': 'Dokumentation',
		'hero.card3.value': 'Klare Doku',
		'hero.card3.hint': 'Ich schreibe eine verständliche Dokumentation, damit jeder den Code kann.',

		'offers.eyebrow': 'Angebote',
		'offers.title': 'Entdecke meine Angebote',
		'offers.body': 'Von einer kleinen Webseite bis zur vollständigen Progressive Web App. Alles kommt mit sauberem Code, guter Dokumentation und responsiven Layouts.',
		'offers.packages.eyebrow': 'Pakete',
		'offers.packages.title': 'Meine Grundangebote',
		'offers.pkg1.tier': 'Personal Project',
		'offers.pkg1.title': 'Statische Website',
		'offers.pkg1.price': '200 CHF + 50 CHF / Seite',
		'offers.pkg1.feat1': '✅ Unbegrenzte Seitenanzahl',
		'offers.pkg1.feat2': '✅ SEO bereit inkl. Metadata',
		'offers.pkg1.feat3': '✅ Gut dokumentiert',
		'offers.pkg1.feat4': '',
		'offers.pkg1.feat5': '',
		'offers.pkg1.meta': 'Dauer: 2-4 Wochen',
		'offers.pkg3.tier': 'Produkt',
		'offers.pkg3.title': 'Progressive Web App',
		'offers.pkg3.price': '400 CHF + 50 CHF / Seite',
		'offers.pkg3.feat1': '✅ Unbegrenzte Seitenanzahl',
		'offers.pkg3.feat2': '✅ SEO bereit inkl. Metadata',
		'offers.pkg3.feat3': '✅ Gut dokumentiert',
		'offers.pkg3.feat4': '✅ Downloadbar',
		'offers.pkg3.feat5': '✅ Offline verfügbar',
		'offers.pkg3.meta': 'Dauer: 3-4 Wochen',

		'offers.process.eyebrow': 'Prozess',
		'offers.process.title': 'So liefere ich',
		'offers.process.step1.title': 'Umfang + Zeitplan',
		'offers.process.step1.body': 'Seiten, Design und Deadlines besprechen.',
		'offers.process.step2.title': 'Demo Build',
		'offers.process.step2.body': 'Bevor ich starte, baue ich ein kleines Demo-Projekt um Erwartungen abzugleichen.',
		'offers.process.step3.title': 'Build',
		'offers.process.step3.body': 'Ich baue die Seite mit kontinuierlichem Feedback.',
		'offers.process.step4.title': 'Lieferung',
		'offers.process.step4.body': 'Ich liefere das Endprodukt und wir finalisieren alles.',
		'offers.process.step5.title': 'Launch',
		'offers.process.step5.body': 'Ich helfe dir beim Hosting und Setup.',

		'offers.addons.subtitle': 'Extras',
		'offers.addons.seo.tag': 'Kundenfavorit',
		'offers.addons.seo.title': 'Premium SEO Setup',
		'offers.addons.seo.body': '95%+ durchschnittliche SEO bewertung für jede Seite.',
		'offers.addons.seo.price': '39.95 CHF',
		'offers.addons.seo.unit': '*',
		'offers.addons.analytics.tag': 'Schnell & zuverlässig',
		'offers.addons.analytics.title': 'Premium Performance Setup',
		'offers.addons.analytics.body': '95%+ durchschnittliche Performance bewertung für jede Seite.',
		'offers.addons.analytics.price': '39.95 CHF',
		'offers.addons.analytics.unit': '*',
		'offers.addons.cms.tag': 'Flexibel',
		'offers.addons.cms.title': 'Mehrsprachig',
		'offers.addons.cms.body': 'Eine zweite Sprache direkt implementiert.',
		'offers.addons.cms.price': '49.95 CHF',

		'custom.eyebrow': 'Zusammenstellen',
		'custom.title': 'Bestellung anpassen und Anfrage senden.',
		'custom.body': 'Wähle ein Paket, Add-ons und sieh die erwarteten Kosten.',
		'custom.addons.eyebrow': 'Add-ons',
		'custom.addons.title': 'Add-ons auswählen',
		'custom.addons.seo.tag': 'Empfohlen',
		'custom.addons.seo.title': 'Premium SEO Setup',
		'custom.addons.seo.body': 'Ø 95%+ SEO Rating garantiert pro Seite.',
		'custom.addons.seo.price': '39.95 CHF',
		'custom.addons.performance.tag': 'Schnell & zuverlässig',
		'custom.addons.performance.title': 'Premium Performance Setup',
		'custom.addons.performance.body': 'Ø 95%+ Performance Rating garantiert pro Seite.',
		'custom.addons.performance.price': '39.95 CHF',
		'custom.addons.cms.tag': 'International',
		'custom.addons.cms.title': 'Mehrsprachigkeit',
		'custom.addons.cms.body': 'Eine zweite Sprache mit Übersetzungen.',
		'custom.addons.cms.price': '49.95 CHF',

		'custom.checkout.eyebrow': 'Review buchen',
		'custom.checkout.title': 'Review und Anfrage senden',
		'custom.checkout.body': 'Hier wird noch nichts bezahlt, es wird nur eine Anfrage erstellt.',
		'custom.checkout.selectedPackage': 'Gewähltes Paket',
		'custom.checkout.packageFallback': 'Wähle ein Paket',
		'custom.checkout.addonsLabel': 'Gewählte Add-ons',
		'custom.checkout.noAddons': 'Keine Add-ons ausgewählt',
		'custom.warn.addonsUnavailable': 'Add-ons sind bei 9+ Seiten nicht verfügbar.',
		'custom.error.pages.nan': 'Bitte gib eine gültige Zahl ein.',
		'custom.error.pages.min': 'Mindestens 1 Seite.',
		'custom.error.pages.max': 'Maximal 20 Seiten erlaubt.',
		'unit.page': 'Seite',
		'unit.pages': 'Seiten',
		'unit.perPage': '/ Seite',
		'custom.checkout.pagesLabel': 'Wie viele Seiten? (Startseite, About, Produktseite etc.)',
		'custom.checkout.total': 'Geschätzter Preis',
		'custom.checkout.contactTitle': 'Dein Kontakt',
		'custom.checkout.notes': 'Notizen / Wunsch',
		'custom.checkout.submit': 'Anfrage senden',
		'custom.pkg3.tier': 'Application',

		'socials.eyebrow': 'Kontakt',
		'socials.title': 'Melde dich',
		'socials.body': 'Frage oder Projektidee? Nutze das Formular oder kontaktiere mich direkt.',
		'socials.card.github.title': 'GitHub',
		'socials.card.github.body': 'Schau dir meine Projekte an.',
		'socials.card.github.cta': 'Profil ansehen',
		'socials.card.discord.title': 'Discord',
		'socials.card.discord.body': 'Trete der Community bei und schreib mir.',
		'socials.card.discord.cta': 'Server beitreten',
		'socials.card.email.title': 'Email',
		'socials.card.email.body': 'Schreib mir eine E-Mail.',
		'socials.card.email.cta': 'E-Mail senden',

		'form.eyebrow': 'Nachricht',
		'form.title': 'Direkt kontaktieren',
		'form.name': 'Name',
		'form.email': 'Email',
		'form.project': 'Nachricht',
		'form.submit': 'Senden',
		'form.status.success': 'Nachricht erfolgreich gesendet.',
		'form.status.error': 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
		'form.status.network': 'Netzwerkfehler. Bitte später erneut versuchen.',

		'legal.eyebrow': 'Rechtliches',
		'legal.references.heroTitle': 'Rechtliches',
		'legal.references.sectionTitle': 'Verwendung von Referenzprojekten',
		'legal.references.intro': 'Sofern nicht ausdrücklich anders schriftlich vereinbart, behalte ich mir das Recht vor, von mir erstellte Websites ganz oder teilweise als Referenzprojekt zu verwenden.',
		'legal.references.scopeIntro': 'Dies umfasst insbesondere:',
		'legal.references.item1': 'Die Veröffentlichung im eigenen GitHub-Repository',
		'legal.references.item2': 'Die Darstellung und Verlinkung auf meiner Website',
		'legal.references.item3': 'Die Nutzung von Screenshots oder Projektbeschreibungen zu Präsentations- und Werbezwecken',
		'legal.references.confidentiality': 'Vertrauliche oder sensible Inhalte werden hierbei nicht veröffentlicht.',

		'imprint.heroTitle': 'Impressum',
		'imprint.heading': 'Angaben gemäss geltendem Recht',
		'imprint.providerLabel': 'Anbieter:',
		'imprint.providerValue': 'Marfeyx (Freelancer, Schweiz)',
		'imprint.contactLabel': 'Kontakt:',
		'imprint.contactValue': 'contact.marfeyx@gmail.com',
		'imprint.noteLabel': 'Hinweis:',
		'imprint.note1': 'Dienstleistungen werden individuell vereinbart.',
		'imprint.note2': 'Es erfolgen keine Vertragsabschlüsse oder Zahlungen über diese Website.',
		'imprint.note3': 'Eine Request-Anfrage ist unverbindlich.',

		'privacy.heroTitle': 'Datenschutz',
		'privacy.statementTitle': 'Datenschutzerklärung',
		'privacy.responsibleLabel': 'Verantwortlich:',
		'privacy.responsibleValue': 'Marfeyx (Freelancer, Schweiz)',
		'privacy.email': 'E-Mail: contact.marfeyx@gmail.com',
		'privacy.generalTitle': '1. Allgemeines',
		'privacy.generalBody1': 'Diese Website dient der Präsentation meiner Dienstleistungen.',
		'privacy.generalBody2': 'Ich verarbeite personenbezogene Daten nur, soweit dies technisch erforderlich ist oder du mich direkt kontaktierst.',
		'privacy.logsTitle': '2. Zugriffsdaten (Server-Logs)',
		'privacy.logsBody1': 'Beim Besuch dieser Website können durch den Hosting-Anbieter automatisch technische Daten gespeichert werden, z.B.:',
		'privacy.logsItem1': 'IP-Adresse',
		'privacy.logsItem2': 'Datum und Uhrzeit des Zugriffs',
		'privacy.logsItem3': 'Browsertyp und Betriebssystem',
		'privacy.logsBody2': 'Diese Daten dienen ausschliesslich der technischen Bereitstellung und Sicherheit der Website.',
		'privacy.localStorageTitle': '3. Local Storage (Sprache & Theme)',
		'privacy.localStorageBody1': 'Diese Website verwendet keine Cookies zu Trackingzwecken.',
		'privacy.localStorageBody2': 'Zur Speicherung deiner gewählten Sprache und des gewählten Themes wird der Local Storage deines Browsers verwendet.',
		'privacy.localStorageBody3': 'Dabei werden keine personenbezogenen Daten verarbeitet.',
		'privacy.localStorageBody4': 'Die gespeicherten Informationen bleiben ausschliesslich in deinem Browser und werden nicht an Dritte übermittelt.',
		'privacy.contactTitle': '4. Kontaktaufnahme',
		'privacy.contactBody1': 'Wenn du mich per E-Mail oder über ein Anfrageformular kontaktierst, werden die von dir angegebenen Daten (z.B. Name, E-Mail, Nachricht) verwendet, um deine Anfrage zu beantworten.',
		'privacy.contactBody2': 'Eine Weitergabe an Dritte erfolgt nicht.',
		'privacy.rightsTitle': '5. Deine Rechte',
		'privacy.rightsBody1': 'Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner personenbezogenen Daten im Rahmen der gesetzlichen Bestimmungen.',
		'privacy.rightsBody2': 'Kontakt: contact.marfeyx@gmail.com',

		'nf.code': '404',
		'nf.title': 'Seite nicht gefunden',
		'nf.body': 'Der Link ist ungültig oder die Seite wurde verschoben. Wähle unten ein Ziel.',
		'nf.home': 'Zur Startseite',
		'nf.offers': 'Angebote ansehen',
		'nf.custom': 'Paket anpassen',
		'nf.contact': 'Kontakt'
	}
};


const getLocale = () => (document.body?.getAttribute('data-lang') === 'de' ? 'de' : 'en');

window.t = (key, fallback = '') => {
	const dict = translations[getLocale()] || translations.en;
	return (key && dict && dict[key] != null) ? dict[key] : (fallback || '');
};

const applyTheme = (theme) => {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem(THEME_KEY, theme);

	const icon = document.querySelector('#theme-toggle .theme-icon');
	if (icon) icon.textContent = theme === 'light' ? '🌞' : '🌙';

	let meta = document.querySelector('meta[name="theme-color"][data-dynamic="true"]');
	if (!meta) {
		meta = document.createElement('meta');
		meta.name = 'theme-color';
		meta.dataset.dynamic = 'true';
		document.head.appendChild(meta);
	}
	meta.content = theme === 'light' ? '#f9f9f9' : '#010101';
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

	const promptEl = document.createElement('div');
	promptEl.style.position = 'fixed';
	promptEl.style.bottom = '20px';
	promptEl.style.left = '20px';
	promptEl.style.right = '20px';
	promptEl.style.maxWidth = '520px';
	promptEl.style.margin = '0 auto';
	promptEl.style.padding = '14px 16px';
	promptEl.style.border = '1px solid rgba(255,255,255,0.15)';
	promptEl.style.borderRadius = '10px';
	promptEl.style.background = 'rgba(0,0,0,0.6)';
	promptEl.style.backdropFilter = 'blur(10px)';
	promptEl.style.color = '#fff';
	promptEl.style.display = 'flex';
	promptEl.style.alignItems = 'center';
	promptEl.style.justifyContent = 'space-between';
	promptEl.style.gap = '12px';
	promptEl.style.zIndex = '9999';

	const text = document.createElement('span');
	text.textContent = 'Choose language:';

	const buttons = document.createElement('div');
	buttons.style.display = 'flex';
	buttons.style.gap = '10px';

	const makeButton = (label, lang) => {
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.textContent = label;
		btn.style.padding = '8px 12px';
		btn.style.borderRadius = '10px';
		btn.style.border = '1px solid rgba(255,255,255,0.25)';
		btn.style.background = 'transparent';
		btn.style.color = '#fff';
		btn.style.cursor = 'pointer';
		btn.addEventListener('click', () => {
			applyLanguage(lang, { persist: true });
			promptEl.remove();
		});
		return btn;
	};

	buttons.appendChild(makeButton('English', 'en'));
	buttons.appendChild(makeButton('Deutsch', 'de'));

	promptEl.appendChild(text);
	promptEl.appendChild(buttons);
	document.body.appendChild(promptEl);

	setTimeout(() => promptEl.remove(), 10000);
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

	const menuToggle = document.getElementById('menu-toggle');
	const nav = document.getElementById('site-nav');
	if (menuToggle && nav) {
		const closeMenu = () => {
			document.body.removeAttribute('data-menu-open');
			menuToggle.setAttribute('aria-expanded', 'false');
		};
		const openMenu = () => {
			document.body.setAttribute('data-menu-open', 'true');
			menuToggle.setAttribute('aria-expanded', 'true');
		};

		menuToggle.addEventListener('click', () => {
			const isOpen = document.body.hasAttribute('data-menu-open');
			(isOpen ? closeMenu : openMenu)();
		});

		nav.addEventListener('click', (e) => {
			if (e.target.closest('a')) closeMenu();
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') closeMenu();
		});

		document.addEventListener('click', (e) => {
			if (!document.body.hasAttribute('data-menu-open')) return;
			if (e.target.closest('header') || e.target.closest('#site-nav')) return;
			closeMenu();
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 900) closeMenu();
		});
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

	const forms = Array.from(document.querySelectorAll('form[action]'));
	forms.forEach((form) => {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();

			const status = form.querySelector('.form-status') || document.getElementById('form-status');
			const locale = getLocale();
			const dict = translations[locale] || translations.en;

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
	});
};

document.addEventListener('DOMContentLoaded', init);