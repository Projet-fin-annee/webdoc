export const getCountries = () =>
  fetch("http://localhost:8888/countries").then((resp) => resp.json());

export const getCountry = (country) =>
  fetch(`http://localhost:8888/countries/${country}`).then((resp) =>
    resp.json()
  );
