import { useState } from "react";

export const useModal = () => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log("Clicked! Modal show?", showModal)
  }

  const loadModalData = (data) => {
    setModalData({...data});
  }

  return { toggleModal, loadModalData, modalData, showModal };
};
