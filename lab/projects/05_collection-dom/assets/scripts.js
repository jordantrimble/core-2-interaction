// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Car" style="background: ${ dataItem['color'] }">
			<p>animal: ${ dataItem['animal'] }</p>
			<p>date: ${ dataItem['date'] }</p>
			<p>reason: ${ dataItem['reason'] }</p>
		</div>
	`
}

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});