import React from "react";

function ListPet(props) {
  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Height
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.pets?.map((item, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.name}
                </th>
                <td className="px-6 py-4">{item?.age}</td>
                <td className="px-6 py-4">{item?.weight}</td>
                <td className="px-6 py-4">{item?.height}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="/edit"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <button className="font-medium bg-transparent hover:bg-transparent text-blue-600  hover:border-transparent">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListPet;
