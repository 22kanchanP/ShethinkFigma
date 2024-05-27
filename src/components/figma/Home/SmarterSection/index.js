import styles from './style.module.css'

function SmarterSection()
{
    const arr = [{heading : "675+" , text : "Full Time Staff"} , {heading : "19+" , text : "Years Experience" } , {heading : "25000+" , text : "Satisfied Customers"}]
    return(
        <div className={styles.wrapper}>
             <div className={styles.outerwrapper}>
                <div className={styles.innerwrapper}>

                    <div  className= {styles.topdiv}>
                                <div className= {styles.headingdiv}>

                                    <h1 >Build Smarter with <span  className= {styles.gradientHeading}> Top talent</span></h1>

                                </div>

                                <div className= {styles.textdiv}>
                                    <p>Ready to elevate your software projects? Hire our expert developers and experience 
                                        unparalleled innovation and efficiency.</p>

                                </div>

                    </div>
                    <div className= {styles.middlediv}>
                        {
                            arr?.map((item)=>{
                               return  <div className= {styles.boxdiv}>

                                    <div className={styles.gradientHeadingnumber}>
                                    {item.heading}
                                        </div>
                                    <div className= {styles.middledivText}>
                                    {
                                            item.text
                                        }
                                        </div>

                                </div>
                            })
                        }

                    </div>

                    <div className= {styles.lastdiv}>
                    <button className=  {styles.rightbutton}> Hire Top Engineers </button>

                    </div>

                 </div>

            </div>
        </div>
    )
}

export default SmarterSection