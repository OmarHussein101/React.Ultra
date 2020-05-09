import React, {Component} from 'react';
import axios from 'axios';
import {WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDec} from './style.js';

class Work extends Component {
    state = {
        works : []
    }
    componentDidMount() {
        axios.get('js/data.json').then(resp => {this.setState( {works: resp.data.works})})
    }
    render() {
        const works = this.state.works;
        const worksList = works.map( (workItem) => {
            return(
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDec>
                        {workItem.body}
                    </PartDec>
                </WorkPart>
            )
        })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        )
    }
}

export default Work;