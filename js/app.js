var kingdoms = [{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark"},{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen"},{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign"}];


function getKingdoms(obj){
	for(var i = 0; i<obj.length; i++){
		console.log(obj[i]);
	var cardElem = document.createElement("div");
	cardElem.className = "card";
	contents.appendChild(cardElem);

	var crestElem = document.createElement("img");
	crestElem.className = "logo";
	crestElem.src = obj[i].crest;
	cardElem.appendChild(crestElem);

	var houseElem = document.createElement("div");
	houseElem.className = "theHouse";
	houseElem.innerHTML = "House: " + obj[i].house;
	cardElem.appendChild(houseElem);

	var regionElem = document.createElement("div");
	regionElem.className = "theRegion";
	regionElem.innerHTML = "Region: " + obj[i].region;
	cardElem.appendChild(regionElem);

	var lordElem = document.createElement("div");
	lordElem.className = "thelord";
	lordElem.innerHTML = "Lord: " + obj[i].lord;
	cardElem.appendChild(lordElem);

	var allegianceElem = document.createElement("div");
	allegianceElem.className = "theallegiance";
	allegianceElem.innerHTML = "Allgiance: " + obj[i].allegiance;
	cardElem.appendChild(allegianceElem);
	}
}
getKingdoms(kingdoms);
