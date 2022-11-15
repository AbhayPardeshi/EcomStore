import { Slide } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";

export const Toast = ({ type, msg }) => {
  return Toast(msg, {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    position: toast.POSITION.TOP_RIGHT,
    transition: Slide,
    type: type,
  });
};
