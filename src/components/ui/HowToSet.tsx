import {
  useBreakpointValue, Stack, Text,Image,
  Flex,
  Box
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PageMoveButton from '../buttons/pageMoveButton';
import AppealPointWithNum from './AppealPointWithNum';
import Rainbow from '../../assets/rainbow.jpg';

export default function HowToSet() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {        
        return (
            <Stack bg="#FFFFFF"  py={20} align="center" justify="space-between">
                <Text textStyle="3xl" marginBottom={10} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
                <AppealPointWithNum  num={1} appealSentence={t("appeal1Mobile")} detailSentence={t("detail1Mobile")} wpoint={320} hpoint={450} />
                <AppealPointWithNum  num={2} appealSentence={t("appeal2Mobile")} detailSentence={t("detail2Mobile")} wpoint={320} hpoint={360} />
                <AppealPointWithNum  num={3} appealSentence={t("appeal3Mobile")} detailSentence={t("detail3Mobile")} wpoint={320} hpoint={300} />
                <AppealPointWithNum  num={4} appealSentence={t("appeal4Mobile")} detailSentence={t("detail4Mobile")} wpoint={320} hpoint={300} />
                <AppealPointWithNum  num={5} appealSentence={t("appeal5Mobile")} detailSentence={t("detail5Mobile")} wpoint={320} hpoint={180} />
                <AppealPointWithNum  num={6} appealSentence={t("appeal6Mobile")} detailSentence={t("detail6Mobile")} wpoint={320} hpoint={180} />
                <PageMoveButton toRef="/howtouse" buttonLabel={t("LookHowToUse")} />
            </Stack>
        );
    } else {
        return (
            <Stack bg="#FFFFFF" px={56} py={40} align="center" >
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