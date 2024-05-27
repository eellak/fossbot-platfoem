import React, { useState } from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';

import { Grid, InputAdornment, Button } from '@mui/material';
import {
  IconFileDescription,
  IconSourceCode,
  IconFileTypography,
} from '@tabler/icons-react';
import { useAuth } from 'src/authentication/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewProjectFormProps {
  isDescriptionDisabled: boolean,
  editorInitialValue: string
}

const NewProjectForm = ({ isDescriptionDisabled, editorInitialValue }: NewProjectFormProps) => {
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState(editorInitialValue);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const location = useLocation();

  const handleProjectNameChange = (event: any) => {
    setProjectName(event.target.value);
  };
  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };
  const handleEditorChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (projectName !== '' && description !== '' && selectedOption !== '') {
        const projectID = await auth.createProjectAction({
          name: projectName,
          description: description,
          project_type: selectedOption,
          code: '',
        });

        const monacoPageUrl = `/monaco-page/${projectID}`;
        const blocklyPageUrl = `/blockly-page/${projectID}`;

        if (selectedOption === 'python') {
          if (location.pathname === `/monaco-page` || location.pathname === monacoPageUrl) {
            window.location.href = monacoPageUrl;
          } else {
            navigate(monacoPageUrl);
          }
        } else {
          if (location.pathname === `/blockly-page` || location.pathname === blocklyPageUrl) {
            window.location.href = blocklyPageUrl;
          } else {
            navigate(blocklyPageUrl);
          }
        }
      }
    } catch (error) {
      console.error('While creating a new project, an error occcured :', error);
    }
  };

  return (
    <PageContainer title={t('project-form.title')} description={t('project-form.description')}>
      {/* breadcrumb */}
      <Breadcrumb title={t('project-form.createNewProject')} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title={t('project-form.newProjectForm')}>
            <Grid container spacing={3}>
              {/* 2 */}
              <Grid item xs={12} sm={3} display="flex" alignItems="center">
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  {t('projectName')}
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12} sm={9}>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconFileTypography size="20" />
                    </InputAdornment>
                  }
                  placeholder={t('project-form.giveYourProjectAName')}
                  fullWidth
                  onChange={handleProjectNameChange}
                />
              </Grid>
              {/* 3 */}
              <Grid item xs={12} sm={3} display="flex" alignItems="center">
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  {t('description')}
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12} sm={9}>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconFileDescription size="20" />
                    </InputAdornment>
                  }
                  placeholder={t('project-form.describeYourProject')}
                  fullWidth
                  onChange={handleDescriptionChange}
                />
              </Grid>
              {/* 4 */}
              <Grid item xs={12} sm={3} display="flex" alignItems="center">
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  {t('editor')}
                </CustomFormLabel>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Select
                  startAdornment={
                    <InputAdornment position="start">
                      <IconSourceCode size="20" />
                    </InputAdornment>
                  }
                  fullWidth
                  value={selectedOption}
                  onChange={handleEditorChange}
                  disabled={isDescriptionDisabled}
                >
                  <MenuItem value={'python'}>{t('monaco')}</MenuItem>
                  <MenuItem value={'blockly'}>{t('blockly')}</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={3}></Grid>
              <Grid item xs={12} sm={9}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  {t('submit')}
                </Button>
              </Grid>
            </Grid>
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default NewProjectForm;