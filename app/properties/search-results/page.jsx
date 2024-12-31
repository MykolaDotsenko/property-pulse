import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";


const SerchResultsPage = async ({ searchParams: { location, propertyType } }) => {
await connectDB();

const locationPattern = new RegExp(location, "i");

let query = {
    $or: [
        { location: locationPattern },
        { description: locationPattern },
        {'location.street': locationPattern },
        {'location.city': locationPattern },
        {'location.state': locationPattern },
        {'location.zipcode': locationPattern },

    ]
};


if(propertyType && propertyType !== 'All') {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern;
}

const propertiesQueryResults = await Property.find(query).lean();
const properties = convertToSerializableObject(propertiesQueryResults);

 return (
   <div>
     <h1>Search Results Page</h1>
   </div>
 );
}

  export default SerchResultsPage;