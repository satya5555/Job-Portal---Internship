import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomButton from './CustomButton'; // Import CustomButton component
import styled from 'styled-components';
import FindJobButton from './FindJobButton'
import ApplyNowButton from './ApplyNowButton';

const JobListContainer = styled.div` 
margin-top: 92px;
top: 176px;
  left: 503px; 
  right: 171px;
  margin-left: 503px; // Aligning 503px from the left end
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FilterContainer = styled.div`

  width: 300px;
  height: 720px;
  position: absolute;
  top: 176px;
  left: 171px;
  background: #FFFFFF;
  box-shadow: 0px 2px 18px 0px #18191C08;
  border-radius: 8px;
  padding: 40px 20px;
  display: flex;  
  flex-direction: column;
  gap: 24px;
  overflow-y: auto; // Add vertical scroll if content exceeds height
`;

const StyledLabel = styled.div`
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#101828'
`;

  const FilterLabel = styled.div`
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #344054;
`;




const FilterHeading = styled.div`
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #101828;
`;




  const FilterApply = styled('label')({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '24px',
    textAlign: 'left',
    color: '#F96343'
  });
  
const JobCard = styled.div`
  width: 100%; // Ensure the card takes full width of the container
  padding: 32px;
  background: #FFFFFF;
  box-shadow: 0px 2px 18px 0px #18191C08;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoleName = styled.h5`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  color: #18191C;
  margin: 0;
`;

const CompanyName = styled.h6`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  color: #667085;
  margin: 0;
`;

const JobInfo = styled.p`
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  color: #18191C;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px; /* Add 8px space between icon and content */
`;

const SkillsHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #344054;
  margin: 0;
`;

const SkillsHeading = styled.div`
  margin-right: 8px; /* Add some space between the label and the content */
`;

const SkillsContent = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  color: #344054;
  white-space: nowrap; /* Ensure the text stays on one line */
  overflow: hidden; /* Hide the overflow content */
  text-overflow: ellipsis; /* Display ellipsis if content overflows */
`;

const SkillsContentSideBar = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  color: #344054;
  white-space: normal; /* Allow the text to wrap */
  word-wrap: break-word; /* Optionally, break long words */
  /* or */
  /* word-break: break-all; */
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh; /* Full viewport height */
  width: 800px; /* Adjust the width as needed */
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  padding: 20px;
  &.open {
    transform: translateX(0);
  }
`;

const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #667085; 
  font-family: Inter;
  font-size: 12px;  
  font-weight: 400;
  line-height: 18px;
`;

const ChevronIcon = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 16px;
  height: 16px;

  box-sizing: border-box;
  background: #FFFFFF; // White background for unchecked state
  border: 1px solid #D0D5DD; // Gray/300 border for unchecked state
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:12px;

  position: relative;

  &:checked {
    background: rgba(252, 235, 232, 1); // Background color for checked state
    border: 1.67px solid rgba(245, 85, 51, 1); // Border for checked state
  }

  &:checked::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 10px;
    border: solid #F55533;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    left: 4px;
    top: 0px;
  }
`;



const ExperienceSlider = styled.input.attrs({ type: 'range', min: '0', max: '20' })`
  width: 100%;
  -webkit-appearance: none;
  height: 6px;
  background: linear-gradient(to right, #F55533 ${(props) => props.value * 5}%, #EAECF0 ${(props) => props.value * 5}%);
  outline: none;
  opacity: 0.7;
  transition: opacity .2s, background .2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border: 1px solid #F55533;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #F55533;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-ms-thumb {
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border: 1px solid #F55533;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const BriefcaseIcon = styled.svg`
  width: 18px;
  height: 16px;
  fill: none;
  stroke: #667085;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const Experience = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400px;
  line-height: 20px;
  text-align: left;
  color: #344054;
  margin: 0;
  gap:8px;
`;

const Location = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400px;
  line-height: 20px;
  text-align: left;
  color: #344054;
  margin: 0;
  gap:8px;
`;

const LocationIcon = styled.svg`
  width: 14px;
  height: 18px;
  fill: none;
  stroke: #667085;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const StyledLine = styled.div`
  width: 736px;
  height: 0px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; // Gap between checkbox and label
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;
  gap: 10px;
  width: 1366px;
  height: 52px;
  margin-bottom:40px;
`;

const AdvanceFilterContainer = styled.div`
  position: absolute;
  top: 84px;
  bottom: 632px;
  left: 171px;
  right: 171px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  gap: 12.67px; /* Set the desired gap here */
  width: 1024px;
  height: 52px;
  background: #FFFFFF;
  box-shadow: 0px 8px 24px rgba(109, 46, 0, 0.04);
  border-radius: 8px;
  margin-bottom:40px;
`;

const SInputField = styled.input`
  margin-bottom:40px;
  margin: 0 auto;
  width: 473px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding: 12px 12px 12px 48px;
  font-family: 'Poppins';
  font-size: 16px;
  color: #9199A3;

  &::placeholder {
    color: #9199A3;
  }
