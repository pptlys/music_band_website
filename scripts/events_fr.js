/*
   Web Development Final Assignment
   
   Groupe

   Filename: events_fr.js

   Date: April 7, 2022
*/



/**
 * Function to modify events list display upon selecting filters and clicking search button
 */
function filterSearch() {

    //retrieve upcoming events header and description
    let upcomingEventsHeader = document.getElementById("upcoming_events_header");
    let upcomingEventsText = document.getElementById("upcoming_events_text");

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
        alert("Veuillez choisir une (1) seule critère");

        //don't run the rest of the code
        return;
    }

    //if all filters are on default settings, leave display as is
    if ((seriesFilterIndex === 0 && seasonFilterIndex === 0 && monthFilterIndex === 0)) {

        upcomingEventsHeader.innerText = "Tous les événements à venir";
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

        upcomingEventsHeader.innerHTML = "Événements à venir: '" + selectedSeries + "'";

        //Valley Classics
        if (selectedSeries === "Les classiques de la vallée") {
            for (const element of document.getElementsByClassName("valley_classics")) {
                element.style.display = "flex";
            }
        }

        //Tuesday Summer Concerts
        else if (selectedSeries === "Les mardis soir chez Apple Hill") {
            for (const element of document.getElementsByClassName("tuesday_summer_concerts")) {
                element.style.display = "flex";
            }
        }
    }

    //if filtering by season
    else if (seasonFilterIndex != 0) {
        
        let selectedSeason = seasonFilter.options[seasonFilterIndex].value;

        upcomingEventsHeader.innerHTML = "Événements à venir: '" + selectedSeason + "'";

        upcomingEventsText.style.display = "none";

        //Spring
        if (selectedSeason === "printemps") {
            for (const element of document.getElementsByClassName("spring")) {
                element.style.display = "flex";
            }
        }

        //Summer
        else if (selectedSeason === "été") {
            for (const element of document.getElementsByClassName("summer")) {
                element.style.display = "flex";
            }
        }

        //Fall or Winter (no concerts available for now)
        else {
            upcomingEventsHeader.innerHTML = "Aucun résultat ne correspond au critère: '" + selectedSeason + "'";

            upcomingEventsText.style.display = "block";
            upcomingEventsText.innerText = "Restez à l'écoute de nos prochains événements!";
        }
    }

    //if filtering by month
    else if (monthFilterIndex != 0) {
        let selectedMonth = monthFilter.options[monthFilterIndex].value;

        upcomingEventsHeader.innerHTML = "Événements à venir: '" + selectedMonth + "'";
        upcomingEventsText.style.display = "none";

        //April
        if (selectedMonth === "avril") {
            for (const element of document.getElementsByClassName("april")) {
                element.style.display = "flex";
            }
        }

        //May
        else if (selectedMonth === "mai") {
            for (const element of document.getElementsByClassName("may")) {
                element.style.display = "flex";
            }

        }

        //June
        else if (selectedMonth === "juin") {
            for (const element of document.getElementsByClassName("june")) {
                element.style.display = "flex";
            }

        }

        //July
        else if (selectedMonth === "juillet") {
            for (const element of document.getElementsByClassName("july")) {
                element.style.display = "flex";
            }

        }

        //August
        else if (selectedMonth === "août") {
            for (const element of document.getElementsByClassName("august")) {
                element.style.display = "flex";
            }
        }

        //other months (no concerts available for now)
        else {
            upcomingEventsHeader.innerHTML = "Aucun résultat ne correspond au critère: '" + selectedMonth + "'";
            upcomingEventsText.style.display = "block";
            upcomingEventsText.innerText = "Restez à l'écoute de nos prochains événements!";
        }
    }


}

/**
 * Function to reset the search filters and display to default settings
 */
function resetSearch() {

    //reset upcoming events header and description
    document.getElementById("upcoming_events_header").innerText = "Tous les événements à venir";
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
    document.getElementById("tt_concert1").innerText = "Seulement " + daysLeftConcert1 + " jours avant l'événement!";
    document.getElementById("tt_concert2").innerText = "Seulement " + daysLeftConcert2 + " jours avant l'événement!";
    document.getElementById("tt_concert3").innerText = "Seulement " + daysLeftConcert3 + " jours avant l'événement!";
    document.getElementById("tt_concert4").innerText = "Seulement " + daysLeftConcert4 + " jours avant l'événement!";
    document.getElementById("tt_concert5").innerText = "Seulement " + daysLeftConcert5 + " jours avant l'événement!";
    document.getElementById("tt_concert6").innerText = "Seulement " + daysLeftConcert6 + " jours avant l'événement!";
    document.getElementById("tt_concert7").innerText = "Seulement " + daysLeftConcert7 + " jours avant l'événement!";
    document.getElementById("tt_concert8").innerText = "Seulement " + daysLeftConcert8 + " jours avant l'événement!";
    document.getElementById("tt_concert9").innerText = "Seulement " + daysLeftConcert9 + " jours avant l'événement!";
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
    let lang_toggle = document.getElementById("lang-toggle")
    let current_lang = document.documentElement.lang
    
    if (current_lang === 'fr') {
        window.open("../pages/events_en.html", "_self")
    } else {
        window.open("../pages/events_fr.html", "_self")
    }
}