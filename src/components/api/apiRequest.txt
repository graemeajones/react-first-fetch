/*
 * --------------------------------------------------------------------------------------------------------
 * Function that makes and sends network requests to the server i.e. API
 * @param  {String}  apiURL    Specifiies URL of API domain e.g. "https://my.api.mockaroo.com"
 * @param  {String}  endpoint  Specifies service at the API e.g. "Modules" or "/Users/3"
 * @param  {String}  key       Optional string for any key  e.g. "?key=bb6adbc0" for Graeme's mockaroo site
 * @param  {String}  method    Choose GET, POST, PUT, DELETE - default is GET
 * @param  {String}  body      Object containing data to be sent to API endpoint e.g. a new module
 * @return {Object}            { success: true or false, response: a JSON data object from the API }
 * --------------------------------------------------------------------------------------------------------
 */

export async function apiRequest(apiURL, endpoint, key, method = "GET", body = null) {

  // Build fetch parameters
  let requestObj = { method: method }; // *GET, POST, PUT, DELETE, etc.
  if (body) requestObj = { ...requestObj, body: body };
  const endpointAddress = apiURL + endpoint + key;

  // Run fetch and build and return response object
  try {
    const response = await fetch(endpointAddress, requestObj);
    return (response.status >= 200) && (response.status <= 299)
      ? { success: true, response: await response.json() }
      : { success: false, response: response }

  } catch (error) {
    throw new Error(`Error in apiRequest: ${error}`);
  }
}
