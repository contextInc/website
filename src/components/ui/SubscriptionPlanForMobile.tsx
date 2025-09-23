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
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >1,800円/年</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1時間</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >200MB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1枚（1宛先）</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1枚（30画像）</Table.Cell>
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
                                <Table.ColumnHeader color={"#FF6633"} fontSize={24} width={"16vw"} borderLeftWidth="1px" borderLeftColor={"#000000"} borderBottom={"none"}>{t("StandardPlan")}</Table.ColumnHeader>
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
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >1,800円/年</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1時間</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >200MB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1枚（1宛先）</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1枚（30画像）</Table.Cell>
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
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >1,800円/年</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1時間</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >200MB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1枚（1宛先）</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1枚（30画像）</Table.Cell>
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
                                <Table.Cell textStyle="lg" color="#000000"  fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif' borderLeftWidth="1px" borderLeftColor={"#000000"} >1,800円/年</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceTime")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1時間</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("VoiceSize")}<br /></Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >200MB</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("VoiceGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"} >1枚（1宛先）</Table.Cell>
                            </Table.Row>
                            <Table.Row bgColor={"#FFFFFF"} height={"152px"}>
                                <Table.Cell textStyle="lg" color="#6D7685" >{t("SubscriptionStartBenefit")}<br/>{t("PhotoGift")}<br />{t("Ticket")}</Table.Cell>
                                <Table.Cell textStyle="lg" color="#6D7685" fontWeight="bold" borderLeftWidth="1px" borderLeftColor={"#000000"}>1枚（30画像）</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Box>
        );
    }    
}