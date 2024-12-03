import React, { useState, createContext, useContext, useEffect } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
  const [modalData, setModalData] = useState({});
  const [view, setView] = useState('');
  const [showModal, setShowModal] = useState(false);

  //TODO: set up to use Saif's hook to get server-side data and change data param to id
  const loadModalData = (data, viewType) => {
    setModalData({...data});
    setView(viewType);
  }
  
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    if(showModal){
      document.documentElement.style.overflowY = "hidden"
    } else if (!showModal) {
      document.documentElement.style.overflowY = "scroll"
    }
  }, [showModal])

  return (
    <ModalContext.Provider value={{ toggleModal, loadModalData, modalData, showModal, view }}>
      {children}
    </ModalContext.Provider>
  )
};

const useModal = () => {
  return useContext(ModalContext);
}

export {ModalProvider, useModal}
