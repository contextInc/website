import {
  useBreakpointValue, 
  Text,
  Box,
  Flex,
  Stack
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function SecurityAppeal3() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Box bg="#FFFFFF" py={45} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#233452/80" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("HardToCheatMedium")}</Text>
                </Box>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Box bg="#FFFFFF" py={55} alignItems="center" w="100vw" >
                    <Text textStyle="4xl" marginBottom={20} color="#233452/80" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("HardToCheatMedium")}</Text>
                </Box>
            </>
        );
    } else {
        return (
            <>
                <Box bg="#FFFFFF" py={45} alignItems="center" w="100vw" >
                    <Text textStyle="4xl" marginBottom={20} color="#233452/80" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("HardToCheat")}</Text>
                </Box>
            </>
        );
    }
}