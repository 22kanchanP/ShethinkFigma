import styles from './style.module.css'

function Footer()
{
    return(
        <div className = {styles.wrapper}>
                <div  className = {styles.outerwrapper}> 
              
                        <div className= {styles.innerwrapper}>

                            <h1> Ready to Experience the Difference</h1>
                            <h6>Start your 7-day trial today and discover the perfect fit for your project needs.</h6>

                            <div className= {styles.lastrow}>
                            <button className=  {styles.leftbutton}> Start 7-day trial today </button>

                                <div>
                                    or
                                </div>
                           
                             <a href="https://www.w3schools.com"> Book a Call </a>

                            </div>
                            
                        </div>
                </div>
         </div>
    )
}

export default Footer