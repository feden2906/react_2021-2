export default function Simpson(props) {
    console.log(props)
    let {item: {name, surname, age, info, photo}} = props;

    return(
        <div>
            <h2>{name} {surname}. Age - {age}.</h2>
            <img src={photo} alt={"Photo of " + name}/>
            <p>{info}</p>
        </div>
    );
}