/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import Spinner from "../Spinner";


const WalletInteractionModal = ({loading, closeModal}) => {
    return (
        <>

            {/*  Connect wallet modal  */}
            <Transition.Root show={loading} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div
                            className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >

                                    <Dialog.Panel
                                        className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                        <div>
                                            <Dialog.Title as="h2"
                                                          className="text-2xl leading-6 font-medium text-gray-900">
                                                Connecting wallet
                                            </Dialog.Title>

                                            <div className="mt-2 text-xs">
                                                <p>Communicating with wallet. Sign message with your wallet</p>
                                            </div>
                                            <div className={'mt-3 text-center'}>
                                                <Spinner loading={true} color={"black"}/>
                                            </div>
                                        </div>
                                    </Dialog.Panel>


                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>


    )
}

export default WalletInteractionModal
