const SimpleForm = () => {
    const handleSubmite = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('from submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <br />
                <input type="text" name="name" placeholder="type your name"/>
                <br />
                <input type="email" name="email"  placeholder="type your email"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;