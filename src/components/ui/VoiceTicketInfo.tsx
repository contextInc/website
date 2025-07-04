import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import VoiceTicketExplanation from './VoiceTicketExplanation';
import VoiceTicketPriceItem from './VoiceTicketPriceItem';

export default function VoiceTicketInfo() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={30} style={{transform: "translateZ(0)"}}  alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("VoiceTicket")}</Text>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                    <Box w="85vw" >
                        <VoiceTicketExplanation content={t("VoiceTicketExplanation")} />
                        <VoiceTicketPriceItem ticketNum={1} ticketDetail={t("OneVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={2} ticketDetail={t("TwoVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={3} ticketDetail={t("ThreeVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={4} ticketDetail={t("FourVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={6} ticketDetail={t("SixVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={8} ticketDetail={t("EightVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={10} ticketDetail={t("TenVoiceTicketPrice")} />
                        <Box h="80px" w="85vw" marginBottom="20px">
                            <Text textStyle="lg" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("SubscriptionTicketExplanation")}</Text>
                        </Box>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Stack bg="#FFFFFF" py={30} style={{transform: "translateZ(0)"}}  alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("VoiceTicket")}</Text>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                    <Box w="80vw" >
                        <VoiceTicketExplanation content={t("VoiceTicketExplanation")} />
                        <VoiceTicketPriceItem ticketNum={1} ticketDetail={t("OneVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={2} ticketDetail={t("TwoVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={3} ticketDetail={t("ThreeVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={4} ticketDetail={t("FourVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={6} ticketDetail={t("SixVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={8} ticketDetail={t("EightVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={10} ticketDetail={t("TenVoiceTicketPrice")} />
                        <Box h="80px" w="80vw">
                            <Text textStyle="2xl" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("SubscriptionTicketExplanation")}</Text>
                        </Box>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={30} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("VoiceTicket")}</Text>
                    <Separator color="#000000" width="45vw" height={2} marginBottom={4} />
                    <Box w="40vw" >
                        <VoiceTicketExplanation content={t("VoiceTicketExplanation")} />
                        <VoiceTicketPriceItem ticketNum={1} ticketDetail={t("OneVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={2} ticketDetail={t("TwoVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={3} ticketDetail={t("ThreeVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={4} ticketDetail={t("FourVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={6} ticketDetail={t("SixVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={8} ticketDetail={t("EightVoiceTicketPrice")} />
                        <VoiceTicketPriceItem ticketNum={10} ticketDetail={t("TenVoiceTicketPrice")} />
                        <Box h="100px" w="40vw" marginTop="20px">
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