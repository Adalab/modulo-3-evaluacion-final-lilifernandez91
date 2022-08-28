// Función que obtiene una propiedad del local storage
// Si esta propiedad no existe porque es la primera vez que la usuaria entra en la página, la función devuelve el valor de defaultValue

const get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
      return defaultValue;
    } else {
      return JSON.parse(localStorageData);
    }
  };
  
  // Función que guarda una propiedad y su valor en el local storage
  const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const objectToExport = {
    get: get,
    set: set, 
  };
  
  export default objectToExport;