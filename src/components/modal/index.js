import React from 'react'

const Modal = ({hideModal}) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='fixed top-0 left-0 bg-black opacity-80 h-screen w-full' onClick={hideModal}></div>
            <div className='modal-body text-center bg-white p-10 rounded z-100 fixed top-[50%] left-[50$$] transform-x-[-50%] transform-y-[-50%]'>
                <h2 className='text-3xl'>Thank you!</h2>
                <p className='text-lg'>We will be in touch soon.</p>
            </div>
        </div>
    )
}

export default Modal