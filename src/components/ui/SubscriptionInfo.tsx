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
import SubscriptionExplanation from './SubscriptionExplanation';
import SubscriptionPriceItem from './SubscriptionPriceItem';

export default function SubscriptionInfo() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
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
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
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
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="45vw" height={2} marginBottom={4} />
                    <Box w="40vw" >
                        <SubscriptionExplanation content={t("SubscriptionExplanation")} />
                        <SubscriptionPriceItem planName={t("OneHourPlan")} priceDetail={t("OneHourPlanPrice")} pricePerMonth={t("OneHourPlanPerMonth")} />
                        <SubscriptionPriceItem planName={t("ThreeHourPlan")} priceDetail={t("ThreeHourPlanPrice")} pricePerMonth={t("ThreeHourPlanPerMonth")} />
                        <SubscriptionPriceItem planName={t("SixHourPlan")} priceDetail={t("SixHourPlanPrice")} pricePerMonth={t("SixHourPlanPerMonth")}/>
                        <SubscriptionPriceItem planName={t("TwelveHourPlan")} priceDetail={t("TwelveHourPlanPrice")} pricePerMonth={t("TwelveHourPlanPerMonth")}/>
                        <Box h="80px" w="50vw">
                            <Text textStyle="2xl" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("SubscriptionTicketExplanation")}</Text>
                        </Box>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    <Separator color="#000000" width="45vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    }
}