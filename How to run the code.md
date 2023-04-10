1.  After cloning the repository from github, run the following command
    npm install - #to install all the dependencies
    npm run dev - #To run the app locally
    npm run test - #To run jest test on the app

2. The project has the following endpoints
    i.  localhost:3005/encode  (POST request method)
    ii. localhost:3005/decode  (POST request method)
    iii.    localhost:3005/statistics/shortUrlId  (POST request method)

3.  the "localhost:3005/encode" endpoint takes in a json body of 
    {
        "longUrl": "https://indicina.co"
    }

4.  the "localhost:3005/decode" endpoint takes in a json body of 
    {
        "shortUrlId": "insert_encoded_url_id"
    }

5.  the "localhost:3005/statistics/shortUrlId" endpoint takes in param, the param is the shortUrlId gotten   after encoding a long url

