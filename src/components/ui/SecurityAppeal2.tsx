import {
  useBreakpointValue, 
  Text,
  Box,
  Flex,
  Stack
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function SecurityAppeal2() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <></>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={30} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("RCSMessageAppeal")}</Text>
                    <Box w="55vw" borderColor="#C85062" borderWidth={2} borderRadius={20} p={10}>
                        <Box px="2vw" h={200} w="50vw">
                            <Text textStyle="4xl" marginBottom={8}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("SMSDangerAppeal")}</Text>
                            <Flex px={5} gap={4} textAlign="left">
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("contextUseRCS")}</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Stack>            
            </>
        );
    }
}