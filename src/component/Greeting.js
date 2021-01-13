import * as React from "react";

const USER_LS = "currentUser";

function Greeting() {
    const [name, setName] = React.useState('');
    const [showing, setShowing] = React.useState(false);
    const [greeting, setGreeting] = React.useState('');

    function saveName(text) {
        localStorage.setItem(USER_LS, text);
    }
    function handleSubmit(event) {
        event.preventDefault();
        paintGreeting(name);
        saveName(name);
    }

    function askForName() {
        setShowing(true);
    }
    function paintGreeting(text) {
        setShowing(false);
        setGreeting(`Hello! What's up? ${text}`);
    }

    function loadName() {
        const currentUser = localStorage.getItem(USER_LS);
        if (!currentUser) {
            askForName();
        } else {
            paintGreeting(currentUser);
        }
    }

    React.useEffect(() => {
        loadName();
    }, []);

    return (
        <div>
            {
                showing ?
                    <form className={"js-form name_form"} onSubmit={handleSubmit}>
                        <input 
                        className="name_input" 
                        type="text" 
                        placeholder="What is your name?" 
                        value={name} 
                        onChange={e => setName(e.currentTarget.value)} />
                    </form>
                    :
                    <h4 className={"js-greetings greetings"}>
                        {greeting}
                    </h4>
            }
        </div>
    )
}

export default Greeting;