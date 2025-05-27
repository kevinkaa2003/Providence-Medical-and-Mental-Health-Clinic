import React, { useState, useEffect } from 'react';
import './ProviderIntro.css';
import esther from './dresther.jpeg';
import klein from './drklein.png';
import shalomov from './drshalomov.jpeg';
import mountain from './mountain.jpg';

const MeetProviders = () => {
    return ( 

            <>
            
           <div className="providermain">
            <div className='providertitle'>
                    <strong>Meet the Providers</strong> {/*Center/Style Later*/}
                </div>
                <br/>
                <br/>
                <div className='meetproviders'>
                    <br/>
                    <br/>
                    <br/>
                    <div className='provider1'>
                        <div className='provider1img'>
                            <img src= {esther}/>
                            <div className='provider1title'>
                                <br/>
                                <br/>
                                Esther A Eke-Huber, Ph.D.
                                <br/>
                                <br/>
                                Child, Adolescent, and Adult Psychiatry
                            </div>
                        </div>
                        <div className='provider1paragraph'>
                            <br/>
                            <br/>
                            <p>
                            Dr. Esther Eke-Huber, PhD, APRN, ANP-C, PMHNP-BC, is a board-certified adult nurse practitioner and psychiatric mental health nurse practitioner. At Providence Medical & Mental Health Clinic in Houston, Texas, she offers holistic medical and psychiatric care to people over the age of four years. In addition to providing exceptional health care, Dr. Esther advocates for her patients and motivates them to seek the help they need. She supports their overall health by referring them to a wide range of physicians and coordinating their long-term care. Before entering the field of nursing, Dr. Esther obtained a Doctor of Philosophy in Health Education and worked as an adjunct professor at the University of North Texas in Denton, Texas. After receiving her Bachelor of Science and Master of Science in Nursing from Texas Woman’s University in Denton, Dr. Esther was awarded her Psychiatric Mental Health Nurse Practitioner certification from Maryville University in St. Louis, Missouri. Over more than 10 years as a nurse practitioner, she has delivered high-quality health care to multicultural patients in outpatient and inpatient settings. When she’s not helping patients, she loves to exercise and listen to reggae music. She also volunteers in shelter homes, helping women find access to free vocational education and jobs to reestablish themselves in society.
                            </p>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div className='provider2'>
                        <div className='provider2img'>
                            <img src= {shalomov}/>
                            <div className='provider2title'>
                                <br/>
                                <br/>
                                Dr. Andrey Shalomov, MD
                                <br/>
                                <br/>
                                Child, Adolescent, and Adult Psychiatry
                            </div>
                        </div>
                        <div className='provider2paragraph'>
                            <br/>
                            <br/>
                            <p>
                            Dr. Andrey Shalomov, MD, MPH, is an American Board – Certified Psychiatrist and Neurologist with about 10 years of experience in Psychiatry.  He provides assessment, diagnoses, and treatment to Children, Adolescents, and Adults with a wide range of mental health conditions in Texas. 
                            </p>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div className='provider3'>
                        <div className='provider3img'>
                            <img src={klein}/>
                            <div className='provider3title'>
                                <br/>
                                <br/>
                                Dr. Michael Klein MD
                                <br/>
                                <br/>
                                Family and ER Medicine
                            </div>
                        </div>
                        <div className='provider3paragraph'>
                            <br/>
                            <p>
                            Dr. Michael Klein, MD is a Family and ER Medicine Specialist in TX and has over 30 years of experience in the medical field. He provides primary care and treatment of acute and chronic illnesses including work-related injuries. 
                            </p>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
           </div>
            </>


     );
}
 
export default MeetProviders;