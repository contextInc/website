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

export default function HowToSet() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {        
        return(
            <>
                <Stack bg="#FFFFFF" py={10} w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#6D7685" whiteSpace="pre-wrap" fontWeight='bold' fontFamily='Open Sans, sans-serif'>{t("UseFlowMobile")}</Text>
                    <Flex direction="column" align="flex-start" >
                        <Text textStyle="2xl" px={6} color="#6D7685" whiteSpace="pre-wrap" fontWeight='bold' fontFamily='Open Sans, sans-serif'>{t("Flow1Mobile")}</Text>
                        <Box mt={2} px={12} alignItems="start">
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail1Mobile")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" align="center" gap={4} mt={4}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                    <Flex direction="column" align="flex-start" mt={4} >
                        <Text textStyle="2xl" px={6} color="#6D7685" fontWeight='bold' fontFamily='Open Sans, sans-serif'>{t("Flow2Mobile")}</Text>
                        <Box mt={2} px={12}>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail1Mobile")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" align="center" gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="2xl" px={6} color="#6D7685" fontWeight='bold' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3")}</Text>
                        <Box mt={4} px={12}>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail1Mobile")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" align="center" gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="2xl" px={6} color="#6D7685" fontWeight='bold' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4")}</Text>
                        <Box mt={4} px={12}>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail1Mobile")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail2Mobile")}</Text>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail3Mobile")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail4Mobile")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" align="center" gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="2xl" px={6} color="#6D7685" fontWeight='bold' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5")}</Text>
                        <Box mt={4} px={12}>
                            <Text w="100%" textStyle="md" color="#6D7685" textAlign='left' whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail1Mobile")}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" align="center" gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                    <Box alignItems="center">
                        <PageMoveButtonLong toRef="/howtoaccept" buttonLabel={t("LookHowToAcceptMobile")} />
                    </Box>

                    
                </Stack>
                
            </>
        );
    } else if (displayValue === 'medium') {
    
    
    }  else {
        return (
            <Stack bg="#FFFFFF" px={56} py={40} align="center"  w="100vw" >
                <Text textStyle="5xl" marginBottom={20} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("UseFlow")}</Text>
                <Flex align="center" gap={12} py={8} justify="space-between" w={1200}>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="5xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail1")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail2")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail3")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail4")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow1detail5")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                </Flex>
                <Flex align="center" gap={12} py={8} justify="space-between" w={1200}>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="5xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail1")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail2")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail3")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow2detail4")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                </Flex>
                <Flex align="center" gap={12} py={8} justify="space-between" w={1200}>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="5xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail1")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail2")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail3")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail4")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail5")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail6")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow3detail7")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                </Flex>
                <Flex align="center" gap={12} py={8} justify="space-between" w={1200}>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="5xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail1")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail2")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail3")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail4")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail5")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow4detail6")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                </Flex>
                <Flex align="center" gap={12} py={8} justify="space-between" w={1200}>
                    <Flex direction="column" align="flex-start">
                        <Text textStyle="5xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5")}</Text>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail1")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail2")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail3")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail4")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail5")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail6")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail7")}</Text>
                        </Box>
                        <Box px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail8")}</Text>
                        </Box>
                        <Box mt={4} px={12}>
                            <Text textStyle="xl" color="#6D7685" alignItems="start" alignSelf="start" justifyContent="start" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Flow5detail9")}</Text>
                        </Box>
                    </Flex>
                    <Flex gap={8}>
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                        <Image src={Rainbow} alt="Voice Recording" width={200} height={300} />
                    </Flex>
                </Flex>
                <PageMoveButton toRef="/howtoaccept" buttonLabel={t("LookHowToAccept")} />
            </Stack>
        );
    }
}