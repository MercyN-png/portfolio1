import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.scss'


const PersonalDetails = [
  { label: 'Name', value: 'Mercy Nyomenda' },
  { label: 'Age', value: '23' },
  { label: 'Address', value: 'Nairobi' },
  { label: 'Email', value: 'nyomendamercy@gmail.com' },
  { label: 'Contact No', value: '0714648099' },
];

const jobSummary =
  'A front-end developer is a type of web developer who specializes in creating the user interface and user experience of a website or web application. Front-end developers use a combination of HTML, CSS, and JavaScript to design and implement the layout, visual elements, and functionality of a website\'s user interface. Their work typically involves creating and optimizing web pages for speed, accessibility, and responsiveness across multiple devices and platforms. They often work closely with designers, back-end developers, and other stakeholders to ensure that the final product meets the project\'s requirements and objectives.';

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent HeaderText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className='about__content__personalwrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)',
            }}
            end={{
              transform: 'translatex(0px)',
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)',
            }}
            end={{
              transform: 'translatex(0px)',
            }}
          >
            <div>
              <h3 className='personalInformationHeaderText'>Personal Information</h3>
              <ul>
                {PersonalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
          </div>
          
          <div>
          
          </div>
        </div>
      
    </section>
  );
};

export default About;