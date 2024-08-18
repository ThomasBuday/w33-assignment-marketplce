import PropTypes from 'prop-types'

function CardContent(props){

    return(
        <>
        <h2 className="card-title" >AD {props.adNr}</h2>
        <p className="card-text" >This is the {props.adDesc} advertisement</p>
        <a className="card-text" >Contact: {props.adContact}</a>

        </>
    )
}

// cardContent.propTypes = {
//     adNr: PropTypes.number,
//     adDesc: PropTypes.string,
//     adContact: PropTypes.string,
// } 

// cardContent.defaultProps = {
//     name: 0,
//     adDesc: "Unknown",
//     adContact: "Contact",
// }

export default CardContent