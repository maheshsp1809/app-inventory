import react from "react";
import { useLocation } from 'react-router-dom'


const AppDescription = () => {
    const location = useLocation()
    const { desc } = location.state

    return (<>
        <p>{desc}</p>
    </>);

}


export default AppDescription;