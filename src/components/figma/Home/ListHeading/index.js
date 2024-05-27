import styles from './style.module.css'

function ListHeading()
{
    return(
        <div className= {styles.wrapper}>
            <div className= {styles.outerwrapper}>
                <div className= {styles.innerwrapper}>

                   <div className= {styles.topdiv}>

                   <h1> Hire Java Developers:   </h1>
                    <h1 className= {styles.gradientHeading}>   In-House, Freelancers Or From ValueCoders </h1>



                   </div>

                   <div className= {styles.bottomdiv}>

                    <p>Most businesses prefer to hire Java developers in-house, freelance, or from a software development 
                         <span>company like ValueCoders. Here is a comparative analysis of these three-</span> </p>


                  
                   </div>

                </div>
            </div>
        </div>
    )
}

export default ListHeading