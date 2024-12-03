import ClubMap from './map/ClubMap';

const ClubMapSection = () => {
      return (
            <div className="container py-20">
                  <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-9">
                              <ClubMap />
                        </div>

                        <div className="col-span-12 md:col-span-3 bg-red-50 h-screen"></div>
                  </div>
            </div>
      );
};

export default ClubMapSection;
