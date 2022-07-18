import React from "react"
import Footer from "../components/Footer"

const features = [
    { name: 'Host', description: 'NUGA' },
    { name: 'Date', description: '2023' },
    { name: 'Time', description: '2023' },
    { name: 'Venue', description: 'University Of Nigeria' },
    { name: 'Details', description: 'NUGA Games is an event held every year for students of the Universities of Nigeria.' },
  ]
  
  export default function EventPage() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Event Details</h2>
            <p className="mt-4 text-gray-500">
              NUGA Games is an event held every year for students of the Universities of Nigeria. This season, 2023 NUGA Games boasts of some exciting prizez for participants..
            </p>
  
            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://i.pinimg.com/originals/f6/0b/ec/f60becb627cf5fff64a3a5ac87c596b3.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://i.pinimg.com/originals/f6/0b/ec/f60becb627cf5fff64a3a5ac87c596b3.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://cdn.player.one/sites/player.one/files/2022/06/01/summer-game-fest-2022l.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://sunnewsonline.com/wp-content/uploads/2019/04/Sports.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
  