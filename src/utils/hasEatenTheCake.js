export default async token => {
  try {
    const url = `${process.env.GATSBY_BASE_URL}/${process.env.GATSBY_CAKE_EATEN}`;
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (result.status === 409) {
      throw Error('Not Activated');
    }

    return result.json();
  } catch (e) {
    return Promise.resolve({ data: {}, error: 'Not Activated' });
  }
};
