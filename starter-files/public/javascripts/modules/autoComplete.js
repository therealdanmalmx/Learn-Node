const autocomplete = (input, addressInput, latInput, lngInput) => {
  if (!input) {
    return;
  }
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener("place_changed", () => {
    const place = dropdown.getPlace();
    input.value = place.name;
    addressInput.value = place.formatted_address;
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  input.on("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
};

export default autocomplete;
