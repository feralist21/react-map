class MapWidget {
    constructor(domNode) {
        this.createMap(domNode);
    }

    async createMap(node) {
        await ymaps.ready();

        this.map = new ymaps.Map(node, {
            center: [55.76, 37.64],
            zoom: 7,
        });
    }

    createPlacemarks(arrayPlacemarks) {
        return arrayPlacemarks.map((mark) => {
            return new ymaps.Placemark([mark[1], mark[0]], {
                iconImageSize: [36, 36],
                iconImageOffset: [-18, -36],
            });
        });
    }

    cleanGeoObject() {
        if (!this.map) {
            return;
        }
        this.map.geoObjects.removeAll();
    }

    createGeoObject(markers) {
        if (!this.map) {
            return;
        }

        const myGeoObjects = new ymaps.GeoObjectCollection();

        markers.forEach((element) => {
            myGeoObjects.add(element);
        });
        this.map.geoObjects.add(myGeoObjects);
        this.map.setBounds(myGeoObjects.getBounds(), {
            checkZoomRange: true,
        });
        this.map.setBounds(myGeoObjects.getBounds(), { checkZoomRange: true }).then(() => {
            if (this.map.getZoom() > 12) this.map.setZoom(12);
        });
    }
}

export { MapWidget };
