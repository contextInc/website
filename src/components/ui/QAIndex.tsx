import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Accordion,
  Span
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { useState } from 'react';

export default function QAIndex() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();
    const [value, setValue] = useState(["first-item"]);

    const items = [
        { value: "nineth-item", title: t("IfMailOrTelDifferent"), text: t("IfMailOrTelDifferentAnswer") },
        { value: "first-item", title: t("OtpNotArrive"), text: t("OtpNotArriveAnswer") },
        { value: "eighth-item", title: t("DifficultDomain"), text: t("DifficultDomainAnswer") },
        { value: "third-item", title: t("EndToEnd"), text: t("EndToEndAnswer") },
        { value: "fourth-item", title: t("AboutDemo"), text: t("AboutDemoAnswer") },
        { value: "fifth-item", title: t("AboutRepresentativeAuth"), text: t("AboutRepresentativeAuthAnswer") },
        { value: "sixth-item", title: t("AboutAuthLimitTime"), text: t("AboutAuthLimitTimeAnswer") },
        { value: "seventh-item", title: t("AboutSenderInfo"), text: t("AboutSenderInfoAnswer") },
    ]

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("QA")}</Text>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                    <Box w="85vw" >
                        <Accordion.Root multiple value={value} onValueChange={(e) => setValue(e.value)}>
                            {items.map((item, index) => (
                                <Accordion.Item key={index} value={item.value}>
                                    <Accordion.ItemTrigger textStyle="2xl" py={10} fontFamily='Open Sans, sans-serif' color="#6D7685">
                                        <Span flex="1">{item.title}</Span>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody textStyle="lg" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" >{item.text}</Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("QA")}</Text>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                    <Box w="85vw" >
                        <Accordion.Root multiple value={value} onValueChange={(e) => setValue(e.value)}>
                            {items.map((item, index) => (
                                <Accordion.Item key={index} value={item.value}>
                                    <Accordion.ItemTrigger textStyle="3xl" py={10} fontFamily='Open Sans, sans-serif' color="#6D7685">
                                        <Span flex="1">{item.title}</Span>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" >{item.text}</Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    } else {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="5xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("QA")}</Text>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                    <Box w="40vw" >
                        <Accordion.Root multiple value={value} onValueChange={(e) => setValue(e.value)}>
                            {items.map((item, index) => (
                                <Accordion.Item key={index} value={item.value}>
                                    <Accordion.ItemTrigger textStyle="3xl" py={10}  fontFamily='Open Sans, sans-serif' color="#6D7685">
                                        <Span flex="1">{item.title}</Span>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody textStyle="xl" color="#6D7685" textAlign="left" whiteSpace="pre-wrap" >{item.text}</Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                        {/* <SubscriptionNotice title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} /> */}
                    </Box>
                    {/* <Separator color="#000000" width="45vw" height={2} marginBottom={4} /> */}
                </Stack>
            </>
        );
    }
}