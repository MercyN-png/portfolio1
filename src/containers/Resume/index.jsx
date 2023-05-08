import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeaderContent';
import { data } from './utils';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';

const Resume = () => {
  return (
    <section id="resume" className='resume'>
      <PageHeaderContent
        HeaderText ='Resume'
        icon ={<BsInfoCircleFill size={40}/>}
      />
      <div className='timeline'>
        <div className='timeline__Education'>
          <h3 className='timeline__Education__header-text'>Education</h3>
          <VerticalTimeline
            layout='1-column'
            lineColor='#00CC91'
          >
            {data.Education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className='timeline__Education__vertical-timeline-element'
                contentStyle={{
                  background: 'none',
                  color: '#ffffff',
                  border: '1.5px solid #00CC91',
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: '#00CC91',
                }}
              >
                <div className='verticle__timeline__element-title-wrapper'>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;