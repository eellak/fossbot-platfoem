import React, { useState } from 'react';
import AppLinks from 'src/layouts/full/vertical/header/AppLinks';
import QuickLinks from 'src/layouts/full/vertical/header/QuickLinks';
import DemosDD from './DemosDD';
import { Box, Button, Divider, Grid, styled, Paper } from '@mui/material';
import { IconChevronDown, IconInfoSmall } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture,
  IconBrandGithub,
  IconHome,
  IconCode,
  IconBlockquote,
  IconPuzzle2,
  IconPuzzle,
  IconMoodKid,
  IconArrowMerge,
  IconSchool,
  IconBrandGoogle,
  IconBrandOpenSource,
  IconMoodHappy,
  IconLayoutDashboard,
} from '@tabler/icons-react';
import { IconInfoCircle } from '@tabler/icons-react';


const Navigations = () => {
  const { t } = useTranslation();

  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary,
  }));

  // demos
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // pages

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      {/* <StyledButton
                color="inherit"
                variant="text"
                aria-expanded={open ? 'true' : undefined}
                sx={{
                    color: open ? 'primary.main' : (theme) => theme.palette.text.secondary,
                }}
                onMouseEnter={handleOpen} onMouseLeave={handleClose}
                endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
            >
                Demos
            </StyledButton>
            {open && (
                <Paper
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                    sx={{
                        position: 'absolute',
                        left: '0',
                        right: '0',
                        top: '55px',
                        maxWidth: '1200px',
                        width: '100%'
                    }}
                >
                    <DemosDD />
                </Paper>
            )} */}
      {/* <Box>
                <StyledButton
                    color="inherit"
                    variant="text"
                    onMouseEnter={handleOpen2} onMouseLeave={handleClose2}
                    sx={{
                        color: open2 ? 'primary.main' : (theme) => theme.palette.text.secondary,
                    }}
                    endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
                >
                    About us
                </StyledButton>
                {open2 && (
                    <Paper
                        onMouseEnter={handleOpen2}
                        onMouseLeave={handleClose2}
                        sx={{
                            position: 'absolute',
                            left: '0',
                            right: '0',
                            top: '55px',
                            width: '850px',
                            margin: '0 auto'
                        }}
                    >
                        <Grid container>
                            <Grid item sm={8} display="flex">
                                <Box p={4} pr={0} pb={3}>
                                    <AppLinks />
                                </Box>
                                <Divider orientation="vertical" />
                            </Grid>
                            <Grid item sm={4}>
                                <Box p={4}>
                                    <QuickLinks />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
            </Box> */}
      <StyledButton color="inherit" variant="text" href="https://github.com/eellak/fossbot">
      <IconBrandGithub style={{ marginRight: '8px' }} />{t('github')}
      </StyledButton> 
      {/* /hua-page */}
      <StyledButton color="inherit" variant="text" href="https://www.hua.gr/index.php/en/">
      <IconSchool style={{ marginRight: '8px' }} />  {t('harokopioUniversity')}
      </StyledButton>
      <StyledButton color="inherit" variant="text" href="https://gfoss.eu/">
      <IconBrandOpenSource style={{ marginRight: '8px' }} /> {t('gfoss')}
      </StyledButton>
      <StyledButton color="inherit" variant="text" href="https://hot.dit.hua.gr/">
      <IconInfoCircle style={{ marginRight: '8px' }} /> {t('aboutUs')} 
      </StyledButton>
      {/* <Button color="primary" variant="contained" href="/dashboard">
        {t('tryNow')}
      </Button> */}
    </>
  );
};

export default Navigations;
