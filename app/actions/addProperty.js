'use server';



async function addProperty(formData) {
    //access all values from amenities
  const amenities = formData.getAll('amenities');
  const images = formData
  .getAll('images')
  .filter((image) => image.name !== '')
  .map((image) => image.name);
}


export default addProperty;