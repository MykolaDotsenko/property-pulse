'use server';



async function addProperty(formData) {
    console.log(formData.getAll('amenities'));
}


export default addProperty;