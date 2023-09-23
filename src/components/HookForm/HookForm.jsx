import useInputState from "../../hooks/uselnputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni ')
    const emailState = useInputState('rojoni@sojoni.go')

    const handleSubmite = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmite}>
                <br />
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="type your name"/> */}
                <br />
                <input {...emailState}  type="email" name="email"  placeholder="type your email"/>
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;