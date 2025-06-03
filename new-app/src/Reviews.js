import './Reviews.css';
import stars from './stars.jpg'

//Reviews component
const Reviews = () => {
    return (
        <>
        <div className='reviewstitle'>
                <strong>Our Reviews</strong>
            </div>
            <br/>
            <br/>
        <div className='reviewsmain'>
            <div className='reviewswrapper'>
                <div className='review'>
                    <div className='reviewtext'>
                        <p>
                        "I was able to book an appointment quickly and easily. The front desk staff is very kind and patient. And make sure to explain everything you need to know. During my visit with Dr. Eke-Huber, she was very attentive and present and addressed all of my concerns."
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <strong>-I.J.</strong>
                        </p>
                    </div>
                    <div className='reviewstars'>
                        <img src={stars}/>
                    </div>
                </div>
                <div className='review'>
                    <div className='reviewtext'>
                        <p>
                        "I highly recommend this clinic. The doctor very knowledgeable & takes her time with her patients."
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <strong>-S.S.</strong>
                        </p>
                    </div>
                    <div className='reviewstars'>
                        <img src={stars}/>
                    </div>
                </div>
                <div className='review'>
                    <div className='reviewtext'>
                        <p>
                        "My initial appointment went amazing! She listened to me and my concerns and answered all my questions. I can’t wait to flourish and really help all my mental health issues!"
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <strong>-P.O.</strong>
                        </p>
                    </div>
                    <div className='reviewstars'>
                        <img src={stars}/>
                    </div>
                </div>

                <div className='review'>
                    <div className='reviewtext'>
                        <p>
                        "Providence Medical is a great place to get regular and mental health services. All the staff are professional, friendly, and make you feel comfortable. I would recommend this place to anyone in southwest Houston needing services from a private practice."
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <strong>-T.O.</strong>
                        </p>
                    </div>
                    <div className='reviewstars'>
                        <img src={stars}/>
                    </div>
                </div>
                <div className='review'>
                    <div className='reviewtext'>
                        <p>
                        "She is friendly and welcoming , which allows one to open up about one 's mental health issues. I highly recommend her to friends and family."
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <strong>-R.O.</strong>
                        </p>
                    </div>
                    <div className='reviewstars'>
                        <img src={stars}/>
                    </div>
                </div>
                <div className='review'>
                    <div className='reviewtext'>
                        <p>
                        "They were very professional, punctual and nice. I would reccommend friends and anyone to visit."
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <strong>-O.O.</strong>
                        </p>
                    </div>
                    <div className='reviewstars'>
                        <img src={stars}/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Reviews;
