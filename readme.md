# Compress-Decompress
A command line tool that simulating compresses a file from client, uploads it to an HTTP server, decompresses it and saves it using STREAM API.

Server(gzipreceive.js): server receives the data chunks from the network, decompresses them, and saves them as soon as they are received.

Client(gzipsend.js):  read the data from the file, then compress and send each chunk as soon as it is read from the filesystem.

To run start server:
`node gzipreceive`

Then run client to send the file:
`node gzipsend <path to file> localhost`


To run the program first start the server:  `node gzip <path to file>`
