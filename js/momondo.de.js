flightsearcherWebsiteProviders.momondo = {
    category: "Metasearchers",
    title: "Momondo.de",
    openWebsite: function(flightSearchModel) {

        let momondoUrl = "https://www.momondo.de/flightsearch/";
        momondoUrl += "?Search=true";
        momondoUrl += "&TripType=4";
        momondoUrl += "&SegNo=" + flightSearchModel.flights.length;
        for (let i=0; i < flightSearchModel.flights.length; i++) {
            momondoUrl += "&SO" + i + "=" + flightSearchModel.flights[i].departureAirport;
            momondoUrl += "&SD" + i + "=" + flightSearchModel.flights[i].arrivalAirport;
            momondoUrl += "&SDP" + i + "=" + moment(flightSearchModel.flights[i].date, "YYYY-MM-DD").format("DD-MM-YYYY");
        }
        momondoUrl += "&AD=" + (flightSearchModel.numberOfPassengers == null ? 1 : flightSearchModel.numberOfPassengers);
        momondoUrl += "&DO=false";
        momondoUrl += "&NA=true";
        momondoUrl += "&currency=EUR";

        window.open(momondoUrl, "_blank");

    }
};
