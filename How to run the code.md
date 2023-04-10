After cloning the repository from github, Do the following 

WITHOUT DOCKER
1. run the following command


    npm install    #to install all the dependencies

    npm run dev   #To run the app locally

    npm run test   #To run test on the app

2. The project has the following endpoints

    i.  localhost:3005/encode  (POST request method)

    ii. localhost:3005/decode  (POST request method)

    iii.    localhost:3005/statistics/:shortUrlId  (POST request method)

3.  the "localhost:3005/encode" endpoint takes in a json body of 

    {

        "longUrl": "https://indicina.co"

    }

4.  the "localhost:3005/decode" endpoint takes in a json body of 

    {

        "shortUrlId": "insert_encoded_url_id"

    }

5.  the "localhost:3005/statistics/insert_encoded_url_id" endpoint takes in param, the param is the shortUrlId gotten   after encoding a long url


WITH DOCKER

1.  run the following command

    docker build -t imagename .       #to build the docker image

    docker run -p 3005:3005 imagename         #to run the project  

    docker run -e CI=true imagename npm run test        #To run test on the app

2.  Same as above
3.  Same as above
4.  Same as above
5.  Same as above

