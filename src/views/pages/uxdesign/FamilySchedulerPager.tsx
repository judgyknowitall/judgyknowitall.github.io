import { useEffect } from 'react';
import './FamilySchedulerPage.css';
import PageProps from '@/models/PageProps';
import { Quote, GoogleCertificateLink } from './Common';
import { Link } from 'react-router';


function FamilySchedulerPage({pageProps} : {pageProps: PageProps}) {

  useEffect(() => {
    pageProps.onPageChanged("Family Scheduler");
  })

  return (
    <div>
      <GoogleCertificateLink/>
      <Quote quote="Design a Family Schedule-management app or website to enable parents to manage 
          both their and their children's schedules."/>
      <h3>Project Overview</h3>
      <p>
        [insert images]
        This app was designed as part of the Google UI/UX course. The Family Scheduling app was designed for viewing and managing schedules collaboratively, especially targeting families. Note that because this was a learning experience, user research was based off of a few family friends and was not conducted extensively.
      </p>

      <h4>The Problem</h4>
      <p>
        Anusha is a daughter of a busy mother who needs to send reminders to her mother because she needs her to attend important events in her life.
        Jacob is the father of a young family who needs to organize his family’s schedule because he wants to find more intimate time to spend with his wife.
      </p>

      <h4>The Goal</h4>
      <p>
        Our Family Scheduling app will let users set reminders for their family members which will affect busy parents by remembering important events regarding their children. We will measure effectiveness by the number of successfully attended events.
        Our Family Scheduling app will let users organize their family schedules which will affect young families by helping them find more structure and balance in their relationships. We will measure effectiveness by the number of free vs. busy timeslots calculated per week.
      </p>

      <h4>Value Proposition</h4>
      <p>
        [todo]
        Describe all features and benefits (make a list)
        Explain the value (sort into categories)
        Connect features with user needs (persona pain points)
        Review final list (what’s unique?)
      </p>
    </div>
  );
}
    
  export default FamilySchedulerPage;