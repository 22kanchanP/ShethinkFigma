import styles from './style.module.css'

function CTASection2()
{
    return(
        <div className= {styles.wrapper}>
        <div className= {styles.outerwrapper}>
        <div className= {styles.innerwrapper}>


                <div  className= {styles.companies}>
                <h1>Need Top-tier  </h1>
                <h1 className= {styles.gradientHeading}> Software Development?</h1>
                </div>
                
                <h6 className= {styles.textdiv}>Hire our skilled developers and lead the way to innovation.</h6>

                <div className= {styles.lastrow}>
                    <button className=  {styles.leftbutton}> Start 7-day trial today </button>

                    <div>
                        or
                    </div>

                        <a href="https://www.w3schools.com"  className= {styles.anchor1}> Book a Call </a>

                </div>

                </div>

        </div>
      
    </div>
    )
}

export default CTASection2