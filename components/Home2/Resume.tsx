import { ResumeWrapper } from '@/styles/StyledComponents/Home2Styled/AboutMeStyled';
import { Box, Stack, Typography } from '@mui/material';
import SectionHeading from './SectionHeading/SectionHeading';
import ExperienceIcon from '@/ui/Icons/ExperienceIcon';
import CompleteProjectIcon from '@/ui/Icons/CompleteProjectIcon';
import ClientIcon from '@/ui/Icons/ClientIcon';

const Resume = () => {
    return (
        <ResumeWrapper>
            <SectionHeading hedaing="Resume" />
            <Stack direction='row' flexWrap='wrap' className='total-exp'>
                <Box className='exp-box'>
                    <span><ExperienceIcon /></span>
                    <Box className='exp-content'>
                        <Typography variant='h3'>6+</Typography>
                        <Typography variant='body1'>Years of Experience</Typography>
                    </Box>
                </Box>
                <Box className='exp-box'>
                    <span><CompleteProjectIcon /></span>
                    <Box className='exp-content'>
                        <Typography variant='h3'>30+</Typography>
                        <Typography variant='body1'>Project Complete</Typography>
                    </Box>
                </Box>
                <Box className='exp-box'>
                    <span><ClientIcon /></span>
                    <Box className='exp-content'>
                        <Typography variant='h3'>98%</Typography>
                        <Typography variant='body1'>Client Satisfaction</Typography>
                    </Box>
                </Box>
            </Stack>
            <Box className='experience-sec'>
                <Stack direction='row' alignItems='center' flexWrap='wrap' className='exp-heading'>
                    <span></span>
                </Stack>
            </Box>
        </ResumeWrapper>
    )
}


export default Resume