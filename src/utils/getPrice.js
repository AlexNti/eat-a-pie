export default async token => {
  const param = new URLSearchParams({ token }).toString()
  const url = `${process.env.GATSBY_PRICE_URL}?${param}`

  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // simulate delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result)
    }, 3000)
  })
}
