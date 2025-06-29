// import {
//   useBreakpointValue, Stack, Text,
//   Flex
// } from '@chakra-ui/react';
// import { useTranslation } from 'react-i18next';
// import '@/i18n';

// interface PictureFlowProps {

// }

// export default function PictureFlow() {
//     const displayValue = useBreakpointValue({base: 'small', md: 'large'});
//     const { t } = useTranslation();

//     if (displayValue === 'small') {        
//         return (
//             <Stack bg="#FFFFFF"  py={20} align="center" justify="space-between">
                
//             </Stack>
//         );
//     } else {
//         return (
//             <Flex align="center" gap={12} py={8} justify="space-between">
//                 <Text textStyle="5xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='system-ui, sans-serif'>{"①" + t("VoiceRecording")}</Text>
//                 <Image src="/images/voice_recording.png" alt="Voice Recording" boxSize="200px" />            
//             </Flex>
//         );
//     }
// }