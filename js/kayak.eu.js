flightSearchWebsiteProviders.push ({
    category: "Metasearchers",
    title: "Kayak.eu",
    openWebsite: function(flightSearchModel) {
        let airports = "";
        let fsLanding = "";
        let fsTakeoff = "";

        for (let i=0; i < flightSearchModel.flights.length; i++) {

            let flight = flightSearchModel.flights[i];
            airports += "/" + flight.departureAirport;
            airports += "-" + flight.arrivalAirport;
            airports += "/" + flight.departureDate;

            fsTakeoff += (i > 0 ? "|" : "");
            if (flight.departureMinTime != null && flight.departureMinTime.length > 0) {
                fsTakeoff += moment(flight.departureMinTime, "HH:mm").format("HHmm");
            }
            if (flight.departureMaxTime != null && flight.departureMaxTime.length > 0) {
                fsTakeoff += "," + moment(flight.departureMaxTime, "HH:mm").format("HHmm");
            }

            fsLanding += (i > 0 ? "|" : "");
            if (flight.arrivalMinTime != null && flight.arrivalMinTime.length > 0) {
                fsLanding += moment(flight.arrivalMinTime, "HH:mm").format("HHmm");
            }
            if (flight.arrivalMaxTime != null && flight.arrivalMaxTime.length > 0) {
                fsLanding += "," + moment(flight.arrivalMaxTime, "HH:mm").format("HHmm");
            }

        }

        let kayakUrl = "https://www.kayak.de/flights" + airports;
        if (flightSearchModel.numberOfPassengers != null && flightSearchModel.numberOfPassengers > 1) {
            kayakUrl += "/" + flightSearchModel.numberOfPassengers + "adults";
        }
        kayakUrl += "?sort=price_a";
        kayakUrl += "&fs=landing=" + fsLanding;
        kayakUrl += ";takeoff=" + fsTakeoff;
        if (flightSearchModel.maxLegDuration != null && flightSearchModel.maxLegDuration.length > 0) {
            let maxLegMoment = moment(flightSearchModel.maxLegDuration, "HH:mm");
            kayakUrl += ";legdur=" + (maxLegMoment.hours() * 60 + maxLegMoment.minutes());
        }
        if (flightSearchModel.maxTransferDuration.length > 0) {
            let maxTransferMoment = moment(flightSearchModel.maxTransferDuration, "HH:mm");
            kayakUrl += ";layoverdur=" + (maxTransferMoment.hours() * 60 + maxTransferMoment.minutes());
        }

        console.log("TO:\n" + kayakUrl);
        window.open(kayakUrl, "_blank");

    }
});
