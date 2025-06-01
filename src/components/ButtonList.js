import React from 'react';
import Button from './Button';

const list = [
  "All", "Music", "Football", "Gaming", "Food", "Code", 
  "Cars", "Bikes", "Cricket", "Mobiles", "Consoles", 
  "TV", "Computers", "Restaurant"
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
