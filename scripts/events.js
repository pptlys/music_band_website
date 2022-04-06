/*
   Web Development Final Assignment
   
   Groupe

   Filename: events.js

   Date: April 7, 2022
*/



/**
 * Function to modify events list display upon selecting filters and clicking search button
 */
function filterSearch() {

    //retrieve upcoming events header and description
    let upcomingEventsHeader = document.getElementById("upcoming_events_header");
    let upcomingEventsText = document.getElementById("upcoming_events_text");

    //set initial display
    /*upcomingEventsHeader.innerText = "All upcoming events";
    upcomingEventsText.style.display = "none";

    for (const element of document.getElementsByClassName("events_item")) {
        element.style.display = "flex";
    }*/

    //retrieve selected indices of filters
    let seriesFilter = document.getElementById("series_filter");
    let seriesFilterIndex = seriesFilter.selectedIndex;

    let seasonFilter = document.getElementById("season_filter");
    let seasonFilterIndex = seasonFilter.selectedIndex;

    let monthFilter = document.getElementById("month_filter");
    let monthFilterIndex = monthFilter.selectedIndex;

    //allow only one filter to be applied at a time
    if (!(
        (seriesFilterIndex === 0 && seasonFilterIndex === 0 && monthFilterIndex === 0) ||
        (seriesFilterIndex != 0 && seasonFilterIndex === 0 && monthFilterIndex === 0) ||
        (seriesFilterIndex === 0 && seasonFilterIndex != 0 && monthFilterIndex === 0) ||
        (seriesFilterIndex === 0 && seasonFilterIndex === 0 && monthFilterIndex != 0))) {
        alert("Please select only one search filter");

        //don't run the rest of the code
        return;
    }

    //if all filters are on default settings, leave display as is
    if ((seriesFilterIndex === 0 && seasonFilterIndex === 0 && monthFilterIndex === 0)) {

        upcomingEventsHeader.innerText = "All upcoming events";
        upcomingEventsText.style.display = "none";

        for (const element of document.getElementsByClassName("events_item")) {
            element.style.display = "flex";
        }

        return;
    }

    //hide all of the display items
    for (const element of document.getElementsByClassName("events_item")) {
        element.style.display = "none";
    }

    //display only items with specified classes

    //if filtering by concert series
    if (seriesFilterIndex != 0) {

        let selectedSeries = seriesFilter.options[seriesFilterIndex].value;

        upcomingEventsHeader.innerHTML = "All upcoming events for: '" + selectedSeries + "'";

        //Valley Classics
        if (selectedSeries === "Valley Classics Concert Series") {
            for (const element of document.getElementsByClassName("valley_classics")) {
                element.style.display = "flex";
            }
        }

        //Tuesday Summer Concerts
        else if (selectedSeries === "Tuesday Summer Concert Series") {
            for (const element of document.getElementsByClassName("tuesday_summer_concerts")) {
                element.style.display = "flex";
            }
        }
    }

    //if filtering by season
    else if (seasonFilterIndex != 0) {
        
        let selectedSeason = seasonFilter.options[seasonFilterIndex].value;

        upcomingEventsHeader.innerHTML = "All upcoming events for: '" + selectedSeason + "'";

        upcomingEventsText.style.display = "none";

        //Spring
        if (selectedSeason === "Spring") {
            for (const element of document.getElementsByClassName("spring")) {
                element.style.display = "flex";
            }
        }

        //Summer
        else if (selectedSeason === "Summer") {
            for (const element of document.getElementsByClassName("summer")) {
                element.style.display = "flex";
            }
        }

        //Fall or Winter (no concerts available for now)
        else {
            upcomingEventsHeader.innerHTML = "No upcoming events for: '" + selectedSeason + "'";

            upcomingEventsText.style.display = "block";
            upcomingEventsText.innerText = "Stay tuned for updates to our upcoming events!";
        }
    }

    //if filtering by month
    else if (monthFilterIndex != 0) {
        let selectedMonth = monthFilter.options[monthFilterIndex].value;

        upcomingEventsHeader.innerHTML = "All upcoming events for: '" + selectedMonth + "'";
        upcomingEventsText.style.display = "none";

        //April
        if (selectedMonth === "April") {
            for (const element of document.getElementsByClassName("april")) {
                element.style.display = "flex";
            }
        }

        //May
        else if (selectedMonth === "May") {
            for (const element of document.getElementsByClassName("may")) {
                element.style.display = "flex";
            }

        }

        //June
        else if (selectedMonth === "June") {
            for (const element of document.getElementsByClassName("june")) {
                element.style.display = "flex";
            }

        }

        //July
        else if (selectedMonth === "July") {
            for (const element of document.getElementsByClassName("july")) {
                element.style.display = "flex";
            }

        }

        //August
        else if (selectedMonth === "August") {
            for (const element of document.getElementsByClassName("august")) {
                element.style.display = "flex";
            }
        }

        //other months (no concerts available for now)
        else {
            upcomingEventsHeader.innerHTML = "No upcoming events for: '" + selectedMonth + "'";
            upcomingEventsText.style.display = "block";
            upcomingEventsText.innerText = "Stay tuned for updated upcoming events or select another month";
        }
    }


}

