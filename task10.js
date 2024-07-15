//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively
async function getInfo(url, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          let response = await fetch(url);
          let json = await response.json();
          resolve(json);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  }
  
  async function fetchDataWithIntervals() {
    const urls = [
      { url: 'https://api.agify.io?name=michael', delay: 3000 },
      { url: 'https://api.genderize.io?name=michael', delay: 5000 },
      { url: 'https://api.nationalize.io?name=michael', delay: 7000 }
    ];
  
    for (const { url, delay } of urls) {
      try {
        const data = await getInfo(url, delay);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  fetchDataWithIntervals();
  