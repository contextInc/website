import {
  useBreakpointValue, 
  Text,
  Box,
  Flex,
  Stack,
  Separator
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import CompanyInfoItem from './CompanyInfoItem';

export default function CompanyInfo() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
                <Stack bg="#FFFFFF" style={{transform: "translateZ(0)"}} py={20} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("context3Auth")}</Text>
                    <Box w="90vw" borderColor="#C85062" bg="#FFFFFF" borderWidth={2} borderRadius={20} p={5}>
                        <Box px="1vw" h={220} w="80vw">
                            <Text textStyle="2xl" marginBottom={4}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("AuthByCode")}</Text>
                            <Flex px={0} gap={0} textAlign="left">
                                <Text textStyle="lg" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="lg" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AuthByCodeDetail")}</Text>
                            </Flex>
                        </Box>
                        <Box px="1vw" h={220} w="80vw">
                            <Text textStyle="2xl" marginBottom={4}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("AuthByTel")}</Text>
                            <Flex px={0} gap={0} textAlign="left">
                                <Text textStyle="lg" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="lg" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AuthByTelDetail")}</Text>
                            </Flex>
                        </Box>
                        <Box px="1vw" h={200} w="80vw">
                            <Text textStyle="2xl" marginBottom={4}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("AuthByEmail")}</Text>
                            <Flex px={0} gap={0} textAlign="left">
                                <Text textStyle="lg" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="lg" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AuthByEmailDetailMedium")}</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Stack>
        );
    } else if (displayValue === 'medium') {
        return (
                <Stack bg="#FFFFFF" style={{transform: "translateZ(0)"}} py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={20} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("context3Auth")}</Text>
                    <Box w="90vw" borderColor="#C85062" bg="#FFFFFF" borderWidth={2} borderRadius={20} p={10}>
                        <Box px="2vw" h={220} w="80vw">
                            <Text textStyle="4xl" marginBottom={8}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("AuthByCode")}</Text>
                            <Flex px={5} gap={4} textAlign="left">
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AuthByCodeDetail")}</Text>
                            </Flex>
                        </Box>
                        <Box px="2vw" h={220} w="80vw">
                            <Text textStyle="4xl" marginBottom={8}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("AuthByTel")}</Text>
                            <Flex px={5} gap={4} textAlign="left">
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AuthByTelDetail")}</Text>
                            </Flex>
                        </Box>
                        <Box px="2vw" h={240} w="80vw">
                            <Text textStyle="4xl" marginBottom={8}  textAlign="left"  color="#233452/70" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("AuthByEmail")}</Text>
                            <Flex px={5} gap={4} textAlign="left">
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>・</Text>
                                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("AuthByEmailDetailMedium")}</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Stack>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
                    <Separator color="#C85062" width="50vw" height={2} marginBottom={4} />
                    <Box w="50vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetail")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} />
                    </Box>
                    <Separator color="#C85062" width="50vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    }
}