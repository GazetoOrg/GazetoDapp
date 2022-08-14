/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {MenuIcon, XIcon, LinkIcon} from "@heroicons/react/outline";
import {routes} from "../../helpers/constants";
import {useRouter} from "next/router";
import {MailIcon} from '@heroicons/react/solid'
import {useMoralis} from "react-moralis";
import ConnectWallet from "../ConnectWallet";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const router = useRouter()
    // const { switchNetwork, chainId, chain, account } = useChain();
    // console.log({chainId, chain, account })
    const {authenticate, isAuthenticated, user} = useMoralis();

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center cursor-pointer"
                                     onClick={() => router.push("/")}>
                                    <h1 className="">Ethereum Boilerplate</h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                                    {routes.filter(x => x.name).map((item) => (
                                        <a
                                            key={item.name}
                                            href={null}
                                            onClick={() => router.push(item.path)}
                                            className={classNames(
                                                item.current
                                                    ? 'border-indigo-500 text-gray-900'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {!isAuthenticated ?
                                    <>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border-2 border-gray-300 shadow-sm text-base font-medium rounded-md text-dark hover:accent-red-50 focus:outline-none"
                                        >
                                            <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true"/>
                                            Polygon
                                        </button>

                                        {/* current chain */}
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button
                                                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    className="z-10 bg-white origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-5" style={{
                                                        width : '30vw'
                                                }}>
                                                    <Menu.Item>

                                                        <div>
                                                            <p className={'text-3xl m-5'}>Account</p>

                                                            <div className={"border border-1 divide-y" }>
                                                            <div
                                                                className="flex items-center px-4 mr-2 py-2  border-gray-500">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="h-8 w-8 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="ml-4 mr-6">
                                                                    <div
                                                                        className="text-base font-medium leading-6 text-gray-900">
                                                                        JohnDoe.eth
                                                                    </div>
                                                                    <div
                                                                        className="text-base font-medium leading-6 text-gray-900">
                                                                        afsdgfhgafwwegrwqedsafsdf
                                                                    </div>


                                                                </div>

                                                                <div className={'divide-x '} />


                                                            </div>

                                                            <div className={"m-4"}>
                                                                <p className={" mt-4 text-sm"}>Balance</p>
                                                                <p className={"text-xl"}>0.99 Matic</p>

                                                                <a href={"#"} className={'mt-1 text-sm flex underline'}>   <LinkIcon className="block h-4 w-4 pt-1" aria-hidden="true"/> <p>View on explorer</p></a>
                                                            </div>

                                                            </div>

                                                            <div className={"text-center mt-3 mb-3 w-full"}>
                                                                <button
                                                                    type="button"
                                                                    className=" w-full inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-dark bg-white hover:bg-black hover:text-white border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Disconnect
                                                                </button>
                                                            </div>

                                                        </div>

                                                    </Menu.Item>

                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                    </>
                                    :
                                    <ConnectWallet/>}


                            </div>


                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4 space-y-1">
                            {/* Current: "bg-indigo-50  text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="bg-indigo-50  text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Dashboard
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Team
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Calendar
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
export default Navbar
