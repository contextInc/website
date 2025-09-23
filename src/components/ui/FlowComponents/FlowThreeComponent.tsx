import {
  Text,
  Box,
  Flex,
  Image
} from '@chakra-ui/react';
import SettingOne from '../../../assets/settingOne.png';
import SettingTwo from '../../../assets/settingTwo.png';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function FlowThreeComponent() {
    const { t } = useTranslation();
    return (
        <Flex align="center" marginLeft="4vw" direction="column" gap="0px" py={4} justify="space-between" w="92vw">
            <Flex direction="column" align="flex-start" w="92vw">
                <Box mt={0} px={4}>
                    <Text textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap">{t("Flow3detail1")}</Text>
                </Box>
            </Flex>
            <Flex direction="column" gap="32px" marginTop="24px">
                <Image src={SettingOne} alt="Voice Recording" width={360} height={780} />
                <Image src={SettingTwo} alt="Voice Recording" width={360} height={780} />
            </Flex>
        </Flex>
    );
}