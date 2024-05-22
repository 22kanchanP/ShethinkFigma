import styles from './style.module.css'


function CTASection()
{
    return(
        <div className= {styles.wrapper}>
            <div className= {styles.outerwrapper}>
            <div className= {styles.innerwrapper}>


                    <div  className= {styles.companies}>
                    <h1>Try Before , </h1>
                    <h1 className= {styles.gradientHeading}> Commit Later</h1>
                    </div>
                    
                    <h6 className= {styles.textdiv}>Start your 7-day trial today and discover the perfect fit for your project needs.</h6>

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

export default CTASection