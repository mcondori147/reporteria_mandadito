import { Box, Card, Grid, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import SelectStatus from "./SelectStatus";



export default function Filter() {
    return (
        <Box sx={{ p: 0 }} size={{ xs: 12, md: 12 }} style={{ width: '100%' }}>
            <Grid size={{ xs: 12, lg: 3 }}>
                <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
                    <Card>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker defaultValue={dayjs('2024-04-17')} />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker defaultValue={dayjs('2024-04-17')} />
                        </LocalizationProvider>
                        <MultipleSelectCheckmarks />
                        <MultipleSelectCheckmarks />
                        <SelectStatus />
                    </Card>
                </Stack>
            </Grid>
        </Box>
    );
}
