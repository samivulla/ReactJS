import React from 'react';

const person = (Pros) => {
    return (
        <div>
    <p>I'm {Pros.name} and  I am {Pros.age } years old!</p>
    <p>{Pros.children}</p>
    </div>
    )
};
 export default person;