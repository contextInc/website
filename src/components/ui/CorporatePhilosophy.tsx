import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import PhilosophyItem from './PhilosophyItem';

export default function CorporatePhilosophy() {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
            return (
                <>
                    <Stack bg="#FFFFFF" py={0} alignItems="center" w="100vw" >
                        <Text textStyle="2xl" marginBottom={10} color="#6D7685" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyPhilosophy")}</Text>
                        <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                        <Box w="84vw" >
                            <PhilosophyItem content={t("Peace")} />
                            <PhilosophyItem content={t("Special")} />
                            <PhilosophyItem content={t("Brave")} />
                        </Box>
                        <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                    </Stack>
                </>
            );
        } else if (displayValue === 'medium') {
            return (
                <>
                    <Stack bg="#FFFFFF" py={0} alignItems="center" w="100vw" >
                        <Text textStyle="5xl" marginBottom={10} color="#6D7685" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyPhilosophy")}</Text>
                        <Separator color="#000000" width="70vw" height={2} marginBottom={4} />
                        <Box w="70vw" >
                            <PhilosophyItem content={t("Peace")} />
                            <PhilosophyItem content={t("Special")} />
                            <PhilosophyItem content={t("Brave")} />
                        </Box>
                        <Separator color="#000000" width="70vw" height={2} marginBottom={4} />
                    </Stack>
                </>
            );
        } else {
            return (
                <>
                    <Stack bg="#FFFFFF" py={0} alignItems="center" w="100vw" >
                        <Text textStyle="5xl" marginBottom={10} color="#6D7685" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyPhilosophy")}</Text>
                        <Separator color="#000000" width="50vw" height={2} marginBottom={4} />
                        <Box w="50vw" >
                            <PhilosophyItem content={t("Peace")} />
                            <PhilosophyItem content={t("Special")} />
                            <PhilosophyItem content={t("Brave")} />
                        </Box>
                        <Separator color="#000000" width="50vw" height={2} marginBottom={4} />
                    </Stack>
                </>
            );
        }
}