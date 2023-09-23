import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const passwordRef =useRef(null);
    const emailRef = useRef(null);

    const handleSubmite = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect ( () => {
        nameRef.current.focus()
    },[])

    return (
        <div>
            <form onSubmit={handleSubmite}>
                <br />
                <input ref={nameRef} type="text" name="name" placeholder="name"/>
                <br />
                <input ref={emailRef} defaultValue={'monpake@sona.com'} type="email" name="email"  placeholder="email"/>
                <br />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="password"/>
                <br />
                <input  type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;