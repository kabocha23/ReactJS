const page = {
    title: 'Visibility Toggle App',
    subtitle: 'Hide and reappear text for no apparent reason!',
    message: "Click the button if you don't want to see me anymore!"
}

const appRoot = document.getElementById('app');

let visible = true;
const toggleVis = () => {
    visible = !visible;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{page.title}</h1>
            {page.subtitle && <p>{page.subtitle}</p>}
            <button onClick={toggleVis}>
                {visible ? 'Show Details' : 'Hide Details'}
            </button>
            {!visible && (
                <div>
                    <p>{page.message}</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();