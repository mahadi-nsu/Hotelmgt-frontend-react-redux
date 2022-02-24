import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AddModal from '../UI/AddModal/AddModal';
import Searchbar from '../UI/SearchBar/Searchbar';
import { showToast } from '../UI/Toast/ShowToast';

const Header = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  return (
    <div className="fixed w-screen bg-white shadow-md">
      <nav className="mx-auto my-0 px-20 py-2 flex justify-between gap-2 md:gap-4 
        sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl">
        <Searchbar />
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white 
        rounded-lg border border-gray-300 hover:text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
        >
          Add  <span className="pl-1 hidden md:block"> Person</span>
        </button>
        {
          showAddModal &&
          <AddModal
            showAddModal={showAddModal}
            setShowAddModal={setShowAddModal}
            showToast={showToast}
          />
        }
      </nav >
      <ToastContainer />
    </div>
  );
}

export default Header;
