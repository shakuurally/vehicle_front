import Grid from "../../components/Loaders/Grid";
import { useVehicleData } from "../../utils/utils";

function Dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { error, isLoading, vehicles } = useVehicleData();
  return (
    <div className="px-4 pt-6">
      {error ||(!vehicles) && (
        <h1 className="flex mt-[30%]  items-center justify-center w-full h-full text-center">
          {error}..😒
        </h1>
      )}
      {isLoading && <Grid />}
      <div className="grid grid-cols-1 gap-10 mb-6 w-full md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {vehicles &&
          vehicles.map((vehicle) => (
            <>
              <div className="flex shadow-lg p-4 items-center">
                <div className="inline-flex flex-shrink-0  justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                  <i
                    className="ni ni-money-coins text-lg"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <span className="text-2xl font-bold leading-none text-gray-900">
                    {vehicle.location.latitude.toFixed(3).toString()}
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    latitude
                  </h3>
                </div>
              </div>
              <div className="flex shadow-lg p-4 items-center">
                <div className="inline-flex flex-shrink-0  justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                  <i
                    className="ni ni-money-coins text-lg"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <span className="text-2xl font-bold leading-none text-gray-900">
                    {vehicle.engineOil.lifeRemaining.toFixed(3).toString()}
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    life Remaining
                  </h3>
                </div>
              </div>
              <div className="flex shadow-lg p-4 items-center">
                <div className="inline-flex flex-shrink-0  justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                  <i
                    className="ni ni-money-coins text-lg"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <span className="text-2xl font-bold leading-none text-gray-900">
                    {vehicle.fuel.range}
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Fuel Range
                  </h3>
                </div>
              </div>
              <div className="flex shadow-lg p-4 items-center">
                <div className="inline-flex flex-shrink-0  justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
                  <i
                    className="ni ni-money-coins text-lg"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <span className="text-2xl font-bold leading-none text-gray-900">
                    {vehicle.odometer.distance}
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    distance
                  </h3>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
