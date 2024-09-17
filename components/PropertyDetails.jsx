const PropertyDetails = ({property}) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
          <p className="text-orange-700">{property.location.street}
            {property.location.city}, {property.location.state} {property.location.zip}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold">
              <i className="fa fa-xmark text-red-700"></i>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">$1,100</div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">$4,200</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <i className="fa-solid fa-bed"></i> 3
            <span className="hidden sm:inline">Beds</span>
          </p>
          <p>
            <i className="fa-solid fa-bath"></i> 2
            <span className="hidden sm:inline">Baths</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined"></i>
            1,500 <span className="hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">
          This is a beautiful apartment located near the commons
        </p>
        <p className="text-gray-500 mb-4">
          We have a beautiful apartment located near the commons. It is a 2
          bedroom apartment with a full kitchen and bathroom. It is available
          for weekly or monthly rentals.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i> Wifi
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Full kitchen
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Washer & Dryer
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Free Parking
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Hot Tub
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>24/7 Security
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Wheelchair
            Accessible
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Elevator Access
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Dishwasher
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Gym/Fitness
            Center
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Air
            Conditioning
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Balcony/Patio
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Smart TV
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Coffee Maker
          </li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;
