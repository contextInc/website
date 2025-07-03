import {
  useBreakpointValue, Stack, Text,
  Flex,
  Image
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PageMoveButtonTwo from '../buttons/PageMoveButtonTwo';
import AppealPointWithNum from './AppealPointWithNum';
import Impact from '../../assets/Group2602.png';

export default function ServicePoint() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {        
        return (
            <Stack bg="#FFFFFF"  py={20} align="center" justify="space-between" w="100vw">
                <Flex>
                    <Text textStyle="3xl" marginBottom={10} fontWeight="bold" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
                    <Image src={Impact} alt="Impact" width="20px" height="18px" />
                </Flex>
                <AppealPointWithNum  num={1} appealSentence={t("appeal1Mobile")} detailSentence={t("detail1Mobile")} wpoint={320} hpoint={440} />
                <AppealPointWithNum  num={2} appealSentence={t("appeal2Mobile")} detailSentence={t("detail2Mobile")} wpoint={320} hpoint={428} />
                <AppealPointWithNum  num={3} appealSentence={t("appeal3Mobile")} detailSentence={t("detail3Mobile")} wpoint={320} hpoint={400} />
                <AppealPointWithNum  num={4} appealSentence={t("appeal4Mobile")} detailSentence={t("detail4Mobile")} wpoint={320} hpoint={400} />
                <AppealPointWithNum  num={5} appealSentence={t("appeal5Mobile")} detailSentence={t("detail5Mobile")} wpoint={320} hpoint={452} />
                <AppealPointWithNum  num={6} appealSentence={t("appeal6Mobile")} detailSentence={t("detail6Mobile")} wpoint={320} hpoint={256} />
                <AppealPointWithNum  num={7} appealSentence={t("appeal7Mobile")} detailSentence={t("detail7Mobile")} wpoint={320} hpoint={300} />
                <PageMoveButtonTwo toRef="/howtouse" buttonLabel={t("LookHowToUse")} />
            </Stack>
        );
    } else if (displayValue === 'medium') {
        return (
            <Stack bg="#FFFFFF"  py={20} align="center" justify="space-between" w="100vw">
                <Flex>
                    <Text textStyle="3xl" marginBottom={10} fontWeight="bold" color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
                    <Image src={Impact} alt="Impact" width="24px" height="22px" />
                </Flex>
                <AppealPointWithNum  num={1} appealSentence={t("appeal1")} detailSentence={t("detail1")} wpoint={320} hpoint={428} />
                <AppealPointWithNum  num={2} appealSentence={t("appeal2")} detailSentence={t("detail2")} wpoint={320} hpoint={380} />
                <AppealPointWithNum  num={3} appealSentence={t("appeal3")} detailSentence={t("detail3")} wpoint={320} hpoint={428} />
                <AppealPointWithNum  num={4} appealSentence={t("appeal4")} detailSentence={t("detail4")} wpoint={320} hpoint={428} />
                <AppealPointWithNum  num={5} appealSentence={t("appeal5")} detailSentence={t("detail5")} wpoint={320} hpoint={428} />
                <AppealPointWithNum  num={6} appealSentence={t("appeal6")} detailSentence={t("detail6")} wpoint={320} hpoint={320} />
                <AppealPointWithNum  num={7} appealSentence={t("appeal7")} detailSentence={t("detail7")} wpoint={320} hpoint={320} />
                <PageMoveButtonTwo toRef="/howtouse" buttonLabel={t("LookHowToUse")} />
            </Stack>
        );
    } else {
        return (
            <Stack bg="#FFFFFF" px="10vw" py={40} align="center" justify="space-between" overflowX="hidden" w="100vw">
                <Flex>
                    <Text textStyle="5xl" marginBottom={16} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
                    <Image src={Impact} alt="Impact" width="24px" height="22px" />
                </Flex>
                <Flex align="center" gap={4} py={8} justify="space-between">
                    <AppealPointWithNum  num={1} appealSentence={t("appeal1")} detailSentence={t("detail1")} />
                    <AppealPointWithNum  num={2} appealSentence={t("appeal2")} detailSentence={t("detail2")} />
                </Flex>
                <Flex align="center" gap={4} py={8} justify="space-between">
                    <AppealPointWithNum  num={3} appealSentence={t("appeal3")} detailSentence={t("detail3")} />
                    <AppealPointWithNum  num={4} appealSentence={t("appeal4")} detailSentence={t("detail4")} />
                </Flex>
                <Flex align="center" gap={4} py={8} justify="space-between">
                    <AppealPointWithNum  num={5} appealSentence={t("appeal5")} detailSentence={t("detail5")} />
                    <AppealPointWithNum  num={6} appealSentence={t("appeal6")} detailSentence={t("detail6")} />
                </Flex>
                <AppealPointWithNum  num={7} appealSentence={t("appeal7")} detailSentence={t("detail7")} />
                <PageMoveButtonTwo toRef="/howtouse" buttonLabel={t("LookHowToUse")} />
            </Stack>
        );
    }
}