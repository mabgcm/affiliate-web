import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Collapse,
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useParams } from 'react-router-dom';


function ModuleRow({ module }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{module.title}</TableCell>
                <TableCell align="right">Resources</TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ pb: 0, pt: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">Resources</Typography>
                            <List>
                                {module.resources.map((resource, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={resource.name} secondary={<a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a>} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const LearningPlan = () => {
    const [modules, setModules] = useState([]);
    const { dataFilename } = useParams(); // Get the dataFilename parameter from the URL

    useEffect(() => {
        if (dataFilename) {
            const filename = decodeURIComponent(dataFilename);
            fetch(filename)
                .then(response => response.json())
                .then(data => setModules(data.modules)); // Assuming the JSON structure contains a "modules" key
        }
    }, [dataFilename]); // Re-fetch when dataFilename changes

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Learning Plan Title
            </Typography>
            <TableContainer component={Paper} sx={{ maxWidth: '80%', marginBottom: '20px' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Module Title</TableCell>
                            <TableCell align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {modules.map((module, index) => (
                            <ModuleRow key={index} module={module} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default LearningPlan;