flightSearchWebsiteProviders.push({
    category: "Airlines",
    title: "KLM.de",
    openWebsite: function(flightSearchModel) {

        let klmUrl = "https://www.klm.com/travel/de_DE";
        klmUrl += "/apps/ebt/calendar.htm?application=EBT7"
        klmUrl += "&numberOfAdults=" + flightSearchModel.numberOfPassengers == null ? 1 : flightSearchModel.numberOfPassengers;
        klmUrl += "&trip=";
        for (let i=0; i < flightSearchModel.flights.length; i++) {
            klmUrl += (i > 0 ? "-" : "");
            klmUrl += flightSearchModel.flights[i].departureAirport + ":A:";
            klmUrl += moment(flightSearchModel.flights[i].departureDate, "YYYY-MM-DD").format("YYYYMMDD");
            klmUrl += "%3E" + flightSearchModel.flights[i].arrivalAirport + ":A";
        }

        window.open(klmUrl, "_blank");

    }
});
