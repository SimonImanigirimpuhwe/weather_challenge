import axios from 'axios';

export default {
    welcome: (req, res) => {
        return res.status(200).json({
            message: "Welcome to Weather API"
        })
    },
    getWeather: (req, res) => {
        const { country } = req.body;
        const axiosConfig = {
            method: 'GET',
            data:req.body,
            url: `${process.env.WEATHER_BASE_URL}/weather?q=${country}&appid=${process.env.API_KEY}`
        };

        axios(axiosConfig)
        .then((result) => {
            return res.status(200).json({
                message: "successful",
                data: result.data
            })
        })
        .catch((err) => {
            return res.status(400).json({
                data: err
            })
        });
    }
}