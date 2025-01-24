const animalEmojis = {
    dog: '🐶',
    cat: '🐱',
    chicken: '🐔',
    cow: '🐮',
    sheep: '🐑',
    horse: '🐴'
};

// Custom component to display each item
const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    {item} {animalEmojis[item] || ''}
                </div>
            ))}
        </div>
    );
};

// Example usage of the ItemList component
export function Ejercicio6() {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    return (
        <div>
            <h2>Animal List</h2>
            <ItemList items={animals} />
        </div>
    );
};
