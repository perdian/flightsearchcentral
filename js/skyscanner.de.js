flightsearcherWebsiteProviders.skyscanner = {
    category: "Metasearchers",
    title: "Skyscanner.de",
    openWebsite: function(flightSearchModel) {

        let skyscannerUrl = "https://www.skyscanner.de/transport/d";
        for (let i=0; i < flightSearchModel.flights.length; i++) {
            skyscannerUrl += "/" + flightSearchModel.flights[i].departureAirport;
            skyscannerUrl += "/" + flightSearchModel.flights[i].date;
            skyscannerUrl += "/" + flightSearchModel.flights[i].arrivalAirport;
        }
        skyscannerUrl += "?adults=" + (flightSearchModel.numberOfPassengers == null ? 1 : flightSearchModel.numberOfPassengers);
        skyscannerUrl += "&ref=home#results";
        window.open(skyscannerUrl, "_blank");

    }
};



//https://www.skyscanner.de/transport/d/duss/2018-09-08/dtw/las/2018-09-28/duss?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&ref=home#results