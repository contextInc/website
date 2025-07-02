import {
  useBreakpointValue, Stack, Text,Image,
  Flex,
  Box
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PageMoveButton from '../buttons/pageMoveButton';
import Rainbow from '../../assets/rainbow.jpg';
import PageMoveButtonLong from '../buttons/PageMoveButtonLong';

export default function HowToGetVoice() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    console.log(displayValue);
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <Stack bg="#FFFFFF"  py={20} align="center"  w="100vw" >
                <Text textStyle="2xl" marginBottom="20px" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("UseFlowMobile")}</Text>
                <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                    <Flex direction="column" align="flex-start" w="92vw">
                        <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1")}</Text>
                        <Box mt={4} px={4}>
                            <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" gap="32px" marginTop="24px">
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                    </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                    <Flex direction="column" align="flex-start" w="92vw">
                        <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2")}</Text>
                        <Box mt={4} px={4}>
                            <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" gap="32px" marginTop="24px">
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                    </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                    <Flex direction="column" align="flex-start" w="92vw">
                        <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3")}</Text>
                        <Box mt={4} px={4}>
                            <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" gap="32px" marginTop="24px">
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                    </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                    <Flex direction="column" align="flex-start" w="92vw">
                        <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4")}</Text>
                        <Box mt={4} px={4}>
                            <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" gap="32px" marginTop="24px">
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                    </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="0px" py={8} justify="space-between" w="92vw">
                    <Flex direction="column" align="flex-start" w="92vw">
                        <Text textStyle="2xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5")}</Text>
                        <Box mt={4} px={4}>
                            <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" gap="32px" marginTop="24px">
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                        <Image src={Rainbow} alt="Voice Recording" width={360} height={780} />
                    </Flex>
                </Flex>
                <PageMoveButtonLong toRef="/howtoaccept" buttonLabel={t("LookHowToAccept")} />
            </Stack>
        );
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                    </Flex>
                </Flex>
                <PageMoveButtonLong toRef="/howtoaccept" buttonLabel={t("LookHowToAccept")} />
            </Stack>
        );
    } else {
        return (
            <Stack bg="#FFFFFF" px={56} py={40} align="center"  w="100vw" >
                <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow")}</Text>
                <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                    <Flex direction="column" align="flex-start" w="728px">
                        <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow1detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap="8px">
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
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
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                    </Flex>
                </Flex>
                <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                    <Flex direction="column" align="flex-start" w="728px">
                        <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow7")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow7detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap="8px">
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                    </Flex>
                </Flex>
                <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                    <Flex direction="column" align="flex-start" w="728px">
                        <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow8")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow8detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap="8px">
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                    </Flex>
                </Flex>
                <Flex align="center" gap="0px" py={8} justify="space-between" w="976px">
                    <Flex direction="column" align="flex-start" w="728px">
                        <Text textStyle="5xl" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow9")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AcceptFlow9detail1")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap="8px">
                        <Image src={Rainbow} alt="Voice Recording" width={240} height={520} />
                    </Flex>
                </Flex>
                <PageMoveButtonLong toRef="/security" buttonLabel={t("CheckSecurity")} />
            </Stack>
        );
    }
}