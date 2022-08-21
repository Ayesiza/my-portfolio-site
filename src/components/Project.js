import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <div className="flex  items-center text-center">
      <button className=" p-1 mr-4  bg-accent hover:bg-orange-900 text-white ">
        Code
      </button>
      <button className="p-1 bg-secondary hover:bg-orange-900 text-white">
        Demo
      </button>
      </div>
     
      <p className="text-base max-w-md">{item.description}</p>
    </div>
  );
};

export default Project;
