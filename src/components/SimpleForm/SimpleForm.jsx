const SimpleForm = () => {
    const handleSubmite = e => {
        e.preventDefault();
        console.log(e.target)
        console.log('from submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <input type="text" name="email" />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;