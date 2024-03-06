import { fetchCars } from "@/firebaseAdminSDK/firebase";
import { initAdmin } from "@/firebaseAdminSDK/firebaseAdmin";
import React from "react";

export default async function CarListCard() {
  await initAdmin();
  const cars = await fetchCars();

  return (
    <div className="max-w-md mx-auto grid gap-6">
      {cars.map((car) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <article>
            <div key={car.id} className="cursor-pointer">
              <img
                className="w-full h-48 object-cover"
                src={`https://source.unsplash.com/500x300/?${car.brand}`}
                alt={`${car.brand} ${car.model}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {car.brand} {car.model}
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Type:</span> {car.type}
                  <br />
                  <span className="font-semibold">Color:</span> {car.color}
                  <br />
                  <span className="font-semibold">Year:</span> {car.year}
                  <br />
                  <span className="font-semibold">Price:</span> ${car.price}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
