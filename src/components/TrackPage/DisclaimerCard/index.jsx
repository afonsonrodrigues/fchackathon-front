import { DisclaimerContainer, TextWrapper, Title, Text, CustomButton } from './styled';
import FCamaraLogo from '../../../assets/fcamara-logo.svg';
import AluraLogo from '../../../assets/alura-logo.svg';
import RocketLogo from '../../../assets/rocket-logo.svg';
import CubosLogo from '../../../assets/cubos-logo.svg';
import { useLocation } from 'react-router-dom';
import api from '../../../services/api';
import disclaimerInfo from '../../../utils/disclaimerInfo';
import { getItem } from '../../../utils/storage';
import '../../../styles/utils.css';

export default function DisclaimerCard({ trackInfo, setTrackInfo, handleGetUserSignedInfo }) {
    const location = useLocation();
    const disclaimer = { ...disclaimerInfo };

    const handleSignToTrack = async () => {
        const trackId = location?.state?.trackId;
        const userId = Number(getItem('id'));

        try {
            await api.post(`/user/sign_track/${trackId}`, { user_id: userId });
            setTrackInfo({ ...trackInfo, userSigned: true });
            handleGetUserSignedInfo();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DisclaimerContainer className='my-0 mx-auto flex flex-col lg:w-[960px] xl:w-[1280px]'>
            <div className='flex flex-col py-6 px-3 sm:px-8 items-center lg:flex-row lg:justify-between'>
                <TextWrapper className='flex flex-col mb-8 lg:w-[622px]'>
                    <Title className='text-2xl font-bold mb-4'>
                        {disclaimer.title}
                    </Title>
                    <Text className='mb-[12px]'>
                        {disclaimer.part1}
                    </Text>
                    <Text className='hidden sm:block'>
                        {disclaimer.part2}
                    </Text>
                </TextWrapper>
                <CustomButton onClick={handleSignToTrack} className='h-[52px] w-[181px] call-button lg:self-start lg:mr-6 lg:mt-6'>
                    Iniciar trilha
                </CustomButton>
            </div>
            <Title className='text-center font-semibold mb-2'>
                Quem apoia
            </Title>
            <div
                className='flex flex-wrap p-6 mb-8 items-center gap-y-4 justify-between lg:justify-center lg:gap-10 xl:gap-12'
            >
                <img className='h-[40px] lg:h-[48px] xl:h-[56px]' src={FCamaraLogo} alt="fcamara's logo" />
                <img className='h-[40px] lg:h-[48px] xl:h-[56px]' src={AluraLogo} alt="alura's logo" />
                <img className='h-[32px] lg:h-[48px] xl:h-[56px]' src={RocketLogo} alt="rocketseat's logo" />
                <img className='h-[40px] lg:h-[48px] xl:h-[56px]' src={CubosLogo} alt="cubos's logo" />
            </div>
        </DisclaimerContainer>
    )
}