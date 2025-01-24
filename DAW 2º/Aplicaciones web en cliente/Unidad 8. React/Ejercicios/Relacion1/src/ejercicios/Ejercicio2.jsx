export function Ejercicio2() {
    const handleClick = () => {
        alert('Clicked!');
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};
