import Spinners from "./assets/loading2.gif"

const Spinner = () => {
    return(
        <div className="w-full h-full relative">
            <img className="AbsCenter max-w-sm" src={Spinners} alt="Loading..."/>
        </div>
    )
}

export default Spinner
