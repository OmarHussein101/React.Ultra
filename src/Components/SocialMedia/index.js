import React from 'react';
import axios from 'axios';
import {Socialmedia, Social, Icon, SocilaDesc, Span, SpanInfo} from './style.js';

class SocialMedia extends React.Component {
    state = {
        social: []
    }
    componentDidMount() {
        axios.get('js/data.json')
        .then(res => {
            this.setState({social: res.data.social})
        })
    }
    render() {
        const social = this.state.social
        const socialList = social.map((socialItem) => {
            return (
                <Social icon={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <SocilaDesc>
                        <Span>{socialItem.title}</Span>
                        <SpanInfo>{socialItem.body}</SpanInfo>
                    </SocilaDesc>
                </Social>    
            )
        })
        return (
            <Socialmedia>
                {socialList}
            </Socialmedia>
        )
    }

}

export default SocialMedia;