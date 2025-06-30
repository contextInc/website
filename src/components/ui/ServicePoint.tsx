import {
  useBreakpointValue, Stack, Text,
  Flex
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PageMoveButton from '../buttons/pageMoveButton';
import AppealPointWithNum from './AppealPointWithNum';

export default function ServicePoint() {
    const displayValue = useBreakpointValue({base: 'small', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {        
        return (
            <Stack bg="#FFFFFF"  py={20} align="center" justify="space-between" w="100vw">
                <Text textStyle="3xl" marginBottom={10} fontWeight="bold"  color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
                <AppealPointWithNum  num={1} appealSentence={t("appeal1Mobile")} detailSentence={t("detail1Mobile")} wpoint={320} hpoint={360} />
                <AppealPointWithNum  num={2} appealSentence={t("appeal2Mobile")} detailSentence={t("detail2Mobile")} wpoint={320} hpoint={360} />
                <AppealPointWithNum  num={3} appealSentence={t("appeal3Mobile")} detailSentence={t("detail3Mobile")} wpoint={320} hpoint={320} />
                <AppealPointWithNum  num={4} appealSentence={t("appeal4Mobile")} detailSentence={t("detail4Mobile")} wpoint={320} hpoint={336} />
                <AppealPointWithNum  num={5} appealSentence={t("appeal5Mobile")} detailSentence={t("detail5Mobile")} wpoint={320} hpoint={180} />
                <AppealPointWithNum  num={6} appealSentence={t("appeal6Mobile")} detailSentence={t("detail6Mobile")} wpoint={320} hpoint={200} />
                <PageMoveButton toRef="/howtouse" buttonLabel={t("LookHowToUse")} />
            </Stack>
        );
    } else {
        return (
            <Stack bg="#FFFFFF" px="10vw" py={40} align="center" justify="space-between" overflowX="hidden" w="100vw">
                <Text textStyle="5xl" marginBottom={16} color="#C85062" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
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
                <PageMoveButton toRef="/howtouse" buttonLabel={t("LookHowToUse")} />
            </Stack>
        );
    }
}