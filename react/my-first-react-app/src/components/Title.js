export default function Title({title, subtitle}){

    return(
        <div>
            <h1 className="title">{title}</h1>
            <br />
            <h1 className="subtitle">{subtitle}</h1>
        </div>
    )
}