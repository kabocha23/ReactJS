// JSX - JavaScript XML

const user = {
    name: 'Jason Kobuchi',
    age: 32,
    location: 'San Francisco'
}
const page = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['Item One', 'Item Two']
}
function getLocation(location) {
    // if there is a location in the user object, return the p tag, if not, undefined
    if (location){
        return <p>Location: {location}</p>;
    }
}
// user.name ternary operator - great for doing one of two things
// user.age logical && operator for condition where you just want to do one thing, else do nothing at all
const templateTwo = (
    <div>
        <h1>{page.title}</h1>
        {page.subtitle && <p>{page.subtitle}</p>}
        <p>{page.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
        <ol>
            <li>{page.options[0]}</li>
            <li>{page.options[1]}</li>
        </ol>
        <h3>{user.name ? user.name : 'Anonymous'}</h3>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);