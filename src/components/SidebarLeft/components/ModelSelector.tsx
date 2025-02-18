import React from 'react';
import { Box, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAtom } from 'jotai';
import { selectedModels, themeAtom } from '../../../atoms';
import styles from './ModelSelector.module.css';

const ModelSelector: React.FC = () => {
    const [modelList] = useAtom(selectedModels);
    const [theme] = useAtom(themeAtom);

    return (
      <div className={styles.container} style={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
      }}>
        <Box className={styles.header}>
          <h3 className={styles.headerText} style={{color: theme.palette.text.primary}}>Models</h3>
          <Tooltip title="Coming Soon" arrow placement="top">
            <AddIcon className={styles.addIcon} style={{color: theme.palette.text.primary}}/>
          </Tooltip>
        </Box>

        <Box className={styles.modelGrid}>
          {modelList.map((model, index) => (
            <Box
              key={index}
              className={styles.modelItem}
              sx={{
                backgroundColor: theme.palette.action.selected,
                color: theme.palette.text.primary,
              }}
            >
              {model}
            </Box>
          ))}
        </Box>
      </div>
    );
  };
  
  export default ModelSelector;
  