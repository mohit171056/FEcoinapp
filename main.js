// api url
const api_url =
	"https://api.coincap.io/v2/assets";
	var tot=51;
// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
  // var li= arrayToList(data);
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    //console.log(data);
	let tab =
		`<tr>
		<td>Rank</th>
            <td scope="col">Name</td>
            <td scope="col">Price</td>
            <td scope="col">Market cap</td>
            <td scope="col">VWAP(24 Hrs)</td>
            <td scope="col">Supply</td>
            <td scope="col">Volume(24 hr)</td>
            <td scope="col">Change(24 hr)</td>
		</tr>`;
	var count=0;
	// Loop to access all rows
	for (let r of data.data) {
        let k=r.priceUsd;
      count++;
		tab += `<tr>
    <td>${r.rank}</td>
	<td><img src="https://assets.coincap.io/assets/icons/${(r.symbol).toLowerCase()}%402x.png" width="30px" height="30px">${" "+r.name} ${r.symbol}</td>
	<td>${"$ "+Number(r.priceUsd).toFixed(2)}</td>
	<td>${"$ "+((Number(r.marketCapUsd))/1000000000).toFixed(2)+"b"}</td>
	<td>${"$ "+Number(r.vwap24Hr).toFixed(2)}</td>	
    <td>${(Number(r.supply)/1000000).toFixed(2)+"m"}</td>
	<td>${"$ "+(Number(r.volumeUsd24Hr)/1000000000).toFixed(2)+"b"}</td>
	<td>${Number(r.changePercent24Hr).toFixed(2)+"%"}</td>
</tr>`;
if(count<tot){
	document.getElementById("employees").innerHTML = tab;
    if(tot<52){
    document.getElementById('next').style.display = 'block';
    }
       }
	}
	// Setting innerHTML as tab variable      
}
function nextclicked(){
    document.getElementById('next').style.display = 'none';
   tot=101;
   getapi(api_url);
}

