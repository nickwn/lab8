function initMap() {
	// add your code here
	L.mapquest.key = 'YlIE7PMYTP9dexHdi2uSOwQLo5JOT8Xl';
	var map = L.mapquest.map('map', {
		center: [32.878643, -117.235586],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878643, -117.235586]).addTo(map);
}