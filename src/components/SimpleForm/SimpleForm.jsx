const SimpleForm = () => {
    const handleSubmite = e => {
        e.preventDefault();
        
        console.log('from submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <input type="text" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;