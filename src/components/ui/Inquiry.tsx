import {
  useBreakpointValue, 
  Text,
  Box,
  Flex,
  Stack
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PageMoveButtonTwo from '../buttons/PageMoveButtonTwo';

export default function Inquiry() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
                <Stack bg="#FFFFFF" style={{transform: "translateZ(0)"}} py={20} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Contact")}</Text>
                    <Box w="84vw" borderColor="#C85062" bg="#FFFFFF" borderWidth={2} borderRadius={20} p={5} >
                        <Box  h={220} w="84vw" >
                            <Text textStyle="2xl" marginBottom={8} w="70vw" textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PleaseMail")}</Text>
                            <Text textStyle="2xl" textAlign="left" w="77vw" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("InquiryMail")}</Text>                            
                        </Box>
                    </Box>
                    <PageMoveButtonTwo toRef="/qa" buttonLabel={t("QA")} />
                </Stack>
        );
    } else if (displayValue === 'medium') {
        return (
                <Stack bg="#FFFFFF" style={{transform: "translateZ(0)"}} py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Contact")}</Text>
                    <Box w="70vw" borderColor="#C85062" bg="#FFFFFF" borderWidth={2} borderRadius={20} p={5}>
                        <Box  h={220} w="70vw" >
                            <Text textStyle="3xl" marginBottom={8} w="66vw" textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PleaseMail")}</Text>
                            <Flex px={5} gap={4} textAlign="left">
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("InquiryMail")}</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <PageMoveButtonTwo toRef="/qa" buttonLabel={t("QA")} />
                </Stack>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Contact")}</Text>
                    <Box w="55vw" borderColor="#C85062" borderWidth={2} borderRadius={20} p={10}>
                        <Box px="2vw" h={200} w="50vw">
                            <Text textStyle="3xl" marginBottom={8}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PleaseMail")}</Text>
                            <Flex px={5} gap={4} textAlign="left">
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("InquiryMail")}</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <PageMoveButtonTwo toRef="/qa" buttonLabel={t("QA")} />
                </Stack>
            </>
        );
    }
}