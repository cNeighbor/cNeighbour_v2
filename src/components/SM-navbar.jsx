
import { Fragment } from 'react'
import {Link} from "react-router-dom"
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'

import logo from "../images/logo.png"
import location from "../images/location.png"
import bank from "../images/bank.png"
import history from "../images/history.png"

import Search from './SM-search'

const solutions = [
  {
    name: 'Our Company',
    description: 'Understand our goals at Campus Neighbour.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Find a place',
    description: 'Checkout our available solutions.',
    href: 'find',
    icon: CursorClickIcon,
  },
  { name: 'Help Center', description: "Need Help? we have a 24/7 active customer support.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Register Business',
    description: "Download our mobile app on your app store or Google playstore.",
    href: 'register-business',
    icon: ViewGridIcon,
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SmNavbar() {
  return (
    <div>
      <Popover className="relative bg-white z-10 md:hidden">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img src={logo} className="md:hidden" width="90" alt="user" />
              </Link>
            </div>

            <img src={location} className="md:hidden ml-10" width="25" alt="user" />
            <img src={bank} className="md:hidden" width="25" alt="user" />
            <img src={history} className="md:hidden" width="25" alt="user" />

            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link to="/find" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Find a place
              </Link>
              <Link to="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Our Company
              </Link>
              <Link to="/register-business" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Register Business
              </Link>

            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </Link>
              <Link
                to="/register"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="/register"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="/login" className="text-yellow-500 hover:text-yellow-400">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <Search />
    </div>
  )
}
