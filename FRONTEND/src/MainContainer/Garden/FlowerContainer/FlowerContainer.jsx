import './styles.css'

function FlowerContainer(user) {
    return(
        <div className="FlowerContainer">
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>
            <FlowerBox></FlowerBox>

        </div>
    );
}

function FlowerBox(user) {
    return(
        <div className='FlowerBox'>
                <Flower color="red" layers={3}/> 
                <Date date="16 June"/>
        </div>
    );
}

function Flower({ color, layers }) {
    return (
        <div className="flower">
            <div className='flowerLayer3'></div>
            <div className='flowerLayer2'></div>
            <div className='flowerLayer1'></div>
            <div className='flowerCenter'></div>
        </div>
    );
}


function Date({date}) {
    return(
        <p className='date'><b>{date}</b></p>
    );
}
export default FlowerContainer