/**
 * Function to reset the search filters and display to default settings
 */
function resetSearch() {

    //reset upcoming events header and description
    document.getElementById("upcoming_events_header").innerText = "All upcoming events";
    document.getElementById("upcoming_events_text").style.display = "none";

    //reset search filter indices to 0 (default)
    document.getElementById("series_filter").selectedIndex = "0";
    document.getElementById("season_filter").selectedIndex = "0";
    document.getElementById("month_filter").selectedIndex = "0";

    //display all events
    for (const element of document.getElementsByClassName("events_item")) {
        element.style.display = "flex";
    }
}


/**
 * Function to dynamically set the tooltip text
 */
function setTooltipText() {

    //variables to declare all of the concert dates
    let concertDate1 = new Date('April 29, 2022 19:30:00 EDT');
    let concertDate2 = new Date('May 1, 2022 15:00:00 EDT');
    let concertDate3 = new Date('June 28, 2022 19:30:00 EDT');
    let concertDate4 = new Date('July 5, 2022 19:30:00 EDT');
    let concertDate5 = new Date('July 12, 2022 19:30:00 EDT');
    let concertDate6 = new Date('July 26, 2022 19:30:00 EDT');
    let concertDate7 = new Date('August 2, 2022 19:30:00 EDT');
    let concertDate8 = new Date('August 9, 2022 19:30:00 EDT');
    let concertDate9 = new Date('August 23, 2022 19:30:00 EDT');

    //calculate days left until each event
    let daysLeftConcert1 = calculateDaysUntilEvent(concertDate1);
    let daysLeftConcert2 = calculateDaysUntilEvent(concertDate2);
    let daysLeftConcert3 = calculateDaysUntilEvent(concertDate3);
    let daysLeftConcert4 = calculateDaysUntilEvent(concertDate4);
    let daysLeftConcert5 = calculateDaysUntilEvent(concertDate5);
    let daysLeftConcert6 = calculateDaysUntilEvent(concertDate6);
    let daysLeftConcert7 = calculateDaysUntilEvent(concertDate7);
    let daysLeftConcert8 = calculateDaysUntilEvent(concertDate8);
    let daysLeftConcert9 = calculateDaysUntilEvent(concertDate9);

    //set the text for each tooltip
    document.getElementById("tt_concert1").innerText = "Only " + daysLeftConcert1 + " days left until the event!";
    document.getElementById("tt_concert2").innerText = "Only " + daysLeftConcert2 + " days left until the event!";
    document.getElementById("tt_concert3").innerText = "Only " + daysLeftConcert3 + " days left until the event!";
    document.getElementById("tt_concert4").innerText = "Only " + daysLeftConcert4 + " days left until the event!";
    document.getElementById("tt_concert5").innerText = "Only " + daysLeftConcert5 + " days left until the event!";
    document.getElementById("tt_concert6").innerText = "Only " + daysLeftConcert6 + " days left until the event!";
    document.getElementById("tt_concert7").innerText = "Only " + daysLeftConcert7 + " days left until the event!";
    document.getElementById("tt_concert8").innerText = "Only " + daysLeftConcert8 + " days left until the event!";
    document.getElementById("tt_concert9").innerText = "Only " + daysLeftConcert9 + " days left until the event!";
}


/**
 * 
 * @param {Date of the event} concertDate 
 * @returns Days left until the event
 */
function calculateDaysUntilEvent(concertDate) {
    //get current date
    let dateToday = new Date();

    //convert time difference between dates to days and round down
    let daysLeft = Math.floor((concertDate.getTime() - dateToday.getTime())/86400000);

    return daysLeft;
}

function lang_toggle(){
    let current_lang = document.documentElement.lang
    
    if (current_lang === 'en') {
        window.open("/index_fr.html", "_self")
    } else {
        window.open("/index.html", "_self")
    }
}