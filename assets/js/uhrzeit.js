console.log("%c=== Uhrzeit & Datum ===", "color:lightgreen");
// Projekt 001 Uhrzeit

setInterval(uhrzeit, 1000);

function uhrzeit() {
    let displayClock = document.getElementById("uhrzeit");
	let wochenTag = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
    ];
    let monate = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
    ];

	let heute = new Date();
	let std = ("0"+heute.getHours()).slice(-2);
	let min = ("0"+heute.getMinutes()).slice(-2);
	let sec =
		heute.getSeconds() < 10 ? "0" + heute.getSeconds() : heute.getSeconds();
	let wochentag = wochenTag[heute.getDay()];
	let tag = heute.getDate();
	let monat = monate[heute.getMonth()];
	let jahr = heute.getFullYear();

    console.log(tag.toString(),monat,jahr.toString());
	displayClock.innerHTML = `
    <div>
    <span class="zifferGross">${std}:${min}</span>
    <span class="zifferMittel">${sec}</span>
    </div>
    <br>
    <span class="zifferKlein">${wochentag}</span>
    <br>
    <span class="zifferKlein">${tag} / ${monat.slice(0, 3)} / ${jahr}</span>`;
    
}
