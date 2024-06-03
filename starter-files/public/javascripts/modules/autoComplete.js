const autocomplete = (input, latInput, lngInput) => {
    if(!input) {
        return;   
    }
    const dropdown = new google.maps.places.Autocomplete(input)
    console.log(input,latInput,lngInput)

};

export default autocomplete;