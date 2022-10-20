import nconf from 'nconf'
const checkConfig = (obj: any, lastKey: any) => {
  Object.keys(obj).forEach((key) => {
    //console.log(`key: ${key}, value: ${obj[key]}`)

    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (lastKey) {
        checkConfig(obj[key], `${lastKey}:${key}`);
      } else {
        checkConfig(obj[key], `${key}`);
      }
    } else {
      if (lastKey) {
        console.log(`"${lastKey}:${key}" : ${obj[key]}`);
        if (!nconf.get(`${lastKey}:${key}`)) {
          console.log(`${lastKey}:${key}`);
          nconf.set(`${lastKey}:${key}`, obj[key]);
        }
      } else {
        console.log(`"${key}" : ${obj[key]}`);
        if (!nconf.get(`${key}`)) {
          nconf.set(`${key}`, obj[key]);
        }
      }
    }
  });
}

export default checkConfig