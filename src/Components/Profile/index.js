import React, {useState, useEffect} from 'react';
import {ProfileSkills, MainProfile, ProfileTitle, TitleSpan, ProfileList, ProfileItem, SpanProfile, SpanWeb, Skills, SkillsTitle, SkillsSpan, SkillsDesc, Bar, BarTitle, BarPerc, BarParent} from './style.js';

const Profile = () => {
    return (
        <ProfileSkills>
            <div class="container">
                <MainProfile>
                    <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <SpanProfile>Name</SpanProfile>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <SpanProfile>Birthday</SpanProfile>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <SpanProfile>Address</SpanProfile>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <SpanProfile>Phone</SpanProfile>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <SpanProfile>Email</SpanProfile>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <SpanProfile>Website</SpanProfile>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </MainProfile>
                
                <Skills>
                    <SkillsTitle>Some <SkillsSpan>skills</SkillsSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <Bar>
                        <BarTitle>Bootstrap</BarTitle>
                        <BarPerc>100%</BarPerc>
                        <BarParent>
                            <span className="sp1"></span>
                        </BarParent>
                    </Bar>
                    
                    <Bar>
                        <BarTitle>CSS3</BarTitle>
                        <BarPerc className="perc">90%</BarPerc>
                        <BarParent>
                            <span className="sp2"></span>
                        </BarParent>
                    </Bar>
                    
                    <Bar>
                        <BarTitle>Photoshop</BarTitle>
                        <BarPerc>80%</BarPerc>
                        <BarParent>
                            <span className="sp3"></span>
                        </BarParent>
                    </Bar>
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile;