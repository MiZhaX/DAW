// Custom component to render each joke
function Joke({ setup, punchline }) {
    return (
        <div>
            <h3>{setup}</h3>
            <p>{punchline}</p>
        </div>
    )
};

export function Ejercicio8 () {
    const jokes = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ];

    return (
        <div>
            {jokes.map(joke => (
                <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
            ))}
        </div>
    );
};