`;

const LInputField = styled.input`
margin-bottom:40px;
  margin: 0 auto;
  width: 400px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding: 12px 12px 12px 48px;
  font-family: 'Poppins';
  font-size: 16px;
  color: #9199A3;

  &::placeholder {
    color: #9199A3;
  }
`;

const Divider = styled.div`
  margin: 0 auto;
  width: 37px;
  border: 1px solid #EDEFF5;
  transform: rotate(90deg);
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: calc(50% - 24px/2);

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #F55533;
    stroke-width: 2;
  }
`;

const MapPinIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #F55533;
    stroke-width: 2;
  }
`;

const SearchBar = ({ filters, setFilters }) => {
  const handleSearchChange = (event) => {
    setFilters({ ...filters, search: event.target.value });
  };

  const handleLocationChange = (event) => {
    setFilters({ ...filters, location: event.target.value });
  };

  return (
    <SearchBarContainer>
      <AdvanceFilterContainer>
        <div style={{ position: 'relative', flex: 1 }}>
          <SInputField
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search by: Job title or Position"
          />
          <SearchIcon>
            <svg>
              <circle cx="11" cy="11" r="8" />
              <line x1="16" y1="16" x2="21" y2="21" />
            </svg>
          </SearchIcon>
        </div>
        <Divider />
        <div style={{ position: 'relative', flex: 1 }}>
          <LInputField
            type="text"
            value={filters.location}
            onChange={handleLocationChange}
            placeholder="City or state"
          />
          <MapPinIcon>
            <svg>
              <path d="M12 2a7 7 0 00-7 7c0 4.18 7 13 7 13s7-8.82 7-13a7 7 0 00-7-7z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </MapPinIcon>
        </div>
      </AdvanceFilterContainer>
    </SearchBarContainer>
  );
};


