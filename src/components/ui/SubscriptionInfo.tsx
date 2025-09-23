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
import { useState } from 'react';
import PlanSelectButtonsForMobile from './PlanSelectButtonsForMobile';
import SubscriptionPlanForMobile from './SubscriptionPlanForMobile';

export default function SubscriptionInfo() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();
    const [selectedPlan, setSelectedPlan] = useState('standard');

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={20} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={8} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="85vw" height={2} marginBottom={4} />
                    <SubscriptionExplanation content={t("SubscriptionPlanExplanation")} />
                    <PlanSelectButtonsForMobile selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
                    <SubscriptionPlanForMobile selectedPlan={selectedPlan}  />
                    {/* <Separator color="#000000" width="85vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} style={{transform: "translateZ(0)"}}  alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="88vw" height={2} marginBottom={4} />
                    <SubscriptionExplanation content={t("SubscriptionPlanExplanation")} />
                    <Box w="88vw" > 
                        <Table.Root colorPalette={'pink'} >
                        <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"13vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={24} width={"18vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Light")}<br/>{t("Plan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={24} width={"18vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Standard")}<br />{t("Plan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={24} width={"18vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Plenty")}<br/>{t("Plan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={24} width={"18vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Max")}<br/>{t("Plan")}</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>    
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="lg" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("LightPlanUserTarget")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("StandardPlanUserTarget")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("PlentyPlanUserTarget")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("MaxPlanUserTarget")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                {/* <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell> */}
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("LightPlanPrice")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("StandardPlanPrice")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("PlentyPlanPrice")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("MaxPlanPrice")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("OneHour")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("ThreeHours")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("SixHours")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("TwelveHours")}</Table.Cell>
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
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1{t("Piece")}<br />(1{t("Address")})</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2{t("Piece")}<br />(2{t("Address")})</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4{t("Piece")}<br />(4{t("Address")})</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6{t("Piece")}<br />(6{t("Address")})</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1{t("Piece")}<br />(30{t("Photos")})</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2{t("Piece")}<br />(60{t("Photos")})</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4{t("Piece")}<br />(120{t("Photos")})</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6{t("Piece")}<br />(180{t("Photos")})</Table.Cell>
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
                    {/* <Separator color="#000000" width="85vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("Subscription")}</Text>
                    <Separator color="#000000" width="75vw" height={2} marginBottom={4} />
                    <SubscriptionExplanation content={t("SubscriptionPlanExplanation")} />
                    <Box w="75vw" > 
                        <Table.Root colorPalette={'pink'} >
                        <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"11vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("LightPlan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Standard")}<br />{t("Plan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("PlentyPlan")}</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} lineHeight={1.5} fontSize={32} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("MaxPlan")}</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="xl" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("LightPlanUserTarget")}</Table.Cell>
                                <Table.Cell textStyle="xl" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("StandardPlanUserTarget")}</Table.Cell>
                                <Table.Cell textStyle="xl" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("PlentyPlanUserTarget")}</Table.Cell>
                                <Table.Cell textStyle="xl" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("MaxPlanUserTarget")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                {/* <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell> */}
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("LightPlanPrice")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("StandardPlanPrice")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("PlentyPlanPrice")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("MaxPlanPrice")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("OneHour")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("ThreeHours")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("SixHours")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>{t("TwelveHours")}</Table.Cell>
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
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1{t("Piece")}（1{t("Address")}）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2{t("Piece")}（2{t("Address")}）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4{t("Piece")}（4{t("Address")}）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6{t("Piece")}（6{t("Address")}）</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="2xl" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1{t("Piece")}（30{t("Photos")}）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2{t("Piece")}（60{t("Photos")}）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4{t("Piece")}（120{t("Photos")}）</Table.Cell>
                                <Table.Cell textStyle="2xl" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6{t("Piece")}（180{t("Photos")}）</Table.Cell>
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