import { useVehicleData } from "../../utils/utils";
import TableLoader from '../../components/Loaders/TableLoader'
function Index() {
  const {error, isLoading,vehicles, noAccess} = useVehicleData();
  
  return (
    <div>
      <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200">
        <div className="overflow-x-auto rounded-2xl">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Status
                    </th>
                    <th scope="col" className="p-4 lg:p-5"></th>
                  </tr>
                </thead>
                {error &&
                (
                  <div className=" w-full">
                    <h1 className=" mt-[10%] p-3 w-max truncate text-gray-600 text-center">{error}..😒</h1>

                    </div>
                  )}
                {noAccess &&
                (
                  <div className="w-full">
                  <h1 className=" m-[20%] w-max ml-[50%] text-gray-600 text-center">{noAccess}</h1>

                  </div>
                  )}
                {isLoading && (
                   <TableLoader />
                   )}
                <tbody className="bg-white divide-y divide-gray-200">
                  {vehicles &&
                    vehicles.map((vehicle) => (
                      <tr className="hover:bg-gray-100" key={vehicle.id}>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {vehicle.make}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {vehicle.model}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {vehicle.year}
                        </td>
                        <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                          <button
                            type="button"
                            data-modal-toggle="user-modal"
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                              <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            data-modal-toggle="delete-user-modal"
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
