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

export default function CompanyInfo() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
                    <Separator color="#C85062" width="84vw" height={2} marginBottom={4} />
                    <Box w="84vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetail")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} />
                    </Box>
                    <Separator color="#C85062" width="84vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
                    <Separator color="#C85062" width="70vw" height={2} marginBottom={4} />
                    <Box w="70vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetailMedium")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetailMedium")} />
                    </Box>
                    <Separator color="#C85062" width="70vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
                    <Separator color="#C85062" width="50vw" height={2} marginBottom={4} />
                    <Box w="50vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetail")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} />
                    </Box>
                    <Separator color="#C85062" width="50vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    }
}