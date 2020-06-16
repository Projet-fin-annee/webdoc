export const getCountries = () =>
  fetch("http://custom-4c36.frb.io/countries").then((resp) => {
    console.log("resp", resp);
    return resp.json();
  });

export const getCountry = (country) =>
  fetch(`http://custom-4c36.frb.io/countries/${country}`).then((resp) => {
    return resp.json();
  });
