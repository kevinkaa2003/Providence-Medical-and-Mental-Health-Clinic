import './Services.css';

//Services component
const Services = () => {

    return (
    <>
        <div className="services">
            <div className="servicesmain" id="services">
                <div className="servicesoverview">
                    <strong>SERVICES</strong>
                    <br/>
                    <br/>
                    <p>Providence Medical & Mental Health Clinic serves as a dual practice, providing exceptional medical and psychiatric health care. We treat a range of health conditions. With a dedication to reaching everyone in the community, including those in medically underserved areas, the team combines clinical, educational, and administrative know-how so patients can depend on getting all the care they need in one location.
                        <br/>
                        <br/>
                        Patients can use Providence Medical & Mental Health Clinic as their primary care provider. The team offers comprehensive internal and family medicine services, from annual exams and well-woman visits to chronic disease management. Whether patients need help with a physical or psychological issue, the team gives them personal attention. The providers listen to the concerns of every person and create holistic treatment plans that encompass lifestyle recommendations, medications, psychotherapy, and referrals to specialists. If you are suffering or are seeking treatment and believe any of our services can help, please contact us or schedule an appointment so we can help you.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="appointmentbuttoncontainer">
                        <button className="appointmentbutton"><a href="http://provider.kareo.com/dr-esther-eke-huber#?view=booking">Schedule an Appointment</a></button>
                    </div>
                </div>
                <div className="serviceslist">
                    <ul>
                        <li>
                            IV Therapy
                        </li>
                        <li>
                            Weight Loss
                        </li>
                        <li>
                            Anxiety
                        </li>
                        <li>
                            ADHD
                        </li>
                        <li>
                            Bipolar Disorder
                        </li>
                        <li>
                            PTSD
                        </li>
                        <li>
                            Schizophrenia
                        </li>
                        <li>
                            Personality Disorder
                        </li>
                        <li>
                            Obsessive Compulsive Disorder
                        </li>
                        <li>
                            Social Anxiety
                        </li>
                        <li>
                            Sleep Disorder
                        </li>
                        <li>
                            Sexual Addiction
                        </li>
                        <li>
                            Family Medicine
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export default Services;
