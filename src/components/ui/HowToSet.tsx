import {
  useBreakpointValue, Stack, Text,Image,
  Flex,
  Box,
  Button,
  Accordion
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PageMoveButtonTwo from '../buttons/PageMoveButtonTwo';
import RecordingOne from '../../assets/recordingOne.png';
import RecordingTwo from '../../assets/recordingTwo.png';
import ContactOne from '../../assets/contactOne.png';
import ContactThree from '../../assets/contactThree.png';
import ContactFour from '../../assets/contactFour.png';
import SettingOne from '../../assets/settingOne.png';
import SettingTwo from '../../assets/settingTwo.png';
import TriggerOne from '../../assets/triggerOne.png';
import TriggerTwo from '../../assets/triggerTwo.png';
import FollowOne from '../../assets/followOne.png';
import FollowTwo from '../../assets/followTwo.png';
import StartOne from '../../assets/startOne.png';
import Install from '../../assets/install.png';
import TelInput from '../../assets/telInput.png';
import TelOtpInput from '../../assets/telOtpInput.png';
import Confirm from '../../assets/confirm.png';
import VoiceIndex from '../../assets/voiceIndex.png';
import PageMoveButtonLong from '../buttons/PageMoveButtonLong';
import { useState } from 'react';
import FlowOneComponent from './FlowComponents/FlowOneComponent';
import FlowTwoComponent from './FlowComponents/FlowTwoComponent';
import FlowThreeComponent from './FlowComponents/FlowThreeComponent';

export default function HowToSet() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();
    const [modeNum, setModeNum] = useState(1);
    const [value, setValue] = useState(["first-iteam"]);

    const items = [
        { value: "first-item", title: t("Flow1"), content: <FlowOneComponent/> },
        { value: "second-item", title: t("Flow2"), content: <FlowTwoComponent/> },
        { value: "third-item", title: t("Flow3"), content: <FlowThreeComponent/> },
        { value: "fourth-item", title: t("Flow4"), content: <></> },
        { value: "fifth-item", title: t("Flow5"), content: <></> },
    ];

    if (displayValue === 'small') {
        if (modeNum === 1) {
            return (
                <Stack bg="#FFFFFF"  py={20} align="center"  w="100vw" >
                    <Box h="96px" w="85vw"  >
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(2)}>{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                    <Text textStyle="2xl" fontWeight={600} marginBottom="20px" color="#C85062" whiteSpace="pre-wrap" >{t("SendFlow")}</Text>
                    <Accordion.Root collapsible value={value} onValueChange={(e) => setValue(e.value)}>
                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value} border="none">
                                <Accordion.ItemTrigger textStyle="2xl" fontWeight={600} color="#C85062" whiteSpace="pre-wrap" >
                                    <Text marginLeft="8vw" width="74vw" marginTop="8px" >{item.title}</Text>
                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <Accordion.ItemBody >{item.content}</Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                    

                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" fontWeight={600} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4")}</Text>
                            <Box mt={4} px={4}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex direction="column" gap="32px" marginTop="24px">
                            <Image src={TriggerOne} alt="Voice Recording" width={360} height={780} />
                            <Image src={TriggerTwo} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                    
                    <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" fontWeight={600} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5")}</Text>
                            <Box mt={4} px={4}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex direction="column" gap="32px" marginTop="24px">
                            <Image src={FollowOne} alt="Voice Recording" width={360} height={780} />
                            <Image src={FollowTwo} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                </Stack>
            );
        } else {
            return (
                <Stack bg="#FFFFFF"  py={20} align="center"  w="100vw" >
                    <Box h="96px" w="85vw"  >
                        <Box flexDirection={"row"} placeItems={"center"} justifyContent={"center"} display="flex" gap={4} >
                            <Button size="sm" fontSize={16} width="152px" bg="white" color="black" onClick={() => setModeNum(1)}>{t("HowToSend")}</Button>
                            <Button size="sm" fontSize={16} width="152px" colorPalette="pink">{t("HowToAccept")}</Button>
                        </Box>
                    </Box>
                    <Text textStyle="2xl"  color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlowMobile")}</Text>
                    <Flex direction="column" align="center" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1")}</Text>
                            <Box mt={4} px={2}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px" mt={4}>
                            <Image src={StartOne} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="center" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow2")}</Text>
                            <Box mt={4} px={2}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow2detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px" mt={4}>
                            <Image src={Install} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="center" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow4")}</Text>
                            <Box mt={4} px={2}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow4detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px" mt={4}>
                            <Image src={TelInput} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="center" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow5Mobile")}</Text>
                            <Box mt={4} px={2}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow5detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px" mt={4}>
                            <Image src={TelOtpInput} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="center" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow8")}</Text>
                            <Box mt={4} px={2}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow8detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px" mt={4}>
                            <Image src={Confirm} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="center" gap="0px" py={8} justify="space-between" w="92vw">
                        <Flex direction="column" align="flex-start" w="92vw">
                            <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow9")}</Text>
                            <Box mt={4} px={2}>
                                <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow9detail1")}</Text>
                            </Box>
                        </Flex>
                        <Flex gap="8px" mt={4}>
                            <Image src={VoiceIndex} alt="Voice Recording" width={360} height={780} />
                        </Flex>
                    </Flex>
                </Stack>
            );
        }
    } else if (displayValue === 'medium') {
        return (
            <Stack bg="#FFFFFF"  py={20} align="center"  w="100vw" >
                <Text textStyle="5xl" marginBottom="20px" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("UseFlowMobile")}</Text>
                <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="80vw">
                    <Flex direction="column" align="flex-start" w="80vw">
                        <Text textStyle="4xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1")}</Text>
                        <Box mt={4} px={8}>
                            <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap="32px" marginTop="24px">
                        <Image src={RecordingOne} alt="Voice Recording" width={240} height={520} />
                        <Image src={ContactThree} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={ContactFour} alt="Voice Recording" width={240} height={520} />
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
                <PageMoveButtonLong toRef="/howtoaccept" buttonLabel={t("LookHowToAccept")} />
            </Stack>
        );
    } else {
        return (
            <Stack bg="#FFFFFF" px={56} py={40} align="center"  w="100vw" >
                <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("UseFlow")}</Text>
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
                        <Image src={ContactFour} alt="Voice Recording" width={240} height={520} />
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
                <PageMoveButtonTwo toRef="/howtoaccept" buttonLabel={t("LookHowToAccept")} />
            </Stack>
        );
    }
}