import * as Client from './index';

const apiKey = "f702b0991c1191d6dbd370b688ff780c"
let client = new Client.MovieDbClient(apiKey)

client.getMovie(550, null).then(response => {
    console.log(response);
});