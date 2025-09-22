import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator,
  Table
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import SubscriptionExplanation from './SubscriptionExplanation';
import SubscriptionPriceItem from './SubscriptionPriceItem';

export default function SubscriptionInfo() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

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
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="45vw" height={2} marginBottom={4} />
                    <SubscriptionExplanation content={t("SubscriptionPlanExplanation")} />
                    <Box w="75vw" > 
                        <Table.Root colorPalette={'pink'} >
                        <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"11vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("LightPlan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Standard")}<br /><br />{t("Plan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("PlentyPlan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("MaxPlan")}</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >1,800円/年</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>2,400円/年</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>3,500円/年</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>4,500円/年</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1時間</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>3時間</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6時間</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>12時間</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >200MB</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>600MB</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1.2GB</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2.4GB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1枚（1宛先）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2枚（2宛先）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4枚（4宛先）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6枚（6宛先）</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1枚（30画像）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2枚（60画像）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4枚（120画像）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6枚（180画像）</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        {/* <Table.Footer>
                            <Table.Row>
                                <Table.Cell />
                                <Table.Cell />
                                <Table.Cell />
                                <Table.Cell />
                                <Table.Cell />
                                <Table.Cell />
                            </Table.Row>
                        </Table.Footer> */}
                        </Table.Root>
                        {/* <Box h="100px" w="40vw" marginTop="20px">
                            <Text textStyle="2xl" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("SubscriptionTicketExplanation")}</Text>
                        </Box> */}
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    }
}