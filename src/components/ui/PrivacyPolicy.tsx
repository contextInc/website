import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PrivacyPolicyItemOne from './PrivacyPolicyItemOne';
import PrivacyPolicyItemTwo from './PrivacyPolicyItemTwo';
import PrivacyPolicyItemThree from './PrivacyPolicyItemThree';
import PrivacyPolicyItemFour from './PrivacyItemFour';

export default function PrivacyPolicy() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PrivacyPolicy")}</Text>
                    <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                    <Box w="84vw" marginBottom="30px" >
                        <PrivacyPolicyItemOne content={t("PrivacyPolicyStart")} />
                        <PrivacyPolicyItemTwo height={120} numberString='1' content={t("PP1")} />
                        <PrivacyPolicyItemTwo height={120} numberString='2' content={t("PP2")} />
                        <PrivacyPolicyItemTwo height={120} numberString='3' content={t("PP3")} />
                        <PrivacyPolicyItemTwo height={150} numberString='4' content={t("PP4")} />
                        <PrivacyPolicyItemTwo height={180} numberString='5' content={t("PP5")} />
                        <PrivacyPolicyItemTwo height={250} numberString='6' content={t("PP6")} />
                        <PrivacyPolicyItemThree height={130} numberString='a' content={t("PPA")} />
                        <PrivacyPolicyItemThree height={130} numberString='b' content={t("PPB")} />
                        <PrivacyPolicyItemTwo height={160} numberString='7' content={t("PP7")} />
                        <Text textStyle="lg" textAlign="left" color="#6D7685" fontFamily='Open Sans, sans-serif' px={10} marginBottom="20px" >{t("PrivacyEmail")}</Text>
                        <PrivacyPolicyItemTwo height={150} numberString='8' content={t("PP8")} />
                        <PrivacyPolicyItemTwo height={150} numberString='9' content={t("PP9")} />
                        <PrivacyPolicyItemTwo height={150} numberString='10' content={t("PP10")} />
                        <PrivacyPolicyItemThree height={130} numberString='a' content={t("PPA_CASE")} />
                        <PrivacyPolicyItemThree height={130} numberString='b' content={t("PPB_CASE")} />
                        <PrivacyPolicyItemTwo height={160} numberString='11' content={t("PP11")} />
                        <Text textStyle="lg" textAlign="left" color="#6D7685" fontFamily='Open Sans, sans-serif' px={10} marginBottom="20px" >{t("inquiryEmail")}</Text>
                        <PrivacyPolicyItemFour content={t("PrivacyPolicyDate")} />
                        <PrivacyPolicyItemFour content={t("PrivacyPolicyEnd")} />
                    </Box>
                    <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PrivacyPolicy")}</Text>
                    <Separator color="#000000" width="80vw" height={2} marginBottom={4} />
                    <Box w="77vw" >
                        <PrivacyPolicyItemOne content={t("PrivacyPolicyStart")} />
                        <PrivacyPolicyItemTwo height={100} numberString='1' content={t("PP1")} />
                        <PrivacyPolicyItemTwo height={100} numberString='2' content={t("PP2")} />
                        <PrivacyPolicyItemTwo height={120} numberString='3' content={t("PP3")} />
                        <PrivacyPolicyItemTwo height={120} numberString='4' content={t("PP4")} />
                        <PrivacyPolicyItemTwo height={150} numberString='5' content={t("PP5")} />
                        <PrivacyPolicyItemTwo height={200} numberString='6' content={t("PP6")} />
                        <PrivacyPolicyItemThree height={110} numberString='a' content={t("PPA")} />
                        <PrivacyPolicyItemThree height={80} numberString='b' content={t("PPB")} />
                        <PrivacyPolicyItemTwo height={140} numberString='7' content={t("PP7")} />
                        <Text textStyle="2xl" textAlign="left" color="#6D7685" fontFamily='Open Sans, sans-serif' px={20} marginBottom="40px" >{t("PrivacyEmail")}</Text>
                        <PrivacyPolicyItemTwo height={120} numberString='8' content={t("PP8")} />
                        <PrivacyPolicyItemFour content={t("PrivacyPolicyDate")} />
                        <PrivacyPolicyItemFour content={t("PrivacyPolicyEnd")} />
                    </Box>
                    <Separator color="#000000" width="80vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PrivacyPolicy")}</Text>
                    <Separator color="#000000" width="56vw" height={2} marginBottom={4} />
                    <Box w="50vw" marginBottom="20px">
                        <PrivacyPolicyItemOne content={t("PrivacyPolicyStart")} />
                        <PrivacyPolicyItemTwo height={120} numberString='1' content={t("PP1")} />
                        <PrivacyPolicyItemTwo height={120} numberString='2' content={t("PP2")} />
                        <PrivacyPolicyItemTwo height={120} numberString='3' content={t("PP3")} />
                        <PrivacyPolicyItemTwo height={120} numberString='4' content={t("PP4")} />
                        <PrivacyPolicyItemTwo height={200} numberString='5' content={t("PP5")} />
                        <PrivacyPolicyItemTwo height={230} numberString='6' content={t("PP6")} />
                        <PrivacyPolicyItemThree height={120} numberString='a' content={t("PPA")} />
                        <PrivacyPolicyItemThree height={120} numberString='b' content={t("PPB")} />
                        <PrivacyPolicyItemTwo height={160} numberString='7' content={t("PP7")} />
                        <Text textStyle="2xl" textAlign="left" color="#6D7685" fontFamily='Open Sans, sans-serif' px={20} marginBottom="80px" >{t("PrivacyEmail")}</Text>
                        <PrivacyPolicyItemTwo height={120} numberString='8' content={t("PP8")} />
                        <PrivacyPolicyItemFour content={t("PrivacyPolicyDate")} />
                        <PrivacyPolicyItemFour content={t("PrivacyPolicyEnd")} />
                    </Box>
                    <Separator color="#000000" width="56vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    }
}