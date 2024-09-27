'use server';



async function addProperty(formData) {
    //access all values from amenities
  const amenities = formData.getAll('amenities');
  const images = formData.getAll('images');
}


export default addProperty;