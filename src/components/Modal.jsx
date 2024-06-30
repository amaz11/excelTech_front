import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Modal = ({ title, children, name }) => {
    const [modalToggle, setModalToggle] = useState(false);
    return (
        <>
            <div className="flex justify-end px-4">
                <button
                    className={`${typeof name === 'string' ? 'bg-blue-500 px-2 py-1.5 rounded font-semibold text-white' : ''}`}
                    onClick={() => setModalToggle(!modalToggle)}
                >
                    {name}
                </button>
            </div>
            {modalToggle ? (
                <>
                    <div
                        className="top-0 left-0 z-10 fixed bg-black opacity-40 w-full h-full"
                        onClick={() => setModalToggle(!modalToggle)}
                    ></div>
                    <div className="top-1/2 left-1/2 z-10 absolute bg-white p-4 rounded w-[95%] lg:w-1/3 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                        <div className="flex justify-between mb-3">
                            <h3 className="font-semibold text-lg">{title}</h3>
                            <RxCross2
                                onClick={() => setModalToggle(!modalToggle)}
                                className="cursor-pointer"
                            />
                        </div>
                        {children}
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;