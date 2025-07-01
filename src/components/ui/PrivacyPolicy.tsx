import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import CompanyInfoItem from './CompanyInfoItem';
import PrivacyPolicyItemOne from './PrivacyPolicyItemOne';
import PrivacyPolicyItemTwo from './PrivacyPolicyItemTwo';
import PrivacyPolicyItemThree from './PrivacyPolicyItemThree';

export default function PrivacyPolicy() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PrivacyPolicy")}</Text>
                    <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                    <Box w="84vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetail")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} />
                    </Box>
                    <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} style={{transform: "translateZ(0)"}}  alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PrivacyPolicy")}</Text>
                    <Separator color="#000000" width="70vw" height={2} marginBottom={4} />
                    <Box w="70vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetailMedium")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetailMedium")} />
                    </Box>
                    <Separator color="#000000" width="70vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("PrivacyPolicy")}</Text>
                    <Separator color="#000000" width="56vw" height={2} marginBottom={4} />
                    <Box w="50vw" >
                        <PrivacyPolicyItemOne content={t("PrivacyPolicyStart")} />
                        <PrivacyPolicyItemTwo height={20} numberString='1' content={t("PP1")} />
                        <PrivacyPolicyItemTwo height={20} numberString='2' content={t("PP2")} />
                        <PrivacyPolicyItemTwo height={20} numberString='3' content={t("PP3")} />
                        <PrivacyPolicyItemTwo height={20} numberString='4' content={t("PP4")} />
                        <PrivacyPolicyItemTwo height={20} numberString='5' content={t("PP5")} />
                        <PrivacyPolicyItemTwo height={40} numberString='6' content={t("PP6")} />
                        <PrivacyPolicyItemThree height={20} numberString='a' content={t("PPA")} />
                        <PrivacyPolicyItemThree height={20} numberString='b' content={t("PPB")} />
                        <PrivacyPolicyItemTwo height={20} numberString='7' content={t("PP7")} />
                        <PrivacyPolicyItemTwo height={20} numberString='8' content={t("PP8")} />
                        <PrivacyPolicyItemOne content={t("PrivacyPolicyDate")} />
                        <PrivacyPolicyItemOne content={t("PrivacyPolicyEnd")} />
                    </Box>
                    <Separator color="#000000" width="56vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    }
}