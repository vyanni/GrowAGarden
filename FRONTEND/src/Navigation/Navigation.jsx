import './styles.css'
function Navigation() {
    return (
        <>
        <div className="navContainer">
            <div>
                <img className="logo" src="" alt="" />
            </div>
            <div>
                <h1 className="title">GrowAGarden</h1>
            </div>
            <div className='buttonContainer'>
                <button className='login'>Login</button>
                <button className='register'>Register</button>
            </div>
        </div>
        </>
    );
}

export default Navigation