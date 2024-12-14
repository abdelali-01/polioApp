import './Feature.css'
function Feature({card}){
    return(
        <div>
              <i className={`${card.icon} icon`} ></i>
              <h5>{card.title}</h5>
              <p className='text-black-50' >{card.description}</p>
        </div>
    )
}
export default Feature ; 