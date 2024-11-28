import React, { useState, createContext, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  //TODO: set up to use Saif's hook to get server-side data and change data param to id
  const loadModalData = (data) => {
    setModalData({...data});
  }
  
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <ModalContext.Provider value={{ toggleModal, loadModalData, modalData, showModal }}>
      {children}
    </ModalContext.Provider>
  )
};

const useModal = () => {
  return useContext(ModalContext);
}

export {ModalProvider, useModal}
