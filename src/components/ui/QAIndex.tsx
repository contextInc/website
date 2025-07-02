import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator,
  Accordion,
  Span
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import SubscriptionExplanation from './SubscriptionExplanation';
import SubscriptionPriceItem from './SubscriptionPriceItem';
import { useState } from 'react';

export default function QAIndex() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();
    const [value, setValue] = useState(["first-item"]);

    const items = [
        { value: "first-item", title: t("OtpNotArrive"), text: t("OtpNotArriveAnswer") },
        { value: "second-item", title: t("RcsNotArrive"), text: t("RcsNotArriveAnswer") },
        { value: "third-item", title: t("EndToEnd"), text: t("EndToEndAnswer") },
        { value: "fourth-item", title: t("AboutDemo"), text: t("AboutDemoAnswer") },
        { value: "fifth-item", title: t("AboutRepresentativeAuth"), text: t("AboutRepresentativeAuthAnswer") },
        { value: "sixth-item", title: t("AboutAuthLimitTime"), text: t("AboutAuthLimitTimeAnswer") },
    ]

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={20} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                    <Box w="85vw" >
                        <SubscriptionExplanation content={t("SubscriptionExplanation")} />
                        <SubscriptionPriceItem planName={t("OneHourPlan")} priceDetail={t("OneHourPlanPrice")} pricePerMonth={t("OneHourPlanPerMonth")} />
                        <SubscriptionPriceItem planName={t("ThreeHourPlan")} priceDetail={t("ThreeHourPlanPrice")} pricePerMonth={t("ThreeHourPlanPerMonth")} />
                        <SubscriptionPriceItem planName={t("SixHourPlan")} priceDetail={t("SixHourPlanPrice")} pricePerMonth={t("SixHourPlanPerMonth")}/>
                        <SubscriptionPriceItem planName={t("TwelveHourPlan")} priceDetail={t("TwelveHourPlanPrice")} pricePerMonth={t("TwelveHourPlanPerMonth")}/>
                        <Box h="80px" w="85vw">
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
                <Stack bg="#FFFFFF" py={120} style={{transform: "translateZ(0)"}}  alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                    <Box w="85vw" >
                        <SubscriptionExplanation content={t("SubscriptionExplanation")} />
                        <SubscriptionPriceItem planName={t("OneHourPlan")} priceDetail={t("OneHourPlanPrice")} pricePerMonth={t("OneHourPlanPerMonth")} />
                        <SubscriptionPriceItem planName={t("ThreeHourPlan")} priceDetail={t("ThreeHourPlanPrice")} pricePerMonth={t("ThreeHourPlanPerMonth")} />
                        <SubscriptionPriceItem planName={t("SixHourPlan")} priceDetail={t("SixHourPlanPrice")} pricePerMonth={t("SixHourPlanPerMonth")}/>
                        <SubscriptionPriceItem planName={t("TwelveHourPlan")} priceDetail={t("TwelveHourPlanPrice")} pricePerMonth={t("TwelveHourPlanPerMonth")}/>
                        <Box h="80px" w="85vw">
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
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" h="100vh">
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("QA")}</Text>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                    <Box w="40vw" >
                        <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)}>
                            {items.map((item, index) => (
                                <Accordion.Item key={index} value={item.value}>
                                    <Accordion.ItemTrigger textStyle="3xl" fontFamily='Open Sans, sans-serif' color="#6D7685">
                                        <Span flex="1">{item.title}</Span>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" >{item.text}</Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    }
}