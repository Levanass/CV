// traduccion
	// Inicializar i18next
i18next.use(i18nextHttpBackend).init({
  fallbackLng: 'en',
  debug: true,
  backend: {
    loadPath: '/locales/{{lng}}.json' // Ruta a tus archivos de traducción
  }
}, function(err, t) {
  // initialized and ready to go!
  updateContent();
});
		// Función para cambiar de idioma
function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
  });
}
	
// Función para actualizar el contenido traducido
function updateContent() {
  document.getElementById('presentacion').innerText = i18next.t('presentacion');
  document.getElementById('sobremi').innerText = i18next.t('sobremi');
}
