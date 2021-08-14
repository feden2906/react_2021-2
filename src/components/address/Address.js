import Geo from "../geo/Geo";

export default function Address(props) {
    let {items:{street, suite, city, zipcode, geo}} = props;

    return(
        <div>
            <p>Address:</p>
            <ul>
                <li>Street - {street}</li>
                <li>Suit - {suite}</li>
                <li>City - {city}</li>
                <li>ZipCode - {zipcode}</li>
                <Geo location={geo}/>
            </ul>
        </div>
    );
}