export default class zooMakerApi {
  getApiAnimals = async () => {
    return fetch("https://ernst.mulde.rs/ZooIndustries.json")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch(console.error);
  };
}
