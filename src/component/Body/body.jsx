import "./body.css"


const Body = () => {
    return ( 
        <div className="Mybody">
            <div className="texts">
                <h2 id="Khwezi"><span className="Hi-span">Hi!</span> I am Khwezi <span>Mpumela</span>, an aspiring Busines Analyst</h2>
                <p>Welcome to my portfolio, I am a final-year BCom in Information Systems student at the University of Johannesburg. I have a very strong passion for both technology and business,
                    I have developed a strong foundation in data analysis, coding, problem-solving, and critical thinking. 
                    I focus on identifying business inefficiencies and leveraging technology to create impactful solutions that improve processes and decision-making. 
                    I'm excited to apply my skills in dynamic projects that drive business success.

</p>
                <button className="ExpBTN">Experience</button>
                <a href="/Resume.pdf" download="Resume"><button className="DownloadBTN">Download CV</button></a>
                
            </div>
            
            <img src="/assets/mee.jpg" alt="" id="Image"/>
        </div>
    );
}
 
export default Body;