export const getCountries = () =>
  fetch("https://custom-4c36.frb.io/countries").then((resp) => resp.json());

export const getCountry = (country) =>
  fetch(`https://custom-4c36.frb.io/countries/${country}`).then((resp) =>
    resp.json()
  );
