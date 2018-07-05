flightSearchWebsiteProviders.push({
    category: "Metasearchers",
    title: "Skyscanner.de",
    openWebsite: function(flightSearchModel) {

        let skyscannerUrl = "https://www.skyscanner.de/transport/d";
        for (let i=0; i < flightSearchModel.flights.length; i++) {
            skyscannerUrl += "/" + flightSearchModel.flights[i].departureAirport;
            skyscannerUrl += "/" + flightSearchModel.flights[i].departureDate;
            skyscannerUrl += "/" + flightSearchModel.flights[i].arrivalAirport;
        }
        skyscannerUrl += "?adults=" + (flightSearchModel.numberOfPassengers == null ? 1 : flightSearchModel.numberOfPassengers);
        skyscannerUrl += "&ref=home#results";
        window.open(skyscannerUrl, "_blank");

    }
});
