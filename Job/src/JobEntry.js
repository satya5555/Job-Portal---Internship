// src/JobEntry.js
import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Alert, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import axios from 'axios';
import { inputFormElements } from './formElments';

export default function JobEntry() {
    const [formValues, setFormValues] = useState({});
    const [errorAlert, setErrorAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : null;
        setFormValues({ ...formValues, 'PostedDate': formattedDate });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isFormValid = inputFormElements.every(input => {
            if (input.required) {
                return formValues[input.name] && formValues[input.name].trim() !== '';
            }
            return true;
        });

        if (!isFormValid) {
            setErrorAlert(true);
            setSuccessAlert(false);
        } else {
            setErrorAlert(false);
            console.log('Form submitted:', formValues);

            axios.post('http://localhost:8081/jobportal', formValues)
                .then(response => {
                    console.log('Data sent successfully:', response.data);
                    setFormValues({});
                    setSelectedDate(null);
                    setSuccessAlert(true);

                    setTimeout(() => {
                        setSuccessAlert(false);
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                    setSuccessAlert(false);
                });
        }
    };

    const handleReset = () => {
        setFormValues({});
        setSelectedDate(null);
    };

    const margin = { margin: "0 5px" };

    return (
        <div className='App' style={{ backgroundColor: '#FFA07A', minHeight: '100vh', padding: '20px' }}>
            {errorAlert && (
                <Stack sx={{ width: '100%', marginBottom: '10px' }} spacing={2}>
                    <Alert severity="error">Please fill all the required fields.</Alert>
                </Stack>
            )}
            {successAlert && (
                <Stack sx={{ width: '100%', marginBottom: '10px' }} spacing={2}>
                    <Alert severity="success">Form has been submitted successfully.</Alert>
                </Stack>
            )}
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Card style={{ backgroundColor: '#FFDAB9' }}>
                        <CardContent>
                            <Typography variant="h4" color="primary" align="center" gutterBottom>
                                Job Portal
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>
                                Fill the details for the Job Portal Feed
                            </Typography>
                            <form onSubmit={handleSubmit} onReset={handleReset}>
                                <Typography variant="h6" color="primary" gutterBottom>
                                    Job Info
                                </Typography>
                                <Grid container spacing={2}>
                                    {inputFormElements.slice(0, 6).map(input => (
                                        <Grid key={input.name} item xs={12} sm={6}>
                                            <TextField
                                                {...input}
                                                value={formValues[input.name] || ''}
                                                onChange={handleInputChange}
                                                fullWidth
                                                required={input.required}
                                                InputProps={{
                                                    style: { backgroundColor: input.required ? '#fff3cd' : 'transparent' }
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>

                                <Typography variant="h6" color="primary" gutterBottom>
                                    Posted Date
                                </Typography>
                                <Grid container spacing={2}>
                                    {inputFormElements.filter(input => input.category === 'Posted Date').map(input => (
                                        <Grid key={input.name} item xs={12} sm={6}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Posted Date"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            fullWidth
                                                            required={input.required}
                                                            InputProps={{
                                                                style: { backgroundColor: input.required ? '#fff3cd' : 'transparent' }
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Typography variant="h6" color="primary" gutterBottom>
                                    Requirements
                                </Typography>
                                <Grid container spacing={2}>
                                    {inputFormElements.slice(7, 10).map(input => (
                                        <Grid key={input.name} item xs={12} sm={6}>
                                            <TextField
                                                {...input}
                                                value={formValues[input.name] || ''}
                                                onChange={handleInputChange}
                                                fullWidth
                                                required={input.required}
                                                InputProps={{
                                                    style: { backgroundColor: input.required ? '#fff3cd' : 'transparent' }
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                                <Typography variant="h6" color="primary" gutterBottom>
                                    Links
                                </Typography>
                                <Grid container spacing={2}>
                                    {inputFormElements.slice(10, 12).map(input => (
                                        <Grid key={input.name} item xs={12} sm={6}>
                                            <TextField
                                                {...input}
                                                value={formValues[input.name] || ''}
                                                onChange={handleInputChange}
                                                fullWidth
                                                required={input.required}
                                                InputProps={{
                                                    style: { backgroundColor: input.required ? '#fff3cd' : 'transparent' }
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                                <Typography variant="h6" color="primary" gutterBottom>
                                    Others
                                </Typography>
                                <Grid container spacing={2}>
                                    {inputFormElements.slice(12).map(input => (
                                        <Grid key={input.name} item xs={12} sm={6}>
                                            <TextField
                                                {...input}
                                                value={formValues[input.name] || ''}
                                                onChange={handleInputChange}
                                                fullWidth
                                                required={input.required}
                                                InputProps={{
                                                    style: { backgroundColor: input.required ? '#fff3cd' : 'transparent' }
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Button style={margin} type="reset" variant="outlined" color="primary">
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button type="submit" variant="contained" color="primary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
