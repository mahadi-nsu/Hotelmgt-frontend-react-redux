import React, { useState, useEffect } from "react";
import PersonCard from "../../components/PersonCard/PersonCard";
import EditModal from "../../components/UI/EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { allUsersData } from "../../store/actions/users/users";

import { ToastContainer } from "react-toastify";

function Home() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPerson, setselectedPerson] = useState({});
  const users = useSelector((state) => state.users.data?.data);
  const isUsersLoading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsersData());
  }, [dispatch]);

  return (
    <div className="py-20">
      <div className="grid grid-cols-12 place-items-center px-5 2xl:px-10 gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto my-0">
        {users && users.length > 0 ? (
          users.map((person) => (
            <PersonCard
              person={person}
              setShowEditModal={setShowEditModal}
              showEditModal={showEditModal}
              setselectedPerson={setselectedPerson}
              key={person._id}
            />
          ))
        ) : isUsersLoading ? (
          <div className="text-center text-2xl text-gray-600 col-span-12 h-40  flex justify-center items-center">
            <p>Loading....</p>
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-600 col-span-12 h-40  flex justify-center items-center">
            <p>List Empty, Add New Person</p>
          </div>
        )}
      </div>
      {showEditModal && (
        <EditModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          person={selectedPerson}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default Home;
