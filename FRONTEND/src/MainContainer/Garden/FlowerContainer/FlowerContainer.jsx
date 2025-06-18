import './styles.css'

function FlowerContainer({numFlowers}) {
    
    const totalPlots = 30;
    const flowerBoxes = [];

    for (let i = 0; i < totalPlots; i++) {
        flowerBoxes.push(
            <FlowerBox key={i} renderFlower={i < numFlowers} />
        );
    }

    return (
        <div className="FlowerContainer">
            {flowerBoxes}
        </div>
    );
}

function FlowerBox({renderFlower}) {
    return(
        <>
            {renderFlower ? 
                <>
                    <div className='FlowerBox'>
                            <Flower color="red" layers={3}/> 
                    </div>
                </>
                :
                <>
                    <div className='FlowerBox'></div>
                </>
            }
        </>
    );
}

function Flower({ color, layers }) {
    return (
        <>
            <div className="flower">
                <div className='flowerLayer3'></div>
                <div className='flowerLayer2'></div>
                <div className='flowerLayer1'></div>
                <div className='flowerCenter'></div>
                <div className='FlowerStem'></div>
            </div>
        </>
    );
}


function Date({date}) {
    return(
        <div className='date'>
            <p ><b>{date}</b></p>
        </div>
    );
}
export default FlowerContainer