import {
  Box,
  Table
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

interface SubscriptionPlanForMobileProps {
    selectedPlan: string;
}

export default function SubscriptionPlanForMobile(props: SubscriptionPlanForMobileProps) {
    const { t } = useTranslation();
    if (props.selectedPlan === 'light') {
        return (
            <Box w="85vw" > 
                <Table.Root colorPalette={'pink'} >
                    <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"11vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={24} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("LightPlan")}</Table.ColumnHeader>
                            </Table.Row>
                    </Table.Header>
                    <Table.Body>    
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="md" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("LightPlanUserTarget")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                {/* <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell> */}
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("Price")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("LightPlanPrice")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("OneHour")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >200MB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1{t("Piece")}<br />(1{t("Address")})</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1{t("Piece")}<br />(30{t("Photos")})</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Box>
        );
    } else if (props.selectedPlan === 'standard') {
        return (
            <Box w="85vw" > 
                <Table.Root colorPalette={'pink'} >
                    <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"11vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={24} lineHeight={1} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("Standard")}<br />{t("Plan")}</Table.ColumnHeader>
                            </Table.Row>
                    </Table.Header>
                    <Table.Body>    
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="md" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("StandardPlanUserTarget")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                {/* <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell> */}
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("Price")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("StandardPlanPrice")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("ThreeHours")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >600MB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >2{t("Piece")}<br />(2{t("Address")})</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>2{t("Piece")}<br />(60{t("Photos")})</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Box>
        );
    } else if (props.selectedPlan === 'plenty') {
        return (
            <Box w="85vw" > 
                <Table.Root colorPalette={'pink'} >
                    <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"11vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={24} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("PlentyPlan")}</Table.ColumnHeader>
                            </Table.Row>
                    </Table.Header>
                    <Table.Body>    
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="md" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("PlentyPlanUserTarget")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                {/* <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell> */}
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("Price")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("PlentyPlanPrice")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("SixHours")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1.2GB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >4{t("Piece")}<br />(4{t("Address")})</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>4{t("Piece")}<br />(120{t("Photos")})</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Box>
        );
    }
    else {
        return (
            <Box w="85vw" > 
                <Table.Root colorPalette={'pink'} >
                    <Table.Header >
                            <Table.Row bgColor={"#FFFFFF"}>
                                <Table.ColumnHeader color={"#000000"} fontSize={2} width={"11vw"} border={"1px  #000000"}></Table.ColumnHeader>
                                <Table.ColumnHeader color={"#FF6633"} fontSize={24} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("MaxPlan")}</Table.ColumnHeader>
                            </Table.Row>
                    </Table.Header>
                    <Table.Body>    
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                <Table.Cell />
                                <Table.Cell textStyle="md" color="#000000"   whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("MaxPlanUserTarget")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"120px"}>
                                {/* <Table.Cell textStyle="2xl" color="#6D7685" >{t("Price")}</Table.Cell> */}
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("Price")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("MaxPlanPrice")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >{t("TwelveHours")}</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >2.4GB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >6{t("Piece")}<br />(6{t("Address")})</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>6{t("Piece")}<br />(180{t("Photos")})</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Box>
        );
    }    
}