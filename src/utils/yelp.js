const apiKey = '';

const search = async (term, location, sort, limit, offset) => {
  const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
  const endpoint = '/businesses/search';
  const params = `?location=${location}&term=${term}&sort_by=${sort}&limit=${limit}&offset=${offset}`;
  const urlToFetch = baseUrl + endpoint + params;

  try {
    const response = await fetch(urlToFetch, { headers: { "Authorization": 'Bearer ' + apiKey, "accept": "application/json"}});
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.businesses;
    }
    throw new Error('request failed');
  } catch (error) {
    console.log('error connecting: ' + error);
  }

}
export default search;
