import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userDeleteAction } from "../../store/actions/DeleteUser/deleteUser";
import { allUsersData } from "../../store/actions/users/users";

const PersonCard = ({ person, setShowEditModal, setselectedPerson }) => {
  const dispatch = useDispatch();

  const handleEditButton = () => {
    setShowEditModal(true);
    setselectedPerson(person);
  };

  const handleDelete = (userId) => {
    // toast.info("Working", {
    //   position: "top-center",
    //   hideProgressBar: true,
    //   autoClose: 500,
    // });
    const response = dispatch(userDeleteAction(userId));
    response.then((result) => {
      if (result?.type === "DELETE_USER_SUCCESS") {
        dispatch(allUsersData());
        toast.success(result.data.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      } else if (result?.type === "DELETE_USER_FAIL") {
        toast.error(result.error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    });
  };

  return (
    <div className="col-span-12  md:col-span-6 lg:col-span-4  2xl:col-span-3 w-full h-80 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-6">
        <img
          className="my-4 w-24 h-24 rounded-full shadow-lg object-cover"
          src={`https://mahadi-hotel-mgt.herokuapp.com/${
            person && person.image
          }`}
          alt="person"
        />
        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {person && person.name}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {person && person.designation}
        </span>
        <span className="text-center inline-flex items-center overflow-hidden h-16 mt-2 px-5 text-sm text-gray-700 dark:text-gray-400">
          {person && person.description}
        </span>
        <div className="flex mt-2 space-x-3 lg:mt-4">
          <button
            onClick={handleEditButton}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(person && person._id)}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:text-white hover:bg-red-500 focus:ring-4 focus:ring-blue-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
