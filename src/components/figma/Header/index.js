import styles from './style.module.css'

function Header()
{
    return(
        <div className = {styles.wrapper}>
          <div className= {styles.innerWrapper}>
                <div className= {styles.left}>
                        <a href="https://shethinkfigma.onrender.com/" className= {styles.common} > Product </a>
                        <a href="https://shethinkfigma.onrender.com/" className= {styles.common}> How it works ?</a>
                        <a href="https://shethinkfigma.onrender.com/" className= {styles.common}> About Us</a>
                    </div>

                    <div className= {styles.right}>
                            <a href="https://shethinkfigma.onrender.com/" className= {styles.anchor1}>Apply as an Engineer </a>
                            <button className=  {styles.rightbutton}> Hire Top Engineers </button>
                    </div>

          </div>

           

        </div>
    )
}

export default Header