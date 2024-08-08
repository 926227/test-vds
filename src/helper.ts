import { domain, strapi } from './constants'

export const parseHomePageData = (rowData: any) => {
  const { data } = rowData
  const { attributes } = data
  const { Name, img } = attributes
  const imgUrl = img.data[0].attributes.url

  return {
    name: Name,
    img: `${domain}${strapi}${imgUrl}`,
  }
}
