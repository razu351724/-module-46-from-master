const ReusableForm = ({formTitle, handleSubmite, submitBtnText='Submit', children}) => {

    const handleLocalSubmite = e => {
    e.preventDefault();
        const data = {
            name:e.target.name.value,
            email:e.target.email.value,
        password:e.target.password.value
        }
        handleSubmite(data);
    }


    return (
        <div>
            {children}
             <form onSubmit={handleLocalSubmite}>
                <h2>{formTitle}</h2>
               
                <input type="text" name="name" placeholder="type your name"/>
                <br />
                <input type="email" name="email"  placeholder="type your email"/>
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;