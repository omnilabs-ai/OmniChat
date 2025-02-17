import React from 'react';
import { Box, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAtom } from 'jotai';
import { selectedModels } from '../../../atoms';
import styles from './ModelSelector.module.css';

const ModelSelector: React.FC = () => {
    const [modelList] = useAtom(selectedModels);

    return (
      <div className={styles.container}>
        <Box className={styles.header}>
          <h3 className={styles.headerText}>Models</h3>
          <Tooltip title="Coming Soon" arrow placement="top">
            <AddIcon className={styles.addIcon} />
          </Tooltip>
        </Box>

        <Box className={styles.modelGrid}>
          {modelList.map((model, index) => (
            <Box
              key={index}
              className={styles.modelItem}
            >
              {model}
            </Box>
          ))}
        </Box>
      </div>
    );
  };
  
  export default ModelSelector;
  