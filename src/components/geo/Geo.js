export default function Geo({location: {lat,lng}}){
    return(
        <div>
            <p>Geo:</p>
            <ul>
                <li>Latitude - {lat}</li>
                <li>Longitude - {lng}</li>
            </ul>
        </div>
    );
}