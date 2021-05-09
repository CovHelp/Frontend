import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

export const SuccessToast = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            style={{borderRadius:"12px"}}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}
