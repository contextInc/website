import {
  useBreakpointValue, Stack, Text,Image,
  Flex,
  Box,
  Button,
  Accordion
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import RecordingOne from '../../assets/recordingThree.png';
import RecordingTwo from '../../assets/recordingTwo.png';
import ContactOne from '../../assets/contactOne.png';
import ContactTwo from '../../assets/contactTwo.png';
import SettingOne from '../../assets/settingOne.png';
import SettingTwo from '../../assets/settingTwo.png';
import TriggerOne from '../../assets/triggerOne.png';
import TriggerTwo from '../../assets/triggerTwo.png';
import FollowOne from '../../assets/followOne.png';
import FollowTwo from '../../assets/followTwo.png';
import SetSpan from '../../assets/settingSpan.png';
import smsOne from '../../assets/smsOne.png';
import mailOne from '../../assets/mailOne.png';
import installOne from '../../assets/installOne.png';
import installTwo from '../../assets/installTwo.png';
import telAuthOne from '../../assets/telAuthOne.png';
import telAuthTwo from '../../assets/telAuthTwo.png';
import senderConfirmOne from '../../assets/senderConfirmOne.png';
import senderConfirmTwo from '../../assets/senderConfirmTwo.png';
import downloadOne from '../../assets/downloadOne.png';
import downloadTwo from '../../assets/downloadTwo.png';
import { useState } from 'react';
import FlowOneComponent from './FlowComponents/FlowOneComponent';
import FlowTwoComponent from './FlowComponents/FlowTwoComponent';
import FlowThreeComponent from './FlowComponents/FlowThreeComponent';
import FlowFourComponent from './FlowComponents/FlowFourComponent';
import FlowFiveComponent from './FlowComponents/FlowFiveComponent';
import AcceptFlowOneComponent from './FlowComponents/AcceptFlowOneComponent';
import AcceptFlowTwoComponent from './FlowComponents/AcceptFlowTwoComponent';
import AcceptFlowThreeComponent from './FlowComponents/AcceptFlowThreeComponent';
import AcceptFlowFiveComponent from './FlowComponents/AcceptFlowFiveComponent';
import AcceptFlowSixComponent from './FlowComponents/AcceptFlowSixComponent';
import StartOne from '../../assets/startOne.png';
import Install from '../../assets/install.png';
import AuthCode from '../../assets/authCode.png';
import TelInput from '../../assets/telInput.png';
import TelOtpInput from '../../assets/telOtpInput.png';
import MailInput from '../../assets/mailInput.png';


export default function HowToSet() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();
    const [modeNum, setModeNum] = useState(1);
    const [value, setValue] = useState(["first-iteam"]);

    const items = [
        { value: "first-item", title: t("Flow1"), content: <FlowOneComponent/> },
        { value: "second-item", title: t("Flow2"), content: <FlowTwoComponent/> },
        { value: "third-item", title: t("Flow3"), content: <FlowThreeComponent/> },
        { value: "fourth-item", title: t("Flow4"), content: <FlowFourComponent/> },
        { value: "fifth-item", title: t("Flow5"), content: <FlowFiveComponent/> },
    ];

    const acceptItems = [
        { value: "acfirst-item", title: t("AcceptFlow1"), content: <AcceptFlowOneComponent /> },
        { value: "acsecond-item", title: t("AcceptFlow2"), content: <AcceptFlowTwoComponent /> },
        { value: "acthird-item", title: t("AcceptFlow3"), content: <AcceptFlowThreeComponent /> },
        { value: "acfifth-item", title: t("AcceptFlow5"), content: <AcceptFlowFiveComponent /> },
        { value: "acsixth-item", title: t("AcceptFlow6"), content: <AcceptFlowSixComponent /> },
    ];

    if (displayValue === 'small') {
        if (modeNum === 1) {
            return (
                <Stack bg="#FFFFFF"  py={20} align="center"  w="100vw" >
                    <Text textStyle="2xl" fontWeight={600}  color="#C85062" whiteSpace="pre-wrap" >{t("SendFlow")}</Text>
                    <Text textStyle="md" marginTop="8px" marginBottom="32px" color="#233452" whiteSpace="pre-wrap" >{t("TapToOpenDetails")}</Text>
                    <Accordion.Root multiple value={value} onValueChange={(e) => setValue(e.value)}>
                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value} border="none">
                                <Accordion.ItemTrigger textStyle="2xl" fontWeight={500} color="#C85062" whiteSpace="pre-wrap" >
                                    <Text marginLeft="8vw" width="74vw" marginTop="8px" >{item.title}</Text>
                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <Accordion.ItemBody >{item.content}</Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                    <Image src={SetSpan} alt="SetSpan" marginTop="32px" width="90vw" height="auto" />
                    <Box h="48px" w="85vw" marginTop="64px" >
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(2)}>{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                </Stack>
            );
        } else {
            return (
                <Stack bg="#FFFFFF"  py={20} align="center" w="100vw" >
                    <Text textStyle="2xl"  color="#C85062" fontWeight={600} whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlowMobile")}</Text>
                    <Text textStyle="md" marginTop="8px" marginBottom="32px" color="#233452" whiteSpace="pre-wrap" >{t("TapToOpenDetails")}</Text>
                    <Accordion.Root multiple value={value} onValueChange={(e) => setValue(e.value)}>
                        {acceptItems.map((item, index) => (
                            <Accordion.Item key={index} value={item.value} border="none">
                                <Accordion.ItemTrigger textStyle="2xl" fontWeight={500} color="#C85062" whiteSpace="pre-wrap" >
                                    <Text marginLeft="8vw" width="74vw" marginTop="8px" >{item.title}</Text>
                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <Accordion.ItemBody >{item.content}</Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>

                    <Box h="48px" w="85vw" marginTop="64px" >
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(1)}>{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                </Stack>
            );
        }
    } else if (displayValue === 'medium') {
        if (modeNum === 1) {
            return (
                <Stack bg="#FFFFFF"  py={10} align="center"  w="100vw" >
                    <Box h="48px" w="85vw" marginTop="0px" marginBottom="88px">
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(2)}>{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                    <Text textStyle="5xl" marginBottom="20px" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("SendFlow")}</Text>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={RecordingOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={RecordingTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={ContactOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={ContactTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={SettingOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={SettingTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={TriggerOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={TriggerTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={FollowOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={FollowTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Image src={SetSpan} alt="SetSpan" marginTop="32px" width="80vw" height="auto" />
                    <Button fontSize={18} w="200px" h="48px" onClick={() => setModeNum(2)} marginTop={20} marginBottom={20} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' color="#C85062" borderColor="#C85062" borderWidth={2} _hover={{ bg: "#C85062", color: "white" }} _active={{ bg: "#C85062", color: "white" }}>
                        {t("LookHowToAccept")}
                    </Button>
                </Stack>
            );
        } else {
            return (
                <Stack bg="#FFFFFF"  py={10} align="center"  w="100vw" >
                    <Box h="48px" w="85vw" marginTop="0px" marginBottom="88px">
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(1)}>{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                    <Text textStyle="4xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlowMobile")}</Text>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={smsOne} alt="SMS" width={240} height={520} />
                            <Image src={mailOne} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow2")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow2detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={installOne} alt="SMS" width={240} height={520} />
                            <Image src={installTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow3")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow3detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={telAuthOne} alt="SMS" width={240} height={520} />
                            <Image src={telAuthTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow5")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow5detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={senderConfirmOne} alt="SMS" width={240} height={520} />
                            <Image src={senderConfirmTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                        <Flex direction="column" align="flex-start" w="80vw">
                            <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow6")}</Text>
                            <Box mt={4} px={8}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow6detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="32px" marginTop="24px">
                            <Image src={downloadOne} alt="SMS" width={240} height={520} />
                            <Image src={downloadTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Button fontSize={18} w="200px" h="48px" onClick={() => setModeNum(1)} marginTop={20} marginBottom={20} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' color="#C85062" borderColor="#C85062" borderWidth={2} _hover={{ bg: "#C85062", color: "white" }} _active={{ bg: "#C85062", color: "white" }}>
                        {t("LookHowToSend")}
                    </Button>                   
                </Stack>
            );
        }
    } else {
        if (modeNum === 1) {
            return (
                <Stack bg="#FFFFFF" px={56} py={10} align="center"  w="100vw" >
                    <Box h="48px" w="85vw" marginTop="0px" marginBottom="88px">
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(2)}>{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                    <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("SendFlow")}</Text>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="488px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={RecordingOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={RecordingTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="488px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={ContactOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={ContactTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="488px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={SettingOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={SettingTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="488px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={TriggerOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={TriggerTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="488px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={FollowOne} alt="Voice Recording" width={240} height={520} />
                            <Image src={FollowTwo} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Image src={SetSpan} alt="SetSpan" marginTop="32px" width="40vw" height="auto" />
                    <Button fontSize={18} w="200px" h="48px" onClick={() => setModeNum(2)} marginTop={20} marginBottom={20} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' color="#C85062" borderColor="#C85062" borderWidth={2} _hover={{ bg: "#C85062", color: "white" }} _active={{ bg: "#C85062", color: "white" }}>
                        {t("LookHowToAccept")}
                    </Button>
                </Stack>
            );
        } else {
            return (
                <Stack bg="#FFFFFF" px={56} py={10} align="center"  w="100vw" >
                    <Box h="48px" w="85vw" marginTop="0px" marginBottom="88px">
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(1)}>{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                    <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlowMobile")}</Text>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="728px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={StartOne} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="728px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow2")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow2detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={Install} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="728px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow3")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow3detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={AuthCode} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="728px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow4")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow4detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={TelInput} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="728px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow5")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow5detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={TelOtpInput} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                        <Flex direction="column" align="flex-start" w="728px">
                            <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow6")}</Text>
                            <Box mt={4} px={12}>
                                <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow6detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px">
                            <Image src={MailInput} alt="Voice Recording" width={240} height={520} />
                        </Flex>
                    </Flex>
                    <Button fontSize={18} w="200px" h="48px" onClick={() => setModeNum(1)} marginTop={20} marginBottom={20} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' color="#C85062" borderColor="#C85062" borderWidth={2} _hover={{ bg: "#C85062", color: "white" }} _active={{ bg: "#C85062", color: "white" }}>
                        {t("LookHowToSend")}
                    </Button>                   
                </Stack>
            );
        }
    }
}