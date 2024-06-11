/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex items-center justify-between md:justify-center">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            I'm DevOps Engineer with over 3 years of experience in designing, implementing, and maintaining scalable and efficient CI/CD pipelines, automated infrastructure solutions. 
            Expertise in leveraging cloud platforms, container orchestration, and infrastructure as code to drive operational excellence and streamline software delivery processes. 
            Demonstrated success in fostering DevOps culture within organizations, enhancing collaboration between development and operations teams to achieve continuous delivery and rapid deployment cycles.
          </p>
          <p>
            Recognized as a ready to go learner and organized team player
            capable of delivering results with minimal supervision.
          </p>
          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contact Me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="w-80 pb-10">
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              <span className="h-3 w-48 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
