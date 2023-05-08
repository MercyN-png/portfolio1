import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeaderContent';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './styles.scss';

const Skills = () => {
  const skillsData = [
    {
      label: 'FRONT END',
      data: [
        {
          skillName: 'HTML',
          percent: 80,
        },
        {
          skillName: 'CSS',
          percent: 50,
        },
        {
          skillName: 'JAVASCRIPT',
          percent: 60,
        },
        {
          skillName: 'REACT JS',
          percent: 80,
        },
      ],
    },
  ];

  return (
    <section id="skills" className='skills'>
      <PageHeaderContent
        HeaderText ='My skills'
        icon ={<BsInfoCircleFill size={40}/>}
      />
      <div className='skills__content-wrapper'>
        {skillsData.map((item, i) => (
          <div key={i} className='skills__content-wrapper__inner-Content'>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-200px)',
              }}
              end={{
                transform: 'translateX(0px)',
              }} 
            >
              <h3 className='skills__content-wrapper__inner-Content__category-text'>{item.label}</h3>
              <div>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opacity: 1', 'opacity : 0']}
                    iterationCount={1}
                  >
                    <div className='progressbar-wrapper' key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line 
                        percent={skillItem.percent}
                        strokeWidth='2'
                        strokeColor='#00CC91'
                        trailWidth='2'
                        strokeLinecap='square'
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;