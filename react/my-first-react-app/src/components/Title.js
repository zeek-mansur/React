export default function Title(props){

    return(
        <div>
            <h1 className="title">{props.title}</h1>
            <br />
            <h1 className="subtitle">{props.subtitle}</h1>
        </div>
    )
}