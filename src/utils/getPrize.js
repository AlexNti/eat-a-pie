export default async function (token) {
  try {
    const url = `${process.env.GATSBY_BASE_URL}/${process.env.GATSBY_PRICE_URL}`;
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return result.json();
  } catch (e) {
    console.log(e);
  }
}
