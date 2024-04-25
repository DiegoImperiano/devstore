import data from '../data.json'

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const featuredproducts = data.products.filter(produt => produt.featured)
  return Response.json(featuredproducts)
}
