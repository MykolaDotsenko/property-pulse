import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox heading="For Renters" buttonInfo={{
            text: "Browse Properties",
            link: "/properties",
            backgroundColor: "bg-black",
          }}>
            {" "}
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Properties Owners" buttonInfo={{
                text: "Add Properties",
                link: "/properties/add",
                backgroundColor: "bg-blue-500",
              }}
            backgroundColor="bg-blue-100"
          >
            {" "}
            List your property and reach thousands of renters.{" "}
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
