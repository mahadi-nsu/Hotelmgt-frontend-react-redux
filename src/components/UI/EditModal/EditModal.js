import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editUserAction } from "../../../store/actions/editUser/editUser";
import { allUsersData } from "../../../store/actions/users/users";

const EditModal = ({ showEditModal, setShowEditModal, person }) => {
  const [name, setName] = useState(person.name);
  const [designation, setDesignation] = useState(person.designation);
  const [description, setDescription] = useState(person.description);
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  // IMAGE UPLOAD HANDLER
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const closeEditModal = () => {
    setShowEditModal(false);
    setName("");
    setDesignation("");
    setDescription("");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesignation = (e) => {
    setDesignation(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  // submit
  let formData = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && designation && description) {
      // toast.info("Working", {
      //     position: "top-center",
      //     autoClose: 500,
      //     hideProgressBar: true,
      // });

      formData.append("name", name);
      formData.append("designation", designation);
      formData.append("description", description);
      image && formData.append("image", image);

      const response = dispatch(editUserAction(formData, person._id));

      response.then((result) => {
        if (result.type === "EDIT_USER_SUCCESS") {
          dispatch(allUsersData());
          setShowEditModal(false);
          toast.success(result.data.message, {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 1000,
          });
        } else if (result.type === "EDIT_USER_FAIL") {
          toast.error(result?.error?.message, {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 1000,
          });
        }
      });
    } else {
      toast.error("Fields cannot be empty", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1000,
      });
    }
  };

  return (
    <div
      className={`bg-gray-900 bg-opacity-70 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal md:h-full md:inset-0`}
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button
              onClick={closeEditModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
            action="#"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit Person Info
            </h3>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="flex-1">
                <div className="py-2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => handleName(e)}
                    value={name}
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    required
                  />
                </div>
                <div className="py-2">
                  <label
                    for="designation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Designation
                  </label>
                  <input
                    onChange={handleDesignation}
                    value={designation}
                    type="text"
                    name="designation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    required
                  />
                </div>
                <div className="py-2">
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    onChange={handleDescription}
                    maxLength="120"
                    value={description}
                    type="text"
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="mx-10 p-3 h-full space-y-4 flex flex-col items-center shadow-md rounded-md bg-white">
                <p className="text-xs text-gray-500">Profile Image</p>
                <div className="w-40 h-40 flex justify-center items-center">
                  <img
                    className="max-w-full max-h-full"
                    src={
                      image
                        ? preview
                        : `https://mahadi-hotel-mgt.herokuapp.com/${person.image}`
                    }
                    onError={(e) => {
                      if (
                        e.target.src !==
                        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      ) {
                        e.target.onerror = null;
                        e.target.src =
                          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
                      }
                    }}
                    alt="ProfileImage"
                  />
                </div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept=".jpg, .jpeg .png"
                />
                <button
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                  className="border-2 border-lightYellow w-40 rounded-md text-sm font-semibold py-2"
                >
                  Upload New
                </button>
              </div>
            </div>

            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditModal;
