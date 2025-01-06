# Property Pulse  

**Property Pulse** is a web application designed to simplify the process of finding, listing, and managing rental properties. This full-stack application combines cutting-edge technologies and frameworks to deliver a seamless user experience.  

## Features  

- **User Authentication**  
  - Google OAuth integration via NextAuth.js.  
  - Secure user login and profile management.  

- **Property Listings**  
  - Users can create, update, and delete property listings.  
  - Upload property images via Cloudinary for optimized storage.  
  - Add detailed property descriptions, prices, and availability.  

- **Search and Filtering**  
  - Search for properties using keywords.  
  - Filter by location, price range, and property type.  

- **Interactive Maps**  
  - Integration with Mapbox for detailed map views of property locations.  
  - Pinpoint properties and navigate with ease.  

- **Real-Time Messaging**  
  - Internal chat functionality between users.  
  - Notifications for new messages and updates.  

## Technologies Used  

### Frontend  
- **Next.js**: Server-side rendering for fast page loads and SEO optimization.  
- **React**: Component-based UI development.  
- **Tailwind CSS**: Utility-first styling for a responsive and modern design.  

### Backend  
- **Next.js API Routes**: Handles server-side logic and routes.  
- **MongoDB**: A NoSQL database for scalable and flexible data management.  
- **NextAuth.js**: Manages secure authentication and session handling.  

### Other Integrations  
- **Cloudinary**: Image hosting and optimization for property photos.  
- **Mapbox**: Interactive map integration for property locations.  
- **Socket.io**: (Optional) Real-time notifications for messages and updates.  

## Project Logic  

1. **Authentication**  
   - Users can log in with Google, ensuring secure access to their profiles and features.  

2. **Property Management**  
   - Authenticated users can manage their property listings, including adding images, setting prices, and providing descriptions.  

3. **Search Functionality**  
   - A search bar and advanced filters allow users to find properties that match their needs.  

4. **Messaging**  
   - Buyers and renters can communicate via real-time chat, making negotiations easier.  

5. **Responsive Design**  
   - The app is fully responsive, providing an optimized experience across desktop, tablet, and mobile devices.  

## How to Run Locally  

1. Clone the repository:  
   ```bash
   git clone https://github.com/MykolaDotsenko/property-pulse.git  
   cd property-pulse  
