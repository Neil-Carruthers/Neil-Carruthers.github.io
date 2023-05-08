import * as React from 'react'
import * as styles from './experience.module.scss';

const Highlighted = ({ children }) => {
    return <span className={styles.fcWhite}>{children}</span>
}

const Subheader = ({ children }) => {
    return <div className={`${styles.subheader} fixedSys`}>{children}</div>
}

export default function Experience() {
    return (
        <main className={styles.container}>
            <h3 className="sectionHeader" id='experience'>Experience</h3>
            <section>
                <h4>Binogi</h4>
                <Subheader>September 2021 - Present // Halifax, Nova Scotia</Subheader>
                <p>
                    At Binogi I've had the opportunity to further my experiences while working on a variety of different software projects and collaborative teams. I've learned how to add type safety to a large codebase using <Highlighted>TypeScript</Highlighted> and how to manage state in a React application using <Highlighted>MobX</Highlighted>. I have had the opportunity to build design systems comprising of <Highlighted>React</Highlighted> components using <Highlighted>Storybook</Highlighted> and <Highlighted>Figma</Highlighted>.
                </p>
                <h5>Featured Work Experiences</h5>
                <ul>
                    <li>Separated an administrative section from existing public facing <Highlighted>AngularJS</Highlighted> application into a new React application</li>
                    <li>Created a modern React application to replace outdated monolithic marketing tool, adding new features and integrating newer third party services</li>
                    <li>Bootstrapped and developed a <Highlighted>Next.js</Highlighted> application with modern architecture and services to replace existing public facing AngularJS application</li>
                </ul>
            </section>

            <section>
                <h4>Moss & Ocean Consulting</h4>
                <Subheader>January 2021 - September 2021 // Halifax, NS</Subheader>
                <p>
                    As owner and senior consultant I was responsible for marketing, meeting with clients to discuss their needs and all phases of the design and development process. Our primary focus was on all things JavaScript with an emphasis on <Highlighted>React, Redux, Next.js</Highlighted> and <Highlighted>Node.js.</Highlighted> We all specialized in SEO, back end services and modern architecture styles.
                </p>
                <h5>Featured Work Experiences</h5>
                <ul>
                    <li>Delivered multiple <Highlighted>SEO</Highlighted> prioritized websites built with Next.js</li>
                    <li>Created a custom e-commerce website with React and Redux</li>
                    <li>Refactored a <Highlighted>Laravel</Highlighted> API to be <Highlighted>HAL-formatted</Highlighted> based on <Highlighted>HATEOS</Highlighted> architecture principles</li>
                    <li>Bootstrapped a Node.js microservice API with <Highlighted>Express.js</Highlighted> and other modern libraries</li>
                </ul>
            </section>

            <section>
                <h4>Able Engineering</h4>
                <Subheader>September 2020 - January 2021</Subheader>
                <p>
                    In the fall of 2020 I had the opportunity to contribute to a municipal project which had the aim of replacing residential septic systems which were negatively impacting the local environment. My role in the project was to create approved on-site treatment systems that adhered to <Highlighted>provincial regulations</Highlighted> and <Highlighted>engineering best practices</Highlighted>. During my time at this company I also had the opportunity to create a variety of other <Highlighted>civil engineering designs</Highlighted>.
                </p>
                <h5>Featured Work Experiences</h5>
                <ul>
                    <li>Combined provincial regulations, LIDAR and surveying data and the best engineering practices to design a diverse range of on-site sewage disposal systems for residential properties</li>
                    <li>LaHave River Straight Pipe Replacement Project - Designed government approved on-site sewage treatment systems</li>
                </ul>
            </section>

            <section>
                <h4>Freelance</h4>
                <Subheader>September 2018 - September 2020</Subheader>
                <p>
                    As an independent freelancer I had the opportunity to work on a wide variety of tasks using the technologies which I felt were the best match for the job criteria. I was able to effectively broaden my experience with multiple programming languages and paradigms. While sharpening my skills as a web developer, I also had the chance to try new things in the domains or <Highlighted>web scraping</Highlighted> and offline tooling.
                </p>
                <h5>Featured Work Experiences</h5>
                <ul>
                    <li>Created and maintained marketing websites for a variety of clients using WordPress, Squarespace and Shopify</li>
                    <li>Designed and delivered a project management application built on PHP and MySQL for a local engineering firm</li>
                    <li>Created image manipulation and organization tools for a local photographer in Python using Python Imaging Library</li>
                    <li>Developed a collection of client-side games using JavaScript for a client&apos;s website</li>
                    <li>Created a web scraper application in Python using Requests and Beautiful Soup for the purpose of creating an offline database of a client&apos;s online store which enabled them to migrate to a new e-commerce platform</li>
                </ul>
            </section>

            <section>
                <h4>Atlantica Mechanical Contractors</h4>
                <Subheader>June 2016 - September 2018</Subheader>
                <p>
                    Created and maintained mechanical engineering drawings based on engineering designs. Coordinated the placement of various mechanical systems in commercial constructions such as plumbing, HVAC and mechanical piping using AutoCAD Fabrication. Created BIM plans which resulted in full 3D high definition renderings of all aspects of new and existing builds. Worked together with a diverse team of professions which included other designers, engineers, project managers and architects.
                </p>
                <h5>Featured Work Experiences</h5>
                <ul>
                    <li>Halifax Convention Center - Coordinated mechanical and plumbing services for underground parking facility</li>
                    <li>TD Center (Halifax) - Creating HVAC, mechanical piping and plumbing coordination layouts, spool drawings and BIM models following major renovations</li>
                    <li>Halifax Central Library - Coordinated HVAC, mechanical piping and plumbing services throughout building and created BIM models</li>
                    <li>RCMP Nova Scotia Headquarters - Coordination, layout, spool drawings for mechanical systems and plumbing</li>
                </ul>
            </section>

            <section>
                <h4>Louisiana-Pacific</h4>
                <Subheader>June 2015 - July 2015</Subheader>
                <p>
                    Created and maintained mechanical engineering drawings under the supervision of a professional engineer. Collected data from tradespersons and updated existing drawings to match ongoing maintenance work and system upgrades.
                </p>
                <h5>Featured Work Experiences</h5>
                <ul>
                    <li>Created as-built drawings to reflect work of tradespersons</li>
                    <li>Maintained existing archive of engineering drawings</li>
                </ul>
            </section>
        </main>
    )
}
