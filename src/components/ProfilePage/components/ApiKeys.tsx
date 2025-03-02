import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  IconButton,
  Tooltip
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

const ApiKeys: React.FC = () => {
  const [apiKeys] = useState([
    { id: 1, name: 'Development Key', key: 'sk-test-123456', created: '2024-03-15' },
    { id: 2, name: 'Production Key', key: 'sk-prod-789012', created: '2024-03-14' },
  ]);

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete key:', id);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">API Keys</Typography>
        <Button variant="contained" color="primary">
          Generate New Key
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Key</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiKeys.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  {row.key.substring(0, 8)}...
                  <Tooltip title="Copy API Key">
                    <IconButton size="small" onClick={() => handleCopy(row.key)}>
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>{row.created}</TableCell>
                <TableCell>
                  <Tooltip title="Delete API Key">
                    <IconButton size="small" onClick={() => handleDelete(row.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ApiKeys; 