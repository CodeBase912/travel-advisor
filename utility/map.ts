/**
 * @constant options  request options example for Rapid Api Map data
 */
export const options: RequestInit = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Host": process.env.RAPID_API_HOST
      ? process.env.RAPID_API_HOST
      : "",
    "X-RapidAPI-Key": process.env.RAPID_API_KEY
      ? process.env.RAPID_API_KEY
      : "",
  },
  body: '{"geoId":293928,"partySize":2,"reservationTime":"2022-03-07T20:00","sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}},"updateToken":""}',
};

export const getMapData = async (category: string, options: RequestInit) => {
  return await fetch(
    `https://${process.env.RAPID_API_HOST}/${category}/v2/list?currency=USD&units=km&lang=en_US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};
