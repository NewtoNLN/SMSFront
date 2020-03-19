import React from 'react';
export function Secret() {
    alert('Hello World!!!');
}
export function Test(props) {
    const [count, setCount] = React.useState(0);
    setInterval(()=> {
        setCount(count + 1);
    }, 1000);
    return <h1>Olá Mundo {count}</h1>;
}