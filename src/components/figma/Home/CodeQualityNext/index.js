import styles from './style.module.css'
import {Images} from "../../../../Assets/images";

function CodeQualityNext()
{
    const arr = [{heading : "Upholding Coding Best Practices", 
                content : ["Using descriptive variable names and in-code comments for better readability and maintainability.", 
                         "Comprehensive documentation for every codebase, ensuring clarity and ease of future updates."]},
                  {heading : "Unit Testing" ,
                    content : ["Integrating continuous integration tools to automatically run unit tests on new code submissions, ensuring immediate feedback on code integrity.",
                        "Utilizing test-driven development (TDD) practices to encourage the creation of tests before writing code, leading to more robust and error-free components."]},
                    {heading : "Code Review Practices", 
                        content : ["Incorporating automated code scanning tools to detect vulnerabilities and code smells before manual review, streamlining the review process.",
                                "Establishing a peer review culture where developers are encouraged to provide constructive feedback, promoting knowledge sharing and collaborative improvement."]},
                {  heading : "Code Quality Metrics" , 
                    content : ["Adopting complexity metrics to identify overly complex code that may be harder to maintain and test, aiming for simplicity and readability.",
                        "Tracking technical debt metrics to quantify the cost of rework associated with quick fixes versus proper solutions, guiding towards long-term code health."] }
                ]
    return(
        <div className= {styles.wrapper}>
            <div  className= {styles.outerwrapper}>
                <div className= {styles.innerwrapper}>
                    {
                        arr.map((item)=>{

                            return <div className= {styles.boxdiv}>
                                        <div className= {styles.headingdiv}>
                                          <h2>  {item.heading}</h2>
                
                                        </div>
                                        <div className= {styles.textdiv}>
                                        {
                                                    item.content?.map((element)=>{
                                                        return <div className= {styles.elementdiv}>
                                                            <div className= {styles.icon}>
                                                            <img src = {Images.Image3}  alt = "No image"/> 
                                                            </div>
                                                                 
                                                             <p>{element}</p>
                                                            </div>

                                                    })
                                                }
                                            
                                        </div>
                                        
                                    </div>

                        })
                    }

                </div>

            </div>
            
        </div>
    )
}

export default CodeQualityNext