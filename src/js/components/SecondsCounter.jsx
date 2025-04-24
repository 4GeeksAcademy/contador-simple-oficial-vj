function SecondsCounter ({seconds}) {
    return (
        <div className="container">
            <div>
                <div><i class="fa-regular fa-clock"></i></div>
                <div>{Math.floor(seconds / 100000) % 10}</div>
                <div>{Math.floor(seconds / 10000) % 10}</div>
                <div>{Math.floor(seconds / 1000) % 10}</div>
                <div>{Math.floor(seconds / 100) % 10}</div>
                <div>{Math.floor(seconds / 10) % 10}</div>
                <div>{Math.floor(seconds / 1) % 10}</div>
            </div>
        </div>
    )
}

export default SecondsCounter; 