const JobList = () => {
  const [initialJobs, setInitialJobs] = useState([]); // Store initial jobs fetched
  const [filteredJobs, setFilteredJobs] = useState([]); // Store filtered jobs
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    jobType: '',
    experience: 0
  });
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    // Fetch initial jobs when component mounts
    axios.get('http://localhost:8081/jobs')
      .then(response => {
        setInitialJobs(response.data); // Store all jobs initially
        setFilteredJobs(response.data); // Initially display all jobs
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);


  const handleExperienceChange = (event) => {
    setFilters({ ...filters, experience: event.target.value });
  };

  const handleFindJobClick = () => {
    // Filter jobs based on the current filters
    const updatedFilteredJobs = initialJobs.filter(job => {
      const experience = parseInt(job.Experience, 10) || 0;
      return (
        (filters.search === '' ||
          (job.RoleName && job.RoleName.toLowerCase().includes(filters.search.toLowerCase())) ||
          (job.CompanyName && job.CompanyName.toLowerCase().includes(filters.search.toLowerCase()))) &&
        (filters.location === '' || (job.Location && job.Location.toLowerCase().includes(filters.location.toLowerCase()))) &&
        (filters.jobType === '' || (job.JobType && job.JobType.toLowerCase().includes(filters.jobType.toLowerCase()))) &&
        (experience >= filters.experience)
      );
    });

    setFilteredJobs(updatedFilteredJobs); // Update filtered jobs based on current filters
  };
  
  return (
    <div>
      
      <FilterContainer>
       <FilterHeading>Filters</FilterHeading>
        <FilterApply>Applied (1)</FilterApply>
        <div>
          <StyledLabel>Educational Qualification</StyledLabel>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>B.Tech Computer Science</FilterLabel>
          </FilterOption>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>B.Tech IT</FilterLabel>
          </FilterOption>
        </div>
        <div>
          <StyledLabel>Work Mode</StyledLabel>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>Hybrid</FilterLabel>
          </FilterOption>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>Work from office</FilterLabel>
          </FilterOption>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>Remote</FilterLabel>
          </FilterOption>
        </div>
        <div>
          <StyledLabel>Experience</StyledLabel>
          <div>
            <ExperienceSlider value={filters.experience} onChange={handleExperienceChange} />
            <div>{filters.experience} Yrs</div>
          </div>
        </div>
        <div>
          <StyledLabel>Salary</StyledLabel>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>8 - 10 Lakhs</FilterLabel>
          </FilterOption>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>10 - 16 Lakhs</FilterLabel>
          </FilterOption>
          <FilterOption>
            <CustomCheckbox /> <FilterLabel>16 - 20 Lakhs</FilterLabel>
          </FilterOption>
        </div>
      </FilterContainer>
      <SearchBar filters={filters} setFilters={setFilters} />
      <JobListContainer>
      <div className="container py-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <FindJobButton onClick={handleFindJobClick}>
                Find Job
              </FindJobButton>
            </div>
          </div>
          {filteredJobs.map(job => (
            <div style={{ marginTop: '16px' }}>
            <JobCard key={job.JobId} onClick={() => setExpandedJob(job)}>
             <JobHeader>
            <div style={{ marginTop: '8px' }}> 
            <RoleName>{job.RoleName}</RoleName>
            <CompanyName>{job.CompanyName}</CompanyName>
            </div>
                <img
                  src={job.CompanyLogo}
                  alt={job.CompanyName}
                  style={{ width: '50px', height: '50px' }}
                />
              </JobHeader>
    
              <div>
                <SkillsHeadingContainer>
                  <SkillsHeading>Skills:</SkillsHeading>
                  <SkillsContent>{job.SkillSet}</SkillsContent>
                </SkillsHeadingContainer>
              </div>
              <JobInfo>
                <BriefcaseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                  <path d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z" />
                </BriefcaseIcon>
                <Experience>{job.Experience}</Experience>
              </JobInfo>
              <JobInfo>
                <LocationIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18">
                  <path d="M7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" />
                  <path d="M7 16.5C10 13.5 13 10.8137 13 7.5C13 4.18629 10.3137 1.5 7 1.5C3.68629 1.5 1 4.18629 1 7.5C1 10.8137 4 13.5 7 16.5Z" />
                </LocationIcon>
                <Location> {job.Location} </Location>
              </JobInfo>
              
                <JobInfo>{job.CTC}</JobInfo>
                <CustomButton link={job.ApplyNowLink}>
                  Apply
                </CustomButton>
              
            </JobCard>
            </div>
          ))}
        </div>
      </JobListContainer>
      {expandedJob && (
        <Sidebar className="open">  
            <BackButton onClick={() => setExpandedJob(null)}>
              <ChevronIcon viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.75 10.5L5.25 7L8.75 3.5" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </ChevronIcon>
              Back
            </BackButton>
          <div>
            <JobHeader>
            <div style={{ marginTop: '8px' }}> 
            <RoleName>{expandedJob.RoleName}</RoleName>
            <CompanyName>{expandedJob.CompanyName}</CompanyName>
            </div>
            <img
                  src={expandedJob.CompanyLogo}
                  alt={expandedJob.CompanyName}
                  style={{ width: '50px', height: '50px' }}
                />
            </JobHeader>
            
            <div style={{ marginTop: '8px' }}>
                <SkillsHeadingContainer>
                  <SkillsHeading>Skills:</SkillsHeading>
                  <SkillsContentSideBar>{expandedJob.SkillSet}</SkillsContentSideBar>
                </SkillsHeadingContainer>
              </div>
              <div style={{ marginTop: '12px' }}>
              <JobInfo>
                <BriefcaseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                  <path d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z" />
                </BriefcaseIcon>
                <Experience>{expandedJob.Experience}</Experience>
              </JobInfo>
              </div>
              <div style={{ marginTop: '12px' }}>
              <JobInfo>
                <LocationIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18">
                  <path d="M7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" />
                  <path d="M7 16.5C10 13.5 13 10.8137 13 7.5C13 4.18629 10.3137 1.5 7 1.5C3.68629 1.5 1 4.18629 1 7.5C1 10.8137 4 13.5 7 16.5Z" />
                </LocationIcon>
                <Location> {expandedJob.Location} </Location>
              </JobInfo>
              </div>
              <div style={{ marginTop: '12px' }}>
              <StyledLine/>
              </div>
              {expandedJob.PostedDate && (
                <div style={{ marginTop: '12px' }}>
                <JobInfo>
                  <p>
                    <strong>Posted Date:</strong> {expandedJob.PostedDate}
                  </p>
                </JobInfo>
                </div>
              )}
              {expandedJob.CTC && (
                <JobInfo>
                  <p>
                    <strong>CTC:</strong> {expandedJob.CTC}
                  </p>
                </JobInfo>
              )}
              {expandedJob.JobType && (
                <JobInfo>
                  <p>
                    <strong>Job Type:</strong> {expandedJob.JobType}
                  </p>
                </JobInfo>
              )}
              {expandedJob.Description && (
                <JobInfo>
                  <p>
                    <strong>Description:</strong> {expandedJob.Description}
                  </p>
                </JobInfo>
              )}
              {expandedJob.Noofopening && (
                <JobInfo>
                  <p>
                    <strong>No of Openings:</strong> {expandedJob.Noofopening}
                  </p>
                </JobInfo>
              )}
              {expandedJob.EducationQualification && (
                <div style={{ marginTop: '12px' }}>
                <JobInfo>
                  <p>
                    <strong>Education Qualification:</strong> {expandedJob.EducationQualification}
                  </p>
                </JobInfo>
                </div>
              )}
              {expandedJob.Remarks && (
                <JobInfo>
                  <p>
                    <strong>Remarks:</strong> {expandedJob.Remarks}
                  </p>
                </JobInfo>
              )}
              <JobInfo>
                {expandedJob.ApplyNowLink && (
                 <ApplyNowButton link={expandedJob.ApplyNowLink}>
                 Apply Now
               </ApplyNowButton>
                )}
                {expandedJob.JD && (
                  <a
                    href={expandedJob.JD}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Job Description
                  </a>
                )}
              </JobInfo>
          </div>
        </Sidebar>
      )}
    </div>
  );
};
export default JobList;