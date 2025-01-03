import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(0),
    backgroundColor: '#FFF8E1',
    border: '2px solid #FFC107',
    borderRadius: '15px',
}));

function AttendanceForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        guests: '',
        message: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí manejarías el envío del formulario
        console.log(formData);
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    return (
        <FormPaper elevation={3}>
            <Typography variant="h5" color="primary" align="center" gutterBottom>
                Confirma tu Asistencia
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Número de invitados"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Confirmar Asistencia
                </Button>
            </Box>
        </FormPaper>
    );
}

export default AttendanceForm;